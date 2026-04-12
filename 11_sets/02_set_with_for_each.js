const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach((value, key, set) => {
    console.log(`${key}: ${value}`);
})
