// reduce: returns reduced (single) value, not modify original array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// acc - accumulator -> SNOWBALL
const balance = movements.reduce((acc, curr, i, arr) => {
    console.log(`Iterations ${i}: ${acc}`);
    return acc + curr;
}, 0); // initially acc = 0;

console.log(balance);           // 3840

/**
 * LOGS:
 *  Iterations 0: 0
    Iterations 1: 200
    Iterations 2: 650
    Iterations 3: 250
    Iterations 4: 3250
    Iterations 5: 2600
    Iterations 6: 2470
    Iterations 7: 2540
    3840
 */
