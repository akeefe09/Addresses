define(['mycalib'], function (MycaLib) {
    const countriesUtils = function () {
        if (this.instance !== undefined) {
            return this.instance;
        }
        this.instance = this;

        return {
            USA: 2,
            CANADA: 1,
            KUWAIT: 115,
            AUSTRALIA: 15,

            // TO DO : externalize strings in resource bundle
            getCountries () {
                return [
                    {label: 'Afghanistan', abv: 'AF', data: 3},
                    {label: 'Åland Islands', abv: 'AX', data: 4},
                    {label: 'Albania', abv: 'AL', data: 5},
                    {label: 'Algeria', abv: 'DZ', data: 6},
                    {label: 'American Samoa', abv: 'AS', data: 7},
                    {label: 'Andorra', abv: 'AD', data: 8},
                    {label: 'Angola', abv: 'AO', data: 9},
                    {label: 'Anguilla', abv: 'AI', data: 10},
                    {label: 'Antarctica', abv: 'AQ', data: 40},
                    {label: 'Antigua and Barbuda', abv: 'AG', data: 11},
                    {label: 'Argentina', abv: 'AR', data: 12},
                    {label: 'Armenia', abv: 'AM', data: 13},
                    {label: 'Aruba', abv: 'AW', data: 14},
                    {label: 'Australia', abv: 'AU', data: 15, addressCode: 'postCode', regex: '^[0-9]{4}$'},
                    {label: 'Austria', abv: 'AT', data: 16},
                    {label: 'Azerbaijan', abv: 'AZ', data: 17},
                    {label: 'Bahamas', abv: 'BS', data: 18},
                    {label: 'Bahrain', abv: 'BH', data: 19},
                    {label: 'Bangladesh', abv: 'BD', data: 20},
                    {label: 'Barbados', abv: 'BB', data: 21},
                    {label: 'Belarus', abv: 'BY', data: 22},
                    {label: 'Belgium', abv: 'BE', data: 23},
                    {label: 'Belize', abv: 'BZ', data: 24},
                    {label: 'Benin', abv: 'BJ', data: 25},
                    {label: 'Bermuda', abv: 'BM', data: 26},
                    {label: 'Bhutan', abv: 'BT', data: 27},
                    {label: 'Bolivia, Plurinational State Of', abv: 'BO', data: 28},
                    {label: 'Bonaire, Sint Eustatius And Saba', abv: 'BQ', data: 29},
                    {label: 'Bosnia And Herzegovina', abv: 'BA', data: 30},
                    {label: 'Botswana', abv: 'BW', data: 31},
                    {label: 'Bouvet Island', abv: 'BV', data: 33},
                    {label: 'Brazil', abv: 'BR', data: 32},
                    {label: 'British Indian Ocean Territory', abv: 'IO', data: 34},
                    {label: 'Brunei Darussalam', abv: 'BN', data: 36},
                    {label: 'Bulgaria', abv: 'BG', data: 35},
                    {label: 'Burkina Faso', abv: 'BF', data: 37},
                    {label: 'Burundi', abv: 'BI', data: 38},
                    {label: 'Cambodia', abv: 'KH', data: 39},
                    {label: 'Cameroon', abv: 'CM', data: 42},
                    {
                        label: 'Canada',
                        abv: 'CA',
                        data: 1,
                        addressCode: 'postalCode',
                        regex: '(^[ABCEGHJKLMNPRSTVXYabceghjklmnpstvxy]{1}\\d{1}[A-Za-z]{1} ?\\d{1}[A-Za-z]{1}\\d{1})$'
                    },
                    {label: 'Cape Verde', abv: 'CV', data: 43},
                    {label: 'Cayman Islands', abv: 'KY', data: 41},
                    {label: 'Central African Republic', abv: 'CF', data: 47},
                    {label: 'Chad', abv: 'TD', data: 49},
                    {label: 'Chile', abv: 'CL', data: 44},
                    {label: 'China', abv: 'CN', data: 45},
                    {label: 'Christmas Island', abv: 'CX', data: 50},
                    {label: 'Cocos (Keeling) Islands', abv: 'CC', data: 51},
                    {label: 'Colombia', abv: 'CO', data: 48},
                    {label: 'Comoros', abv: 'KM', data: 52},
                    {label: 'Congo', abv: 'CG', data: 54},
                    {label: 'Congo, The Democratic Republic Of The', abv: 'CD', data: 56},
                    {label: 'Cook Islands', abv: 'CK', data: 60},
                    {label: 'Costa Rica', abv: 'CR', data: 53},
                    {label: 'Croatia', abv: 'HR', data: 55},
                    {label: 'Cuba', abv: 'CU', data: 67},
                    {label: 'Curaçao', abv: 'CW', data: 69},
                    {label: 'Cyprus', abv: 'CY', data: 57},
                    {label: 'Czech Republic', abv: 'CZ', data: 58},
                    {label: 'Côte D\'ivoire', abv: 'CI', data: 66},
                    {label: 'Denmark', abv: 'DK', data: 59},
                    {label: 'Djibouti', abv: 'DJ', data: 70},
                    {label: 'Dominica', abv: 'DM', data: 61},
                    {label: 'Dominican Republic', abv: 'DO', data: 62},
                    {label: 'Ecuador', abv: 'EC', data: 63},
                    {label: 'Egypt', abv: 'EG', data: 64},
                    {label: 'El Salvador', abv: 'SV', data: 65},
                    {label: 'Equatorial Guinea', abv: 'GQ', data: 71},
                    {label: 'Eritrea', abv: 'ER', data: 72},
                    {label: 'Estonia', abv: 'EE', data: 68},
                    {label: 'Ethiopia', abv: 'ET', data: 75},
                    {label: 'Falkland Islands (Malvinas)', abv: 'FK', data: 76},
                    {label: 'Faroe Islands', abv: 'FO', data: 77},
                    {label: 'Fiji', abv: 'FJ', data: 78},
                    {label: 'Finland', abv: 'FI', data: 73},
                    {label: 'France', abv: 'FR', data: 74},
                    {label: 'French Guiana', abv: 'GF', data: 79},
                    {label: 'French Polynesia', abv: 'PF', data: 80},
                    {label: 'French Southern Territories', abv: 'TF', data: 82},
                    {label: 'Gabon', abv: 'GA', data: 83},
                    {label: 'Gambia', abv: 'GM', data: 85},
                    {label: 'Georgia', abv: 'GE', data: 86},
                    {label: 'Germany', abv: 'DE', data: 81},
                    {label: 'Ghana', abv: 'GH', data: 87},
                    {label: 'Gibraltar', abv: 'GI', data: 90},
                    {label: 'Greece', abv: 'GR', data: 84},
                    {label: 'Greenland', abv: 'GL', data: 91},
                    {label: 'Grenada', abv: 'GD', data: 92},
                    {label: 'Guadeloupe', abv: 'GP', data: 93},
                    {label: 'Guam', abv: 'GU', data: 88},
                    {label: 'Guatemala', abv: 'GT', data: 89},
                    {label: 'Guernsey', abv: 'GG', data: 94},
                    {label: 'Guinea', abv: 'GN', data: 95},
                    {label: 'Guinea-Bissau', abv: 'GW', data: 110},
                    {label: 'Guyana', abv: 'GY', data: 111},
                    {label: 'Haiti', abv: 'HT', data: 112},
                    {label: 'Heard Island And Mcdonald Islands', abv: 'HM', data: 114},
                    {label: 'Holy See (Vatican City State)', abv: 'VA', data: 116},
                    {label: 'Honduras', abv: 'HN', data: 96},
                    {label: 'Hong Kong', abv: 'HK', data: 97},
                    {label: 'Hungary', abv: 'HU', data: 98},
                    {label: 'Iceland', abv: 'IS', data: 99},
                    {label: 'India', abv: 'IN', data: 100},
                    {label: 'Indonesia', abv: 'ID', data: 101},
                    {label: 'Iran, Islamic Republic of', abv: 'IR', data: 102},
                    {label: 'Iraq', abv: 'IQ', data: 103},
                    {label: 'Ireland', abv: 'IE', data: 104},
                    {label: 'Isle Of Man', abv: 'IM', data: 117},
                    {label: 'Israel', abv: 'IL', data: 105},
                    {label: 'Italy', abv: 'IT', data: 106},
                    {label: 'Jamaica', abv: 'JM', data: 107},
                    {label: 'Japan', abv: 'JP', data: 108},
                    {label: 'Jersey', abv: 'JE', data: 120},
                    {label: 'Jordan', abv: 'JO', data: 109},
                    {label: 'Kazakhstan', abv: 'KZ', data: 121},
                    {label: 'Kenya', abv: 'KE', data: 122},
                    {label: 'Kiribati', abv: 'KI', data: 123},
                    {label: 'Korea Democratic People\'s Republic of', abv: 'KP', data: 113},
                    {label: 'Korea, Republic Of', abv: 'KR', data: 125},
                    {label: 'Kuwait', abv: 'KW', data: 115, addressCode: 'poBox'},
                    {label: 'Kyrgyzstan', abv: 'KG', data: 126},
                    {label: 'Lao People\'s Democratic Republic', abv: 'LA', data: 127},
                    {label: 'Latvia', abv: 'LV', data: 118},
                    {label: 'Lebanon', abv: 'LB', data: 119},
                    {label: 'Lesotho', abv: 'LS', data: 128},
                    {label: 'Liberia', abv: 'LR', data: 129},
                    {label: 'Libya', abv: 'LY', data: 131},
                    {label: 'Liechtenstein', abv: 'LI', data: 132},
                    {label: 'Lithuania', abv: 'LT', data: 124},
                    {label: 'Luxembourg', abv: 'LU', data: 133},
                    {label: 'Macao', abv: 'MO', data: 136},
                    {label: 'Macedonia, The Former Yugoslav Republic Of', abv: 'MK', data: 137},
                    {label: 'Madagascar', abv: 'MG', data: 138},
                    {label: 'Malawi', abv: 'MW', data: 140},
                    {label: 'Malaysia', abv: 'MY', data: 130},
                    {label: 'Maldives', abv: 'MV', data: 141},
                    {label: 'Mali', abv: 'ML', data: 143},
                    {label: 'Malta', abv: 'MT', data: 144},
                    {label: 'Marshall Islands', abv: 'MH', data: 134},
                    {label: 'Martinique', abv: 'MQ', data: 135},
                    {label: 'Mauritania', abv: 'MR', data: 146},
                    {label: 'Mauritius', abv: 'MU', data: 147},
                    {label: 'Mayotte', abv: 'YT', data: 148},
                    {label: 'Mexico', abv: 'MX', data: 139},
                    {label: 'Micronesia, Federated States Of', abv: 'FM', data: 149},
                    {label: 'Moldova, Republic Of', abv: 'MD', data: 150},
                    {label: 'Monaco', abv: 'MC', data: 142},
                    {label: 'Mongolia', abv: 'MN', data: 152},
                    {label: 'Montenegro', abv: 'ME', data: 153},
                    {label: 'Montserrat', abv: 'MS', data: 156},
                    {label: 'Morocco', abv: 'MA', data: 145},
                    {label: 'Mozambique', abv: 'MZ', data: 157},
                    {label: 'Myanmar', abv: 'MM', data: 158},
                    {label: 'Namibia', abv: 'NA', data: 159},
                    {label: 'Nauru', abv: 'NR', data: 160},
                    {label: 'Nepal', abv: 'NP', data: 165},
                    {label: 'Netherlands', abv: 'NL', data: 151},
                    {label: 'New Caledonia', abv: 'NC', data: 167},
                    {label: 'New Zealand', abv: 'NZ', data: 154},
                    {label: 'Nicaragua', abv: 'NI', data: 155},
                    {label: 'Niger', abv: 'NE', data: 171},
                    {label: 'Nigeria', abv: 'NG', data: 176},
                    {label: 'Niue', abv: 'NU', data: 179},
                    {label: 'Norfolk Island', abv: 'NF', data: 180},
                    {label: 'Northern Mariana Islands', abv: 'MP', data: 181},
                    {label: 'Norway', abv: 'NO', data: 161},
                    {label: 'Oman', abv: 'OM', data: 162},
                    {label: 'Pakistan', abv: 'PK', data: 163},
                    {label: 'Palau', abv: 'PW', data: 164},
                    {label: 'Palestinian Territory, Occupied', abv: 'PS', data: 182},
                    {label: 'Panama', abv: 'PA', data: 166},
                    {label: 'Papua New Guinea', abv: 'PG', data: 183},
                    {label: 'Paraguay', abv: 'PY', data: 168},
                    {label: 'Peru', abv: 'PE', data: 169},
                    {label: 'Philippines', abv: 'PH', data: 170},
                    {label: 'Pitcairn', abv: 'PN', data: 184},
                    {label: 'Poland', abv: 'PL', data: 172},
                    {label: 'Portugal', abv: 'PT', data: 173},
                    {label: 'Puerto Rico', abv: 'PR', data: 174},
                    {label: 'Qatar', abv: 'QA', data: 175},
                    {label: 'Romania', abv: 'RO', data: 177},
                    {label: 'Russian Federation', abv: 'RU', data: 178},
                    {label: 'Rwanda', abv: 'RW', data: 186},
                    {label: 'Réunion', abv: 'RE', data: 185},
                    {label: 'Saint Barthélemy', abv: 'BL', data: 187},
                    {label: 'Saint Helena, Ascension And Tristan Da Cunha', abv: 'SH', data: 189},
                    {label: 'Saint Kitts And Nevis', abv: 'KN', data: 190},
                    {label: 'Saint Lucia', abv: 'LC', data: 191},
                    {label: 'Saint Martin (French Part)', abv: 'MF', data: 192},
                    {label: 'Saint Pierre And Miquelon', abv: 'PM', data: 196},
                    {label: 'Saint Vincent And The Grenadines', abv: 'VC', data: 197},
                    {label: 'Samoa', abv: 'WS', data: 199},
                    {label: 'San Marino', abv: 'SM', data: 201},
                    {label: 'Sao Tome And Principe', abv: 'ST', data: 202},
                    {label: 'Saudi Arabia', abv: 'SA', data: 188},
                    {label: 'Senegal', abv: 'SN', data: 203},
                    {label: 'Serbia', abv: 'RS', data: 204},
                    {label: 'Seychelles', abv: 'SC', data: 205},
                    {label: 'Sierra Leone', abv: 'SL', data: 208},
                    {label: 'Singapore', abv: 'SG', data: 193},
                    {label: 'Sint Maarten (Dutch Part)', abv: 'SX', data: 210},
                    {label: 'Slovakia', abv: 'SK', data: 194},
                    {label: 'Slovenia', abv: 'SI', data: 195},
                    {label: 'Solomon Islands', abv: 'SB', data: 211},
                    {label: 'Somalia', abv: 'SO', data: 213},
                    {label: 'South Africa', abv: 'ZA', data: 198},
                    {label: 'South Georgia And The South Sandwich Islands', abv: 'GS', data: 214},
                    {label: 'South Sudan', abv: 'SS', data: 215},
                    {label: 'Spain', abv: 'ES', data: 200},
                    {label: 'Sri Lanka', abv: 'LK', data: 216},
                    {label: 'Sudan', abv: 'SD', data: 220},
                    {label: 'Suriname', abv: 'SR', data: 222},
                    {label: 'Svalbard And Jan Mayen', abv: 'SJ', data: 223},
                    {label: 'Swaziland', abv: 'SZ', data: 228},
                    {label: 'Sweden', abv: 'SE', data: 206},
                    {label: 'Switzerland', abv: 'CH', data: 207},
                    {label: 'Syrian Arab Republic', abv: 'SY', data: 229},
                    {label: 'Taiwan, Province of China', abv: 'TW', data: 209},
                    {label: 'Tajikistan', abv: 'TJ', data: 46},
                    {label: 'Tanzania, United Republic Of', abv: 'TZ', data: 233},
                    {label: 'Thailand', abv: 'TH', data: 212},
                    {label: 'Timor-Leste', abv: 'TL', data: 234},
                    {label: 'Togo', abv: 'TG', data: 235},
                    {label: 'Tokelau', abv: 'TK', data: 236},
                    {label: 'Tonga', abv: 'TO', data: 237},
                    {label: 'Trinidad and Tobago', abv: 'TT', data: 217},
                    {label: 'Tunisia', abv: 'TN', data: 218},
                    {label: 'Turkey', abv: 'TR', data: 219},
                    {label: 'Turkmenistan', abv: 'TM', data: 238},
                    {label: 'Turks and Caicos Islands', abv: 'TC', data: 221},
                    {label: 'Tuvalu', abv: 'TV', data: 239},
                    {label: 'Uganda', abv: 'UG', data: 240},
                    {label: 'Ukraine', abv: 'UA', data: 224},
                    {label: 'United Arab Emirates', abv: 'AE', data: 225},
                    {label: 'United Kingdom', abv: 'GB', data: 226},
                    {label: 'United States', abv: 'US', data: 2, regex: '(^\\d{5}(-\\d{4})?$)$'},
                    {label: 'United States Minor Outlying Islands', abv: 'UM', data: 241},
                    {label: 'Uruguay', abv: 'UY', data: 227},
                    {label: 'Uzbekistan', abv: 'UZ', data: 242},
                    {label: 'Vanuatu', abv: 'VU', data: 243},
                    {label: 'Venezuela, Bolivarian Republic Of', abv: 'VE', data: 230},
                    {label: 'Viet Nam', abv: 'VN', data: 231},
                    {label: 'Virgin Islands, British', abv: 'VG', data: 232},
                    {label: 'Virgin Islands, U.S.', abv: 'VI', data: 244},
                    {label: 'Wallis And Futuna', abv: 'WF', data: 245},
                    {label: 'Western Sahara', abv: 'EH', data: 246},
                    {label: 'Yemen', abv: 'YE', data: 247},
                    {label: 'Zambia', abv: 'ZM', data: 248},
                    {label: 'Zimbabwe', abv: 'ZW', data: 249}
                ];
            },

            getCountriesByAbv () {
                return [
                    {label: 'Afghanistan', data: 'AF'},
                    {label: 'Åland Islands', data: 'AX'},
                    {label: 'Albania', data: 'AL'},
                    {label: 'Algeria', data: 'DZ'},
                    {label: 'American Samoa', data: 'AS'},
                    {label: 'Andorra', data: 'AD'},
                    {label: 'Angola', data: 'AO'},
                    {label: 'Anguilla', data: 'AI'},
                    {label: 'Antarctica', data: 'AQ'},
                    {label: 'Antigua and Barbuda', data: 'AG'},
                    {label: 'Argentina', data: 'AR'},
                    {label: 'Armenia', data: 'AM'},
                    {label: 'Aruba', data: 'AW'},
                    {label: 'Australia', data: 'AU'},
                    {label: 'Austria', data: 'AT'},
                    {label: 'Azerbaijan', data: 'AZ'},
                    {label: 'Bahamas', data: 'BS'},
                    {label: 'Bahrain', data: 'BH'},
                    {label: 'Bangladesh', data: 'BD'},
                    {label: 'Barbados', data: 'BB'},
                    {label: 'Belarus', data: 'BY'},
                    {label: 'Belgium', data: 'BE'},
                    {label: 'Belize', data: 'BZ'},
                    {label: 'Benin', data: 'BJ'},
                    {label: 'Bermuda', data: 'BM'},
                    {label: 'Bhutan', data: 'BT'},
                    {label: 'Bolivia, Plurinational State Of', data: 'BO'},
                    {label: 'Bonaire, Sint Eustatius And Saba', data: 'BQ'},
                    {label: 'Bosnia And Herzegovina', data: 'BA'},
                    {label: 'Botswana', data: 'BW'},
                    {label: 'Bouvet Island', data: 'BV'},
                    {label: 'Brazil', data: 'BR'},
                    {label: 'British Indian Ocean Territory', data: 'IO'},
                    {label: 'Brunei Darussalam', data: 'BN'},
                    {label: 'Bulgaria', data: 'BG'},
                    {label: 'Burkina Faso', data: 'BF'},
                    {label: 'Burundi', data: 'BI'},
                    {label: 'Cambodia', data: 'KH'},
                    {label: 'Cameroon', data: 'CM'},
                    {label: 'Canada', data: 'CA'},
                    {label: 'Cape Verde', data: 'CV'},
                    {label: 'Cayman Islands', data: 'KY'},
                    {label: 'Central African Republic', data: 'CF'},
                    {label: 'Chad', data: 'TD'},
                    {label: 'Chile', data: 'CL'},
                    {label: 'China', data: 'CN'},
                    {label: 'Christmas Island', data: 'CX'},
                    {label: 'Cocos (Keeling) Islands', data: 'CC'},
                    {label: 'Colombia', data: 'CO'},
                    {label: 'Comoros', data: 'KM'},
                    {label: 'Congo', data: 'CG'},
                    {label: 'Congo, The Democratic Republic Of The', data: 'CD'},
                    {label: 'Cook Islands', data: 'CK'},
                    {label: 'Costa Rica', data: 'CR'},
                    {label: 'Croatia', data: 'HR'},
                    {label: 'Cuba', data: 'CU'},
                    {label: 'Curaçao', data: 'CW'},
                    {label: 'Cyprus', data: 'CY'},
                    {label: 'Czech Republic', data: 'CZ'},
                    {label: 'Côte D\'ivoire', data: 'CI'},
                    {label: 'Denmark', data: 'DK'},
                    {label: 'Djibouti', data: 'DJ'},
                    {label: 'Dominica', data: 'DM'},
                    {label: 'Dominican Republic', data: 'DO'},
                    {label: 'Ecuador', data: 'EC'},
                    {label: 'Egypt', data: 'EG'},
                    {label: 'El Salvador', data: 'SV'},
                    {label: 'Equatorial Guinea', data: 'GQ'},
                    {label: 'Eritrea', data: 'ER'},
                    {label: 'Estonia', data: 'EE'},
                    {label: 'Ethiopia', data: 'ET'},
                    {label: 'Falkland Islands (Malvinas)', data: 'FK'},
                    {label: 'Faroe Islands', data: 'FO'},
                    {label: 'Fiji', data: 'FJ'},
                    {label: 'Finland', data: 'FI'},
                    {label: 'France', data: 'FR'},
                    {label: 'French Guiana', data: 'GF'},
                    {label: 'French Polynesia', data: 'PF'},
                    {label: 'French Southern Territories', data: 'TF'},
                    {label: 'Gabon', data: 'GA'},
                    {label: 'Gambia', data: 'GM'},
                    {label: 'Georgia', data: 'GE'},
                    {label: 'Germany', data: 'DE'},
                    {label: 'Ghana', data: 'GH'},
                    {label: 'Gibraltar', data: 'GI'},
                    {label: 'Greece', data: 'GR'},
                    {label: 'Greenland', data: 'GL'},
                    {label: 'Grenada', data: 'GD'},
                    {label: 'Guadeloupe', data: 'GP'},
                    {label: 'Guam', data: 'GU'},
                    {label: 'Guatemala', data: 'GT'},
                    {label: 'Guernsey', data: 'GG'},
                    {label: 'Guinea', data: 'GN'},
                    {label: 'Guinea-Bissau', data: 'GW'},
                    {label: 'Guyana', data: 'GY'},
                    {label: 'Haiti', data: 'HT'},
                    {label: 'Heard Island And Mcdonald Islands', data: 'HM'},
                    {label: 'Holy See (Vatican City State)', data: 'VA'},
                    {label: 'Honduras', data: 'HN'},
                    {label: 'Hong Kong', data: 'HK'},
                    {label: 'Hungary', data: 'HU'},
                    {label: 'Iceland', data: 'IS'},
                    {label: 'India', data: 'IN'},
                    {label: 'Indonesia', data: 'ID'},
                    {label: 'Iran, Islamic Republic of', data: 'IR'},
                    {label: 'Iraq', data: 'IQ'},
                    {label: 'Ireland', data: 'IE'},
                    {label: 'Isle Of Man', data: 'IM'},
                    {label: 'Israel', data: 'IL'},
                    {label: 'Italy', data: 'IT'},
                    {label: 'Jamaica', data: 'JM'},
                    {label: 'Japan', data: 'JP'},
                    {label: 'Jersey', data: 'JE'},
                    {label: 'Jordan', data: 'JO'},
                    {label: 'Kazakhstan', data: 'KZ'},
                    {label: 'Kenya', data: 'KE'},
                    {label: 'Kiribati', data: 'KI'},
                    {label: 'Korea Democratic People\'s Republic of', data: 'KP'},
                    {label: 'Korea, Republic Of', data: 'KR'},
                    {label: 'Kuwait', data: 'KW'},
                    {label: 'Kyrgyzstan', data: 'KG'},
                    {label: 'Lao People\'s Democratic Republic', data: 'LA'},
                    {label: 'Latvia', data: 'LV'},
                    {label: 'Lebanon', data: 'LB'},
                    {label: 'Lesotho', data: 'LS'},
                    {label: 'Liberia', data: 'LR'},
                    {label: 'Libya', data: 'LY'},
                    {label: 'Liechtenstein', data: 'LI'},
                    {label: 'Lithuania', data: 'LT'},
                    {label: 'Luxembourg', data: 'LU'},
                    {label: 'Macao', data: 'MO'},
                    {label: 'Macedonia, The Former Yugoslav Republic Of', data: 'MK'},
                    {label: 'Madagascar', data: 'MG'},
                    {label: 'Malawi', data: 'MW'},
                    {label: 'Malaysia', data: 'MY'},
                    {label: 'Maldives', data: 'MV'},
                    {label: 'Mali', data: 'ML'},
                    {label: 'Malta', data: 'MT'},
                    {label: 'Marshall Islands', data: 'MH'},
                    {label: 'Martinique', data: 'MQ'},
                    {label: 'Mauritania', data: 'MR'},
                    {label: 'Mauritius', data: 'MU'},
                    {label: 'Mayotte', data: 'YT'},
                    {label: 'Mexico', data: 'MX'},
                    {label: 'Micronesia, Federated States Of', data: 'FM'},
                    {label: 'Moldova, Republic Of', data: 'MD'},
                    {label: 'Monaco', data: 'MC'},
                    {label: 'Mongolia', data: 'MN'},
                    {label: 'Montenegro', data: 'ME'},
                    {label: 'Montserrat', data: 'MS'},
                    {label: 'Morocco', data: 'MA'},
                    {label: 'Mozambique', data: 'MZ'},
                    {label: 'Myanmar', data: 'MM'},
                    {label: 'Namibia', data: 'NA'},
                    {label: 'Nauru', data: 'NR'},
                    {label: 'Nepal', data: 'NP'},
                    {label: 'Netherlands', data: 'NL'},
                    {label: 'New Caledonia', data: 'NC'},
                    {label: 'New Zealand', data: 'NZ'},
                    {label: 'Nicaragua', data: 'NI'},
                    {label: 'Niger', data: 'NE'},
                    {label: 'Nigeria', data: 'NG'},
                    {label: 'Niue', data: 'NU'},
                    {label: 'Norfolk Island', data: 'NF'},
                    {label: 'Northern Mariana Islands', data: 'MP'},
                    {label: 'Norway', data: 'NO'},
                    {label: 'Oman', data: 'OM'},
                    {label: 'Pakistan', data: 'PK'},
                    {label: 'Palau', data: 'PW'},
                    {label: 'Palestinian Territory, Occupied', data: 'PS'},
                    {label: 'Panama', data: 'PA'},
                    {label: 'Papua New Guinea', data: 'PG'},
                    {label: 'Paraguay', data: 'PY'},
                    {label: 'Peru', data: 'PE'},
                    {label: 'Philippines', data: 'PH'},
                    {label: 'Pitcairn', data: 'PN'},
                    {label: 'Poland', data: 'PL'},
                    {label: 'Portugal', data: 'PT'},
                    {label: 'Puerto Rico', data: 'PR'},
                    {label: 'Qatar', data: 'QA'},
                    {label: 'Romania', data: 'RO'},
                    {label: 'Russian Federation', data: 'RU'},
                    {label: 'Rwanda', data: 'RW'},
                    {label: 'Réunion', data: 'RE'},
                    {label: 'Saint Barthélemy', data: 'BL'},
                    {label: 'Saint Helena, Ascension And Tristan Da Cunha', data: 'SH'},
                    {label: 'Saint Kitts And Nevis', data: 'KN'},
                    {label: 'Saint Lucia', data: 'LC'},
                    {label: 'Saint Martin (French Part)', data: 'MF'},
                    {label: 'Saint Pierre And Miquelon', data: 'PM'},
                    {label: 'Saint Vincent And The Grenadines', data: 'VC'},
                    {label: 'Samoa', data: 'WS'},
                    {label: 'San Marino', data: 'SM'},
                    {label: 'Sao Tome And Principe', data: 'ST'},
                    {label: 'Saudi Arabia', data: 'SA'},
                    {label: 'Senegal', data: 'SN'},
                    {label: 'Serbia', data: 'RS'},
                    {label: 'Seychelles', data: 'SC'},
                    {label: 'Sierra Leone', data: 'SL'},
                    {label: 'Singapore', data: 'SG'},
                    {label: 'Sint Maarten (Dutch Part)', data: 'SX'},
                    {label: 'Slovakia', data: 'SK'},
                    {label: 'Slovenia', data: 'SI'},
                    {label: 'Solomon Islands', data: 'SB'},
                    {label: 'Somalia', data: 'SO'},
                    {label: 'South Africa', data: 'ZA'},
                    {label: 'South Georgia And The South Sandwich Islands', data: 'GS'},
                    {label: 'South Sudan', data: 'SS'},
                    {label: 'Spain', data: 'ES'},
                    {label: 'Sri Lanka', data: 'LK'},
                    {label: 'Sudan', data: 'SD'},
                    {label: 'Suriname', data: 'SR'},
                    {label: 'Svalbard And Jan Mayen', data: 'SJ'},
                    {label: 'Swaziland', data: 'SZ'},
                    {label: 'Sweden', data: 'SE'},
                    {label: 'Switzerland', data: 'CH'},
                    {label: 'Syrian Arab Republic', data: 'SY'},
                    {label: 'Taiwan, Province of China', data: 'TW'},
                    {label: 'Tajikistan', data: 'TJ'},
                    {label: 'Tanzania, United Republic Of', data: 'TZ'},
                    {label: 'Thailand', data: 'TH'},
                    {label: 'Timor-Leste', data: 'TL'},
                    {label: 'Togo', data: 'TG'},
                    {label: 'Tokelau', data: 'TK'},
                    {label: 'Tonga', data: 'TO'},
                    {label: 'Trinidad and Tobago', data: 'TT'},
                    {label: 'Tunisia', data: 'TN'},
                    {label: 'Turkey', data: 'TR'},
                    {label: 'Turkmenistan', data: 'TM'},
                    {label: 'Turks and Caicos Islands', data: 'TC'},
                    {label: 'Tuvalu', data: 'TV'},
                    {label: 'Uganda', data: 'UG'},
                    {label: 'Ukraine', data: 'UA'},
                    {label: 'United Arab Emirates', data: 'AE'},
                    {label: 'United Kingdom', data: 'GB'},
                    {label: 'United States', data: 'US'},
                    {label: 'United States Minor Outlying Islands', data: 'UM'},
                    {label: 'Uruguay', data: 'UY'},
                    {label: 'Uzbekistan', data: 'UZ'},
                    {label: 'Vanuatu', data: 'VU'},
                    {label: 'Venezuela, Bolivarian Republic Of', data: 'VE'},
                    {label: 'Viet Nam', data: 'VN'},
                    {label: 'Virgin Islands, British', data: 'VG'},
                    {label: 'Virgin Islands, U.S.', data: 'VI'},
                    {label: 'Wallis And Futuna', data: 'WF'},
                    {label: 'Western Sahara', data: 'EH'},
                    {label: 'Yemen', data: 'YE'},
                    {label: 'Zambia', data: 'ZM'},
                    {label: 'Zimbabwe', data: 'ZW'}
                ];
            },

            getAddressCodeType (pCountryId) {
                const country = _.findWhere(this.getCountries(), {data: parseInt(pCountryId)});

                return country && country.addressCode ? country.addressCode : 'zip';
            },

            getCountryAbbrByCountryId (countryId) {
                const country = _.findWhere(this.getCountries(), {data: parseInt(countryId)});

                return country ? country.abv : '';
            },

            getCountryIdByCountryAbbr (countryAbbr) {
                const country = _.findWhere(this.getCountries(), {abv: countryAbbr});

                return country ? country.data : '';
            },

            getCountryZipCodeRegExp (countryId) {
                const country = _.findWhere(this.getCountries(), {data: parseInt(countryId)});

                return country && country.regex ? country.regex : '.*';
            }
        };
    };

    return countriesUtils;
});