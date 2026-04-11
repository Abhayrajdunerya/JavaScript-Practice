const rest1 = {
    name: 'Capri',
    numGuests: 20,
}
const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1); // { name: 'Capri', numGuests: 20 }
console.log(rest2); // { name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10 }

// AND assignment operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1); // { name: 'Capri', numGuests: 20 }
console.log(rest2); // { name: 'La Piazza', owner: '<ANONYMOUS>', numGuests: 10 }


