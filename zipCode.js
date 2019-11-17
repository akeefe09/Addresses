define([
    'mycalib',
    'globalsUrl/utils/statesUtils',
    'globalsUrl/utils/countriesUtils',
    'globalsUrl/utils/addressUtils',
    'globalsUrl/templates/components/zipCode.html'
], function (MycaLib, StatesUtils, CountriesUtils, AddressUtils, ZipCodeTemplate) {
    const zipCodeView = MycaLib.View.extend({
        template: ZipCodeTemplate,
        required: false,
        countryStateControl: null,
        cityControl: null,
        countriesUtils: new CountriesUtils(),
        addressUtils: new AddressUtils(),
        populateAddressFromZipCodeAllowed: true,

        ui: {
            zip: '#zipCode',
            zipCodeLabel: '.zipCodeLabel',
            mandatoryField: '.mandatoryField'
        },

        events: {
            'change @ui.zip': 'onZipCodeChange'
        },

        initialize (pOptions) {
            this.required = pOptions.required ? pOptions.required : false;
            this.countryStateControl = pOptions.countryStateControl ? pOptions.countryStateControl : null;
            this.cityControl = pOptions.cityControl ? pOptions.cityControl : null;
            this.required = pOptions.required ? pOptions.required : false;
            this.hidePlaceholder = pOptions.hidePlaceholder ? pOptions.hidePlaceholder : false;

            if (this.countryStateControl) {
                this.countryStateControl.on('country:changed', $.proxy(this.onCountryChange, this));
            }
        },

        onZipCodeChange (pEvent) {
            const countryState = this.countryStateControl.getValues();

            // State/city correspondence only enabled for United States zip codes
            if (countryState.countryId !== this.countriesUtils.USA) {
                return;
            }

            if (MycaLib.Validation.validateField(this.ui.zip, {}, this)) {
                if (this.countryStateControl && this.cityControl && this.populateAddressFromZipCodeAllowed) {
                    this.addressUtils.populateAddressFromZipCode(
                        this.ui.zip,
                        this.cityControl,
                        this.countryStateControl.getStateSelect(),
                        countryState.countryId
                    );
                }
            } else {
                MycaLib.Validation.reset(this.ui.zip);
            }
            this.populateAddressFromZipCodeAllowed = true;
        },

        isValid () {
            return MycaLib.Validation.validateField(this.ui.zip, {}, this);
        },

        onCountryChange (pCountryId) {
            const countriesUtils = new CountriesUtils();
            const label = $.t(`common:address.${this.countriesUtils.getAddressCodeType(pCountryId)}`);

            this.ui.zipCodeLabel.text(label);

            this.renderPlaceholder();

            if (parseInt(pCountryId) === countriesUtils.KUWAIT) {
                this.ui.zip.val('');
                $('#zipCodeBlock', this.el).addClass('hidden');
            } else {
                $('#zipCodeBlock', this.el).removeClass('hidden');
            }

            this.assignRegexValidator();
        },

        renderPlaceholder () {
            const countryState = this.countryStateControl.getValues();
            const label = $.t(`common:address.${this.countriesUtils.getAddressCodeType(countryState.countryId)}`);

            if (this.hidePlaceholder) {
                this.ui.zip.attr('placeholder', '');
            } else {
                this.ui.zip.attr('placeholder', label);
            }
        },

        onRender () {
            this._super();

            if (this.required) {
                this.ui.zip.attr('data-required', this.required);
                this.ui.mandatoryField.removeClass('hidden');
            }

            this.renderPlaceholder();

            this.assignRegexValidator();
        },

        assignRegexValidator () {
            const countryState = this.countryStateControl.getValues();
            const validator = this.countriesUtils.getCountryZipCodeRegExp([countryState.countryId]);

            if (this.ui.zip.data('parsleyField')) {
                this.ui.zip.parsley('updateConstraint', {postalcode: validator});
            } else {
                this.ui.zip.attr('data-postalcode', validator);
            }

            this.onZipCodeChange();
        },

        getValue () {
            if (this.ui.zip) {
                return this.ui.zip.val();
            }

            return '';
        },

        setValue (pValue, shouldPopulate = true) {
            this.populateAddressFromZipCodeAllowed = shouldPopulate;
            this.ui.zip.val(pValue);
        },

        setCity (city) {
            this.cityControl = city;
        }
    });

    return zipCodeView;
});