// the actual validation is done in an in-house library file we call mycalib. We use the parsley library for form validation

// messages: {
//     notempty: $.t('common:errors.required'),
//     postalcode: $.t('common:errors.zipCode'),
//     email: $.t('common:errors.email'),
//     date: $.t('common:errors.date'),
//     phoneus: $.t('common:errors.phoneus'),
//     phonelib: $.t('common:errors.phonelib'),
//     luhn: $.t('common:errors.creditCardNumber'),
//     beforenow: $.t('common:errors.beforeNow'),
//     afternow: $.t('common:errors.afterNow'),
//     nowandafter: $.t('common:errors.nowandafter'),
//     passwordformat: $.t('common:errors.passwordInvalid'),
//     specialchars: $.t('common:errors.specialchars'),
//     civilid: $.t('common:errors.civilId'),
//     min: $.t('common:errors.min'),
//     max: $.t('common:errors.max'),
//     currencylocale: $.t('common:errors.currencylocale')
// },
// validators: {
//     notempty: function (val, constraints, parsley) {
//         return parsley.$element.children().length > 0;
//     },
//     postalcode: function (val, regex) {
//         const matchArr = val.match(new RegExp(regex));

//         return matchArr !== null && matchArr.length > 0;
//     },