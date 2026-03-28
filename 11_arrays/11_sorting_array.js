/**
 * Modifies (sort) the original array & also return sorted array
 * sort() method does sorting based on strings
 */

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());     // [ 'Adam', 'Jonas', 'Martha', 'Zach' ]
console.log(owners);            // [ 'Adam', 'Jonas', 'Martha', 'Zach' ]

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort());  // [-130, -400, -650, 1300, 200, 3000, 450, 70]

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)
console.log(movements.sort((a, b) => a - b));   // [-650, -400, -130, 70, 200, 450, 1300, 3000]
console.log(movements.sort((a, b) => b - a));   // [3000, 1300, 450, 200, 70, -130, -400, -650]






