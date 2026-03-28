const currencies = new Map([
    ['USD', 'United States Dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound Starling'],
])

currencies.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
})