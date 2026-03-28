// filter: returns newly created (filtered) array, not modify original array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposited = movements.filter((mov, i, arr) => {
    return mov > 0;
})

console.log(deposited);     // [ 200, 450, 3000, 70, 1300 ]
console.log(movements);     // [200, 450, -400, 3000, -650, -130, 70, 1300];


// another way - without filter
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);

console.log(depositsFor);   // [ 200, 450, 3000, 70, 1300 ]
