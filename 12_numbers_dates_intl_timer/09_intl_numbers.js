const num = 3884764.23;

console.log('US:        ', new Intl.NumberFormat('en-US').format(num));     // US:         3,884,764.23
console.log('Germany:   ', new Intl.NumberFormat('de-DE').format(num));     // Germany:    3.884.764,23
console.log('Syria:     ', new Intl.NumberFormat('ar-SY').format(num));     // Syria:      ٣٬٨٨٤٬٧٦٤٫٢٣

console.log(navigator.language, new Intl.NumberFormat(navigator.language).format(num));  // en-US 3,884,764.23

const options = {
    style: 'unit',
    unit: 'mile-per-hour',
}

console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));  // US:      3,884,764.23 mph
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));  // Germany: 3.884.764,23 mi/h   
console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num));  // Syria:   ٣٬٨٨٤٬٧٦٤٫٢٣ ميل/س

const options2 = {
    style: 'currency',
    currency: 'EUR'
    // unit: 'mile-per-hour',
}

console.log('US:      ', new Intl.NumberFormat('en-US', options2).format(num));  // US:      €3,884,764.23
console.log('Germany: ', new Intl.NumberFormat('de-DE', options2).format(num));  // Germany: 3.884.764,23 €   
console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options2).format(num));  // Syria:   ٣٬٨٨٤٬٧٦٤٫٢٣ €


