// map: returns newly created array, not modify original array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map((mov, i, arr) => {
    return (mov * eurToUsd).toFixed(2);
})

console.log(movementsUSD);

/**
 * LOGS:
 * [
    '220.00',  '495.00',
    '-440.00', '3300.00',
    '-715.00', '-143.00',
    '77.00',   '1430.00'
    ]
 * 
 */

console.log(movements);
    