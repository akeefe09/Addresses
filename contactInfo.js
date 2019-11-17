define([
    'mycalib',
    'globalsUrl/views/components/addressBase',
    'globalsUrl/views/components/addressKuwait',
    'globalsUrl/views/components/countryState',
    'globalsUrl/views/components/zipCode',
    'globalsUrl/views/components/phoneInput',
    'globalsUrl/views/components/patientPaci',
    'globalsUrl/views/components/button',
    'globalsUrl/utils/timeZonesUtils',
    'globalsUrl/utils/contactMethodsUtils',
    'globalsUrl/utils/countriesUtils',
    'globalsUrl/services/patientServiceController',
    'globalsUrl/configurationsController',
    'globalsUrl/commonConstants',
    'globalsUrl/modelLocator',
    'globalsUrl/marketController',
    'globalsUrl/templates/components/patient-info/contactInfo.html'
], function (
    MycaLib,
    AddressBaseView,
    AddressKuwaitView,
    CountryStateView,
    ZipCodeView,
    PhoneInput,
    PatientPaciView,
    MycaButton,
    TimeZonesUtils,
    ContactMethodsUtils,
    CountriesUtils,
    PatientServiceController,
    ConfigurationsController,
    CommonConstants,
    ModelLocator,
    MarketController,
    ContactInfoTemplate
) {
    const contactInfoView = MycaLib.Layout.extend({
        template: ContactInfoTemplate,

        id: 'contactInfoView',
        tagName: 'form',
        className: 'form-horizontal compact',

        regions: {
            countryRegion: '#countryBlock',
            addressRegion: '#addressBlock',
            zipCodeRegion: '#zipCodeBlock',
            homeRegion: '#homeBlock',
            mobileRegion: '#mobileBlock',
            workRegion: '#workBlock',
            buttonRegion: '.btnRegion',
            paciBlock: '#paciBlock'
        },

        applicationEvents: {
            'patient:contactsUpdated': 'getGuardians',
            'patient:contactsInformationsUpdated': 'refreshSection'
        },

        events: {
            'input input': 'displaySaveButton',
            'input textarea': 'displaySaveButton',
            'change select': 'displaySaveButton',
            'change input[type=checkbox]': 'displaySaveButton',
            'change @ui.contactSelect': 'getContactInfo',
            'keyup @ui.email': 'onEmailChange',
            'change @ui.email': 'onEmailChange',
            'change @ui.noEmailChk': 'onNoPatientEmailChange',
            'keyup @ui.referringProvider': 'onReferringProviderChange',
            'change @ui.referringProvider': 'onReferringProviderChange',
            'change @ui.noReferringProviderChk': 'onNoReferringProviderChange'
        },

        ui: {
            syncGroup: '.contactSync',
            contactSelect: '#contactSelect',
            guardianLabel: '#guardianContactLabel',
            noEmailSection: '#noEmailSection',
            email: '#email',
            noEmailChk: '#noEmailChk',
            noReferringProvider: '#noReferringProvider',
            referringProvider: '#referringProvider',
            noReferringProviderChk: '#noReferringProviderChk',
            timezone: '#timezone',
            preferredContact: '#preferredContact',
            otherContactInfo: '#otherContactInfo',
            otherContactInfoBlock: '#otherContactInfoBlock',
            referringProviderBlock: '#referringProviderBlock',
            mandatoryPhoneWarning: '#mandatoryPhoneWarning',
            mandatoryPatientEmail: '#mandatory-patient-email',
            mandatoryReferringProvider: '#mandatory-referring-provider',
            uiPaci: '#paciBlock'
        },

        countryState: null,
        address: null,
        zipCode: null,
        isMarketKuwait: false,

        templateHelpers () {
            return {
                renderTimeZones (selectedValue) {
                    return MycaLib.ComboBox.generate('timezone', new TimeZonesUtils().getTimeZonesById(), selectedValue, true);
                },

                renderPreferredContact (selectedValue) {
                    return MycaLib.ComboBox.generate('preferredContact', new ContactMethodsUtils().getContactMethods(), selectedValue, true, false);
                },

                getMandatorySpan (id) {
                    const idString = id ? ` id="mandatory-${id}"` : '';

                    return this.isMarketKuwait ? `<span${idString} class="mandatoryField horizontal">*</span>` : '';
                }
            };
        },

        initialize (options) {
            _.extend(this, _.pick(options, 'patientId'));

            this.isMarketKuwait = MarketController.isMarket(CommonConstants.market('KUWAIT'));
        },

        serializeData () {
            return this;
        },

        validationIsMarketKuwaitRule () {
            return this.isMarketKuwait;
        },

        onRender () {
            this._super();

            this.renderButton();
            this.renderCountry();
            this.renderZipCode();
            this.renderPhones();
            this.setCountryPhone(ConfigurationsController.get(CommonConstants.userConfigs('DEFAULT_COUNTRY')));
            this.ui.preferredContact.attr('data-preferredcontact', true);
            if (this.isMarketKuwait) {
                this.renderPaci();
            }

            this.hideSectionsByMarket();
            this.bindUIElements();
            this.refreshSection();
        },

        renderButton () {
            const saveButton = new MycaButton({
                model: new MycaLib.Model({
                    text: $.t('common:generic.save'),
                    className: 'btn myca',
                    type: 'button',
                    showLoading: true,
                    callback: $.proxy(function (data, button) {
                        return this.saveContactInfo(button);
                    }, this)
                })
            });

            this.buttonRegion.show(saveButton);
        },

        renderCountry () {
            this.countryState = new CountryStateView({
                countryRequired: this.isMarketKuwait,
                stateRequired: this.isMarketKuwait
            });

            this.countryRegion.show(this.countryState);
            this.listenTo(this.countryState, 'country:changed', this.displayAddressBlock);
        },

        renderZipCode () {
            this.zipCode = new ZipCodeView({countryStateControl: this.countryState});
            this.zipCodeRegion.show(this.zipCode);
        },

        renderPhones () {
            const onePhone = 'data-atleastonephone';

            this.homePhone = new PhoneInput({
                fieldId: 'homePhone',
                label: $.t('common:person.homePhone'),
                customValidation: this.isMarketKuwait ? onePhone : null,
                dataBypass: this.isMarketKuwait
            });
            this.homeRegion.show(this.homePhone);

            this.mobilePhone = new PhoneInput({
                fieldId: 'mobilePhone',
                label: $.t('common:person.mobilePhone'),
                customValidation: this.isMarketKuwait ? onePhone : null,
                dataBypass: this.isMarketKuwait
            });
            this.mobileRegion.show(this.mobilePhone);

            this.workPhone = new PhoneInput({
                fieldId: 'workPhone',
                label: $.t('common:person.workPhone'),
                customValidation: this.isMarketKuwait ? onePhone : null,
                dataBypass: this.isMarketKuwait
            });
            this.workRegion.show(this.workPhone);

            if (this.isMarketKuwait) {
                this.ui.mandatoryPhoneWarning.removeClass('hidden');
            }
        },

        renderPaci () {
            this.patientPaci = new PatientPaciView({patientId: this.patientId});
            this.paciBlock.show(this.patientPaci);
        },

        hideSectionsByMarket () {
            MarketController.hideByMarket(CommonConstants.market('USA'), this.ui.noReferringProvider);
        },

        displayAddressBlock (countryId) {
            const RADIX = 10;
            const countriesUtils = new CountriesUtils();

            if (this.address) {
                this.address.removeValidation();
            }
            this.address = parseInt(countryId, RADIX) === countriesUtils.KUWAIT ? new AddressKuwaitView({validate: true}) : new AddressBaseView();

            this.addressRegion.show(this.address);
        },

        setCountryPhone (countryId) {
            this.homePhone.setCountry(countryId);
            this.mobilePhone.setCountry(countryId);
            this.workPhone.setCountry(countryId);
        },

        refreshSection () {
            // to override
            PatientServiceController.getContactInfo(this.patientId, $.proxy(this.onGetPatientContactInfo, this));
        },

        onGetPatientContactInfo (contactInfoDTO) {
            this.contactInfoDTO = contactInfoDTO;

            this.getGuardians();
            this.displayContactInfo(contactInfoDTO);
        },

        havePatientEmail () {
            return !this.ui.noEmailChk.prop('checked');
        },

        onNoPatientEmailChange () {
            if (!this.havePatientEmail()) {
                MycaLib.Validation.reset(this.ui.email);
            }
            this.togglePatientEmailDisabled();
            this.togglePatientEmailMandatorySpan();
        },

        togglePatientEmailDisabled () {
            if (this.havePatientEmail()) {
                this.ui.email.removeAttr('disabled');
            } else {
                this.ui.email.attr('disabled', 'disabled');
            }
        },

        togglePatientEmailMandatorySpan () {
            if (this.havePatientEmail()) {
                this.ui.mandatoryPatientEmail.removeClass('hidden');
            } else {
                this.ui.mandatoryPatientEmail.addClass('hidden');
            }
        },

        validationReferringProviderRule () {
            return this.isMarketKuwait && this.haveReferringProvider();
        },

        haveReferringProvider () {
            return !this.ui.noReferringProviderChk.prop('checked');
        },

        onNoReferringProviderChange () {
            if (!this.haveReferringProvider()) {
                MycaLib.Validation.reset(this.ui.referringProvider);
            }
            this.toggleReferringProviderDisabled();
            this.toggleReferringProviderMandatorySpan();
        },

        toggleReferringProviderDisabled () {
            if (this.haveReferringProvider()) {
                this.ui.referringProvider.removeAttr('disabled');
            } else {
                this.ui.referringProvider.attr('disabled', 'disabled');
            }
        },

        toggleReferringProviderMandatorySpan () {
            if (this.haveReferringProvider()) {
                this.ui.mandatoryReferringProvider.removeClass('hidden');
            } else {
                this.ui.mandatoryReferringProvider.addClass('hidden');
            }
        },

        getGuardians () {
            // to override
            if (this.contactInfoDTO.get('syncPossible')) {
                PatientServiceController.getGuardians(this.patientId, $.proxy(this.populateSyncList, this));
            }
        },

        populateSyncList (guardians) {
            let htmlStr = `<option value='${this.patientId}'>${$.t('patientInfo:contactInfo.self')}</option>`;

            guardians.each(
                $.proxy(function (guardian) {
                    const selected = this.contactInfoDTO.get('syncPersonId') == guardian.get('personId') ? 'selected' : '';

                    htmlStr += `<option value='${guardian.get('personId')}' ${selected}>${guardian.getDisplayName()}</option>`;
                }, this)
            );

            this.ui.contactSelect.html(htmlStr);
            this.ui.syncGroup.toggleClass('hidden', guardians.length === 0);
            this.ui.guardianLabel.toggleClass('hidden', parseInt(this.ui.contactSelect.val()) === this.patientId);
        },

        validateIfNotEmpty (element) {
            return $(element).val() !== '';
        },

        getContactInfo () {
            // to override
            const contactId = this.ui.contactSelect.val();

            PatientServiceController.getContactInfo(contactId, $.proxy(this.displayContactInfo, this));

            this.ui.guardianLabel.toggleClass('hidden', contactId === this.patientId);
        },

        displayContactInfo (contactInfoDTO) {
            const RADIX = 10;
            const addressDto = contactInfoDTO.get('address');
            let city = '';
            const countriesUtils = new CountriesUtils();
            const contactPersonId = this.ui.contactSelect.val() ? parseInt(this.ui.contactSelect.val()) : '';

            if (addressDto) {
                city = parseInt(addressDto.countryId, RADIX) === countriesUtils.KUWAIT ? addressDto.city : '';

                this.zipCode.setValue(addressDto.zip, false);
                this.countryState.setValues(addressDto.countryId, addressDto.stateId, city);
                this.address.setAddressInfo(addressDto);
                this.zipCode.setCity(this.address.ui.city);
            }

            if (contactInfoDTO.get('syncPersonId') && contactPersonId === contactInfoDTO.get('personId')) {
                this.ui.email.val('');
                this.onEmailChange(false);
            } else {
                this.ui.email.val(contactInfoDTO.get('email'));
                this.onEmailChange(contactInfoDTO.get('noEmail'));
            }

            this.ui.referringProvider.val(contactInfoDTO.get('referringProvider'));
            this.onReferringProviderChange(contactInfoDTO.get('haveReferringProvider'));

            this.ui.timezone.val(contactInfoDTO.get('timeZoneId'));

            this.homePhone.setNumber(contactInfoDTO.get('homePhone'));
            this.mobilePhone.setNumber(contactInfoDTO.get('mobilePhone'));
            this.workPhone.setNumber(contactInfoDTO.get('workPhone'));

            this.ui.preferredContact.val(contactInfoDTO.get('preferredContactMethodId'));
            this.ui.otherContactInfo.val(contactInfoDTO.get('otherContactInfo'));
            this.trigger('contactInfosLoaded', contactInfoDTO);
        },

        onEmailChange (isChecked) {
            this.ui.noEmailChk.prop('checked', isChecked === true || false);
            this.ui.noEmailSection.toggleClass('hidden', this.ui.email.val() !== '');
        },

        onReferringProviderChange (isChecked) {
            if (isChecked !== null) {
                this.ui.noReferringProviderChk.prop('checked', !isChecked);
                this.ui.noReferringProvider.toggleClass('hidden', this.ui.referringProvider.val() !== '');
            }
        },

        displaySaveButton () {
            this.buttonRegion.$el.show();
        },

        validatePreferredContact (val, req, parsley) {
            let isValid = true;
            const preferredContact = parseInt(val);
            let message = '';

            switch (preferredContact) {
                case CommonConstants.contactMethods('EMAIL'):
                    if (this.ui.email.val() === '') {
                        isValid = false;
                        message = $.t('patientInfo:contactInfo.errorMethodEmail');
                    }
                    break;
                case CommonConstants.contactMethods('POSTAL_MAIL'):
                    if (this.ui.address.val() === '' || this.ui.city.val() === '' || this.ui.zip.val() === '') {
                        isValid = false;
                        message = $.t('patientInfo:contactInfo.errorMethodAddress');
                    }
                    break;
                case CommonConstants.contactMethods('HOME_PHONE'):
                    if (this.homePhone.getNumber() === '') {
                        isValid = false;
                        message = $.t('patientInfo:contactInfo.errorMethodPhone');
                    }
                    break;
                case CommonConstants.contactMethods('MOBILE_PHONE'):
                    if (this.mobilePhone.getNumber() === '') {
                        isValid = false;
                        message = $.t('patientInfo:contactInfo.errorMethodMobile');
                    }
                    break;
                case CommonConstants.contactMethods('WORK_PHONE'):
                    if (this.workPhone.getNumber() === '') {
                        isValid = false;
                        message = $.t('patientInfo:contactInfo.errorMethodWork');
                    }
                    break;
                case CommonConstants.contactMethods('EMERGENCY_CONTACT'):
                    // Need to be improved because if it's entered but not saved it will still be valid
                    if (!$('#emergencyPhone').intlTelInput('isValidNumber')) {
                        isValid = false;
                        message = $.t('patientInfo:contactInfo.errorMethodEmergency');
                    }
                    break;
                default:
                    break;
            }

            parsley.Validator.messages.preferredcontact = message;

            return isValid;
        },

        isValid () {
            return MycaLib.Validation.validateForm(
                this.$el,
                {
                    trigger: 'change',

                    messages: {
                        emailvalidator: $.t('common:errors.email'),
                        atleastonephone: $.t('common:person.atLeastOnePhoneNumber')
                    },

                    validators: {
                        emailvalidator: $.proxy(function (val, req, parsley) {
                            const emailValidator = parsley.Validator.validators.email;

                            return emailValidator(this.ui.email.val());
                        }, this),

                        preferredcontact: $.proxy(this.validatePreferredContact, this),

                        atleastonephone: $.proxy(this.validateIfAtLeastOnePhoneisValid, this)
                    }
                },
                this
            );
        },

        validateIfAtLeastOnePhoneisValid (val, req, parsley) {
            let isAtLeastOnePhoneNumberValid = false;

            if (!this.isMarketKuwait) {
                return true;
            }

            isAtLeastOnePhoneNumberValid = this.homePhone.isValidNumber() || this.mobilePhone.isValidNumber() || this.workPhone.isValidNumber();

            this.resetPhoneNumbersValidation(isAtLeastOnePhoneNumberValid);

            return isAtLeastOnePhoneNumberValid;
        },

        resetPhoneNumbersValidation (isValid) {
            if (isValid) {
                this.homePhone.resetValidation();
                this.mobilePhone.resetValidation();
                this.workPhone.resetValidation();
            }
        },

        formatCanadianPostalCode (postalCode) {
            let formattedCode = postalCode.replace(/ /g, '');

            formattedCode = `${formattedCode.substr(0, 3)} ${formattedCode.substr(3, 6)}`;

            return formattedCode.toUpperCase();
        },

        saveContactInfo (button) {
            if (!this.isValid()) {
                return false;
            }

            if (this.patientPaci) {
                this.patientPaci.savePaci();
            }

            const saveFunc = $.proxy(this.onContactInfoSaved, this, button);
            const errorFunc = $.proxy(this.resetButton, this, button);
            const contactInfoDTO = {};
            const addressDto = {};
            const syncPersonId = this.ui.contactSelect.val();
            const countryInfo = this.countryState.getValues();
            const addressInfo = this.address.getAddressInfo();
            let address = this.contactInfoDTO.get('address');

            address = address && address.hasOwnProperty('attributes') ? address : new MycaLib.Model(address);

            addressDto.line1 = addressInfo.line1;
            addressDto.line2 = addressInfo.line2;

            const countriesUtils = new CountriesUtils();

            if (parseInt(countryInfo.countryId) === countriesUtils.KUWAIT) {
                addressDto.city = countryInfo.areaName;
            } else {
                addressDto.city = addressInfo.city;
            }

            if (parseInt(countryInfo.countryId) === countriesUtils.CANADA) {
                addressDto.zip = this.formatCanadianPostalCode(this.zipCode.getValue());
            } else {
                addressDto.zip = this.zipCode.getValue();
            }

            addressDto.countryId = countryInfo.countryId;
            addressDto.stateId = countryInfo.stateId;
            address.set(addressDto);

            contactInfoDTO.syncPersonId = syncPersonId != this.patientId ? syncPersonId : null;
            contactInfoDTO.address = address;

            contactInfoDTO.noEmail = this.ui.noEmailChk.prop('checked');
            contactInfoDTO.email = contactInfoDTO.noEmail ? null : this.ui.email.val();

            contactInfoDTO.haveReferringProvider = !this.ui.noReferringProviderChk.prop('checked');
            contactInfoDTO.referringProvider = contactInfoDTO.haveReferringProvider ? this.ui.referringProvider.val() : null;

            contactInfoDTO.timeZoneId = this.ui.timezone.val();
            contactInfoDTO.homePhone = this.homePhone.getNumber();
            contactInfoDTO.mobilePhone = this.mobilePhone.getNumber();
            contactInfoDTO.workPhone = this.workPhone.getNumber();
            contactInfoDTO.preferredContactMethodId = this.ui.preferredContact.val();
            contactInfoDTO.otherContactInfo = this.ui.otherContactInfo.val();

            // Set only once to enable the changedAttributes function to work correctly.
            this.contactInfoDTO.set(contactInfoDTO);
            this.contactInfoDTO.save(null, {
                success: saveFunc,
                error: errorFunc
            });
        },

        onContactInfoSaved (button) {
            this.trigger('contactInfosLoaded', this.contactInfoDTO);
            this.resetButton(button);

            // Do not trigger for all attributes change (only side bar avatar is updated)
            const attributes = this.contactInfoDTO.changedAttributes();
            const addressAttributes = this.contactInfoDTO.get('address').changedAttributes();

            if (
                attributes
                    && _.intersection(_.keys(attributes), [
                        'homePhone',
                        'mobilePhone',
                        'workPhone',
                        'preferredContactMethodId'
                    ]).length !== 0
                || addressAttributes
            ) {
                Application.vent.trigger('patient:contactInfoUpdated', this.patientId);
            }
        },

        resetButton (button) {
            button.reset();
            this.buttonRegion.$el.hide();
        }
    });

    return contactInfoView;
});