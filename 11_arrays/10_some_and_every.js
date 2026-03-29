const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// EQUALITY
console.log(movements.includes(-130));  

// SOME: CONDITION - returns true if any one comparison is true
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);                               // true

// EVERY: CONDITION - returns true if every comparison is true
console.log(movements.every(mov => mov > 0));           // false



// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));       // true
console.log(movements.every(deposit));      // false
console.log(movements.filter(deposit));     // [ 200, 450, 3000, 70, 1300 ]


