define([
    'mycalib',
    'globalsUrl/utils/areasUtils',
    'globalsUrl/utils/statesUtils',
    'globalsUrl/utils/countriesUtils',
    'globalsUrl/templates/components/countryState.html',
    'globalsUrl/configurationsController'
], function (MycaLib, AreasUtils, StatesUtils, CountriesUtils, CountryStateTemplate, ConfigurationsController) {
    const countryStateView = MycaLib.View.extend({
        template: CountryStateTemplate,
        states: null,
        areas: null,
        countriesUtils: new CountriesUtils(),

        ui: {
            country: '#country',
            countryControlGroup: '#country-control-group',
            stateGroup: '.stateGroup',
            areaGroup: '.areaGroup',
            stateLbl: '.stateGroup #stateLabel',
            stateBlock: '.stateGroup .state',
            state: '#state',
            areaLbl: '.areaGroup #areaLabel',
            areaBlock: '.areaGroup .area',
            area: '#area',
            stateMandatory: '.stateGroup label.control-label span.mandatoryField'
        },

        events: {
            'change @ui.country' () {
                this.createStateRegion();
            },
            'change @ui.state' () {
                this.createAreaRegion();
            }
        },

        templateHelpers () {
            const areaRequired = this.options.areaRequire;
            const countryRequired = this.options.countryRequired;
            const stateRequired = this.options.stateRequired;

            return {
                renderCountries: () => {
                    const DEFAULT_COUNTRY_ID = ConfigurationsController.get('defaultCountry');
                    const countryList = this.countriesUtils.getCountries();

                    return MycaLib.ComboBox.generate(
                        'country',
                        countryList,
                        DEFAULT_COUNTRY_ID,
                        countryRequired,
                        true,
                        null,
                        $.t('common:address.country')
                    );
                },
                manageCountryMandatoryStar: $.proxy(function () {
                    return countryRequired ? this.getMandatorySpan() : '';
                }, this),
                stateRequiredManagement () {
                    return stateRequired ? 'data-required="true"' : '';
                },
                manageStateMandatoryStar: $.proxy(function () {
                    return stateRequired ? this.getMandatorySpan() : '';
                }, this),
                areaRequiredManagement () {
                    return areaRequired ? 'data-required="true"' : '';
                },
                manageAreaMandatoryStar: $.proxy(function () {
                    return areaRequired ? this.getMandatorySpan() : '';
                }, this)
            };
        },

        getMandatorySpan () {
            return '<span class="mandatoryField horizontal">*</span>';
        },

        initialize () {
            this.stateTemp = {};
            this.areaTemp = {};
        },

        onRender () {
            this._super();
            this.createStateRegion();
            this.createAreaRegion();
            this.ui.state.on('change', $.proxy(this.onStateChange, this));
        },

        createStateRegion (stateId) {
            const countryId = this.ui.country.val();

            this.states = new StatesUtils().getStateByCountryId(countryId);
            MycaLib.Validation.removeItem(this.ui.state);

            if (this.states) {
                this.trigger('country:checkMandatoryState', countryId);
                this.generateStateSelect(stateId, countryId);
            } else {
                this.ui.stateGroup.addClass('hidden');
                this.ui.state.val('');
                this.ui.state.removeAttr('data-required');
            }

            this.createAreaRegion();
            this.trigger('country:changed', countryId);
        },

        setStateMandatory (mandatory) {
            this.bindUIElements();

            if (MycaLib.util.hasValue(this.ui.state)) {
                if (mandatory) {
                    this.ui.state.attr('data-required', 'true');
                    this.options.stateRequired = true;
                    this.ui.stateMandatory.html('*');
                } else {
                    this.ui.state.attr('data-required', 'false');
                    this.options.stateRequired = false;
                    this.ui.stateMandatory.html(' ');
                }
            }
        },

        generateStateSelect (stateId, countryId) {
            let placeholder = $.t('common:address.state');

            if (countryId === this.countriesUtils.CANADA.toString()) {
                placeholder = $.t('common:address.province');
            }

            const stateOptions = MycaLib.ComboBox.generate(
                'state',
                this.states.data,
                stateId || this.stateTemp[this.ui.country.val()],
                this.options.stateRequired,
                true,
                null,
                placeholder
            );

            this.ui.stateBlock.html(stateOptions);
            this.bindUIElements();
            MycaLib.Validation.addItem(this.ui.state);
            this.ui.stateGroup.removeClass('hidden');
            this.ui.stateLbl.text(this.states.label);
        },

        generateAreaSelect (areaId) {
            const areaOptions = MycaLib.ComboBox.generate(
                'area',
                this.areas.data,
                areaId || this.areaTemp[this.ui.state.val()],
                this.options.areaRequired,
                true
            );

            this.ui.areaBlock.html(areaOptions);
            this.ui.areaLbl.text(this.areas.label);
            this.bindUIElements();
            MycaLib.Validation.addItem(this.ui.area);
            this.ui.areaGroup.removeClass('hidden');
        },

        createAreaRegion (areaId) {
            const stateId = this.ui.state.val();

            this.areas = new AreasUtils().getAreaByStateId(stateId);
            MycaLib.Validation.removeItem(this.ui.area);

            if (this.areas) {
                this.generateAreaSelect(areaId);
            } else {
                this.ui.areaGroup.addClass('hidden');
                this.ui.area.val('');
                this.ui.area.removeAttr('data-required');
            }
        },

        // Used by parent views to get the combo box element (NG 2016-05)
        getStateSelect () {
            return this.ui.state;
        },

        onStateChange (evt) {
            const RADIX = 10;

            this.stateTemp[this.ui.country.val()] = parseInt(evt.target.value, RADIX);
        },

        disableCountry () {
            this.ui.country.prop('disabled', true);
        },

        hideCountrySelect () {
            this.ui.countryControlGroup.addClass('hidden');
        },

        resetToNoSelectedState () {
            this.ui.state.prop('selectedIndex', 0);
        },

        setValues (countryId, stateId, areaName) {
            let areaId = null;

            if (!countryId && stateId) {
                throw new Error('Country id must be set when state id is set');
            }
            if (!countryId && areaName) {
                throw new Error('Country id must be set when area is set');
            }
            if (!stateId && areaName) {
                throw new Error('State id must be set when area is set');
            }

            this.ui.country.val(countryId);
            this.createStateRegion(stateId);

            if (areaName) {
                areaId = new AreasUtils().getAreaIdByAreaName(stateId, areaName);
            }

            this.createAreaRegion(areaId);

            this.stateTemp[countryId] = stateId;
            this.areaTemp[stateId] = areaId;
        },

        getValues () {
            const RADIX = 10;
            const areaId = parseInt(this.ui.area.val(), RADIX);
            let areaName = null;
            const countryId = parseInt(this.ui.country.val(), RADIX);
            const stateId = parseInt(this.ui.state.val(), RADIX);

            areaName = new AreasUtils().getAreaNameByAreaId(stateId, areaId);

            return {countryId, stateId, areaName};
        },

        onClose () {
            this.ui.state.off();
        }
    });

    return countryStateView;
});