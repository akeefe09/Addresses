define([
    'mycalib',
    'globalsUrl/utils/countriesUtils'
], function (MycaLib, CountriesUtils) {
    const statesUtils = function () {
        if (this.instance !== undefined) {
            return this.instance;
        }
        this.instance = this;

        return {
            unitedStates: [
                {data: 14, label: $.t('common:statesName.14'), extra: 'AL'},
                {data: 15, label: $.t('common:statesName.15'), extra: 'AK'},
                {data: 16, label: $.t('common:statesName.16'), extra: 'AZ'},
                {data: 17, label: $.t('common:statesName.17'), extra: 'AR'},
                {data: 18, label: $.t('common:statesName.18'), extra: 'CA'},
                {data: 19, label: $.t('common:statesName.19'), extra: 'CO'},
                {data: 20, label: $.t('common:statesName.20'), extra: 'CT'},
                {data: 21, label: $.t('common:statesName.21'), extra: 'DE'},
                {data: 64, label: $.t('common:statesName.64'), extra: 'DC'},
                {data: 22, label: $.t('common:statesName.22'), extra: 'FL'},
                {data: 23, label: $.t('common:statesName.23'), extra: 'GA'},
                {data: 24, label: $.t('common:statesName.24'), extra: 'HI'},
                {data: 25, label: $.t('common:statesName.25'), extra: 'ID'},
                {data: 26, label: $.t('common:statesName.26'), extra: 'IL'},
                {data: 27, label: $.t('common:statesName.27'), extra: 'IN'},
                {data: 28, label: $.t('common:statesName.28'), extra: 'IA'},
                {data: 29, label: $.t('common:statesName.29'), extra: 'KS'},
                {data: 30, label: $.t('common:statesName.30'), extra: 'KY'},
                {data: 31, label: $.t('common:statesName.31'), extra: 'LA'},
                {data: 32, label: $.t('common:statesName.32'), extra: 'ME'},
                {data: 33, label: $.t('common:statesName.33'), extra: 'MD'},
                {data: 34, label: $.t('common:statesName.34'), extra: 'MA'},
                {data: 35, label: $.t('common:statesName.35'), extra: 'MI'},
                {data: 36, label: $.t('common:statesName.36'), extra: 'MN'},
                {data: 37, label: $.t('common:statesName.37'), extra: 'MS'},
                {data: 38, label: $.t('common:statesName.38'), extra: 'MO'},
                {data: 39, label: $.t('common:statesName.39'), extra: 'MT'},
                {data: 40, label: $.t('common:statesName.40'), extra: 'NE'},
                {data: 41, label: $.t('common:statesName.41'), extra: 'NV'},
                {data: 42, label: $.t('common:statesName.42'), extra: 'NH'},
                {data: 43, label: $.t('common:statesName.43'), extra: 'NJ'},
                {data: 44, label: $.t('common:statesName.44'), extra: 'NM'},
                {data: 45, label: $.t('common:statesName.45'), extra: 'NY'},
                {data: 46, label: $.t('common:statesName.46'), extra: 'NC'},
                {data: 47, label: $.t('common:statesName.47'), extra: 'ND'},
                {data: 48, label: $.t('common:statesName.48'), extra: 'OH'},
                {data: 49, label: $.t('common:statesName.49'), extra: 'OK'},
                {data: 50, label: $.t('common:statesName.50'), extra: 'OR'},
                {data: 51, label: $.t('common:statesName.51'), extra: 'PA'},
                {data: 52, label: $.t('common:statesName.52'), extra: 'RI'},
                {data: 53, label: $.t('common:statesName.53'), extra: 'SC'},
                {data: 54, label: $.t('common:statesName.54'), extra: 'SD'},
                {data: 55, label: $.t('common:statesName.55'), extra: 'TN'},
                {data: 56, label: $.t('common:statesName.56'), extra: 'TX'},
                {data: 57, label: $.t('common:statesName.57'), extra: 'UT'},
                {data: 58, label: $.t('common:statesName.58'), extra: 'VT'},
                {data: 59, label: $.t('common:statesName.59'), extra: 'VA'},
                {data: 60, label: $.t('common:statesName.60'), extra: 'WA'},
                {data: 61, label: $.t('common:statesName.61'), extra: 'WV'},
                {data: 62, label: $.t('common:statesName.62'), extra: 'WI'},
                {data: 63, label: $.t('common:statesName.63'), extra: 'WY'}
            ],

            unitedStatesByAbv: [
                {data: 'AL', label: $.t('common:statesName.14')},
                {data: 'AK', label: $.t('common:statesName.15')},
                {data: 'AZ', label: $.t('common:statesName.16')},
                {data: 'AR', label: $.t('common:statesName.17')},
                {data: 'CA', label: $.t('common:statesName.18')},
                {data: 'CO', label: $.t('common:statesName.19')},
                {data: 'CT', label: $.t('common:statesName.20')},
                {data: 'DE', label: $.t('common:statesName.21')},
                {data: 'DC', label: $.t('common:statesName.64')},
                {data: 'FL', label: $.t('common:statesName.22')},
                {data: 'GA', label: $.t('common:statesName.23')},
                {data: 'HI', label: $.t('common:statesName.24')},
                {data: 'ID', label: $.t('common:statesName.25')},
                {data: 'IL', label: $.t('common:statesName.26')},
                {data: 'IN', label: $.t('common:statesName.27')},
                {data: 'IA', label: $.t('common:statesName.28')},
                {data: 'KS', label: $.t('common:statesName.29')},
                {data: 'KY', label: $.t('common:statesName.30')},
                {data: 'LA', label: $.t('common:statesName.31')},
                {data: 'ME', label: $.t('common:statesName.32')},
                {data: 'MD', label: $.t('common:statesName.33')},
                {data: 'MA', label: $.t('common:statesName.34')},
                {data: 'MI', label: $.t('common:statesName.35')},
                {data: 'MN', label: $.t('common:statesName.36')},
                {data: 'MS', label: $.t('common:statesName.37')},
                {data: 'MO', label: $.t('common:statesName.38')},
                {data: 'MT', label: $.t('common:statesName.39')},
                {data: 'NE', label: $.t('common:statesName.40')},
                {data: 'NV', label: $.t('common:statesName.41')},
                {data: 'NH', label: $.t('common:statesName.42')},
                {data: 'NJ', label: $.t('common:statesName.43')},
                {data: 'NM', label: $.t('common:statesName.44')},
                {data: 'NY', label: $.t('common:statesName.45')},
                {data: 'NC', label: $.t('common:statesName.46')},
                {data: 'ND', label: $.t('common:statesName.47')},
                {data: 'OH', label: $.t('common:statesName.48')},
                {data: 'OK', label: $.t('common:statesName.49')},
                {data: 'OR', label: $.t('common:statesName.50')},
                {data: 'PA', label: $.t('common:statesName.51')},
                {data: 'RI', label: $.t('common:statesName.52')},
                {data: 'SC', label: $.t('common:statesName.53')},
                {data: 'SD', label: $.t('common:statesName.54')},
                {data: 'TN', label: $.t('common:statesName.55')},
                {data: 'TX', label: $.t('common:statesName.56')},
                {data: 'UT', label: $.t('common:statesName.57')},
                {data: 'VT', label: $.t('common:statesName.58')},
                {data: 'VA', label: $.t('common:statesName.59')},
                {data: 'WA', label: $.t('common:statesName.60')},
                {data: 'WV', label: $.t('common:statesName.61')},
                {data: 'WI', label: $.t('common:statesName.62')},
                {data: 'WY', label: $.t('common:statesName.63')}
            ],

            provinces: [
                {data: 1, label: $.t('common:provincesName.1'), extra: 'AB'},
                {data: 2, label: $.t('common:provincesName.2'), extra: 'BC'},
                {data: 3, label: $.t('common:provincesName.3'), extra: 'MB'},
                {data: 4, label: $.t('common:provincesName.4'), extra: 'NB'},
                {data: 5, label: $.t('common:provincesName.5'), extra: 'NL'},
                {data: 6, label: $.t('common:provincesName.6'), extra: 'NT'},
                {data: 7, label: $.t('common:provincesName.7'), extra: 'NS'},
                {data: 8, label: $.t('common:provincesName.8'), extra: 'NU'},
                {data: 9, label: $.t('common:provincesName.9'), extra: 'ON'},
                {data: 10, label: $.t('common:provincesName.10'), extra: 'PE'},
                {data: 11, label: $.t('common:provincesName.11'), extra: 'QC'},
                {data: 12, label: $.t('common:provincesName.12'), extra: 'SK'},
                {data: 13, label: $.t('common:provincesName.13'), extra: 'YT'}
            ],

            australianStates: [
                {data: 74, label: $.t('common:australianStates.74'), extra: 'ACT'},
                {data: 75, label: $.t('common:australianStates.75'), extra: 'NSW'},
                {data: 76, label: $.t('common:australianStates.76'), extra: 'NT'},
                {data: 77, label: $.t('common:australianStates.77'), extra: 'QLD'},
                {data: 78, label: $.t('common:australianStates.78'), extra: 'SA'},
                {data: 79, label: $.t('common:australianStates.79'), extra: 'TAS'},
                {data: 80, label: $.t('common:australianStates.80'), extra: 'VIC'},
                {data: 81, label: $.t('common:australianStates.81'), extra: 'WA'}
            ],

            governates: [
                {data: 71, label: $.t('common:governatesName.71'), extra: 'AH'},
                {data: 67, label: $.t('common:governatesName.67'), extra: 'KU'},
                {data: 73, label: $.t('common:governatesName.73'), extra: 'SA'},
                {data: 69, label: $.t('common:governatesName.69'), extra: 'FA'},
                {data: 68, label: $.t('common:governatesName.68'), extra: 'HW'},
                {data: 72, label: $.t('common:governatesName.72'), extra: 'JA'},
                {data: 70, label: $.t('common:governatesName.70'), extra: 'MU'}
            ],

            getStateByCountryId (countryId) {
                const countriesUtils = new CountriesUtils();

                switch (parseInt(countryId)) {
                    case countriesUtils.USA:
                        return {data: this.unitedStates, label: $.t('common:address.state')};
                    case countriesUtils.CANADA:
                        return {data: this.provinces, label: $.t('common:address.province')};
                    case countriesUtils.KUWAIT:
                        return {data: this.governates, label: $.t('common:address.governate')};
                    case countriesUtils.AUSTRALIA:
                        return {data: this.australianStates, label: $.t('common:address.state')};
                    default:
                        break;
                }

                return null;
            },

            getStateAbbrByStateId (stateId) {
                // This is a shortcut to find the state abbr, by merging together states of all countries
                // If the list grows too much, another way should be used (NG 2016-06)
                const allStates = _.union(this.unitedStates, this.provinces, this.governates, this.australianStates);
                const state = _.findWhere(allStates, {data: parseInt(stateId)});

                return state ? state.extra : '';
            },

            getStateAbbrByCountryIdAndStateId (countryId, stateId) {
                const datas = this.getStateByCountryId(countryId);

                if (datas) {
                    const state = _.findWhere(datas.data, {data: parseInt(stateId)});

                    return state ? state.extra : '';
                }

                return '';
            },

            getStateIdByStateAbbr (countryId, stateAbbr) {
                const datas = this.getStateByCountryId(countryId);

                if (datas) {
                    const state = _.findWhere(datas.data, {extra: stateAbbr});

                    return state ? state.data : '';
                }

                return '';
            }
        };
    };

    return statesUtils;
});