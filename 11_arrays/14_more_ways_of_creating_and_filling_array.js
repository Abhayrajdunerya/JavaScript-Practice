const arr = [1, 2, 3, 4, 5, 6, 7];             // [1, 2, 3, 4, 5, 6, 7]
console.log(new Array(1, 2, 3, 4, 5, 6, 7));    // [1, 2, 3, 4, 5, 6, 7]

// If only one param is provides then it will be considered as size of array
const x = new Array(7)
console.log(x);                 // [ <7 empty items> ]

// map will not properly work: doesn't return new array.
console.log(x.map(() => 5));    // [ <7 empty items> ]

// x.fill(1);
// console.log(x);     // [1, 1, 1, 1, 1, 1, 1]

// x.fill(1, 3);
// console.log(x);         // [ <3 empty items>, 1, 1, 1, 1 ]

x.fill(1, 3, 5);
console.log(x);            // [ <3 empty items>, 1, 1, <2 empty items> ]


arr.fill(23, 2, 6);
console.log(arr);       // [1, 2, 23, 23, 23, 23, 7]


// Array.from()
const y = Array.from({ length: 7 }, () => 1);
console.log(y);         // [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({ length: 7 }, (_, i) => i+1);
console.log(z);         // [1, 2, 3, 4, 5, 6, 7]










