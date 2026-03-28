const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// FLAT
console.log(arr.flat());    // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr);           // [[1, 2, 3], [4, 5, 6], 7, 8]

const arrDeep = [[[1, 2], 3], [4, 5, 6], 7, 8];
console.log(arrDeep.flat());        // [ [ 1, 2 ], 3, 4, 5, 6, 7, 8 ]
console.log(arrDeep.flat(1));       // [ [ 1, 2 ], 3, 4, 5, 6, 7, 8 ]
console.log(arrDeep.flat(2));       // [1, 2, 3, 4, 5, 6, 7, 8]

const accounts = [
    {
        name: 'Abhay',
        movements: [900, 450, -400, -650, 70],
    },
    {
        name: 'Aditya',
        movements: [5000, 3400, -150, -790, 70],
    },
    {
        name: 'Ankit',
        movements: [200, -200, 340, -20, 50],
    },
]

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
/**
 * LOGS:
*   [
        [ 900, 450, -400, -650, 70 ],
        [ 5000, 3400, -150, -790, 70 ],
        [ 200, -200, 340, -20, 50 ]
    ]
 */

const overallBalance = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance);                // 8270


// FLATMAP
const overallBalance2 = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance2);               // 8270




