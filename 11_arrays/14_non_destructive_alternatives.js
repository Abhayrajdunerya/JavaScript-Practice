/**
 * Non-Destructive Alternatives: toReversed, toSorted, toSpliced, with
 * Will not modify original array,, returns new arrays
 */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// toReversed()
const reversesMov = movements.slice().reverse();
console.log(reversesMov);               // [1300, 70, -130, -650, 3000, -400, 450, 200]
console.log(movements.toReversed());    // [1300, 70, -130, -650, 3000, -400, 450, 200]


// with()
// movements[i] = 2000
const newMovements = movements.with(1, 2000);
console.log(newMovements);              // [200, 2000, -400, 3000, -650, -130, 70, 1300]
console.log(movements);                 // [200, 450, -400, 3000, -650, -130, 70, 1300]


// toSorted()
console.log(movements.toSorted());      // [-130, -400, -650, 1300, 200, 3000, 450, 70]

// toSpliced()
console.log(movements.toSpliced(2, 3)); // [ 200, 450, -130, 70, 1300 ]


