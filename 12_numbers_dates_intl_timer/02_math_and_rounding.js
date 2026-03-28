console.log(Math.sqrt(25));         // 5
console.log(25 ** (1 / 2));         // 5
console.log(8 ** (1 / 3));          // 2

console.log(Math.max(5, 18, 23, 11, 2));        // 23
console.log(Math.max(5, 18, '23', 11, 2));      // 23
console.log(Math.max(5, 18, '23px', 11, 2));    // NaN

console.log(Math.min(5, 18, 23, 11, 2));        // 2

console.log(Math.PI);                                   // 3.141592653589793
console.log(Math.PI * Number.parseFloat('10px') ** 2);  // 314.1592653589793

console.log(Math.trunc(Math.random() * 6) + 1);         // Random number from 1 - 6

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomInt(10, 20));                         // Random number from 10 - 20

// Rounding Integers
console.log(Math.round(23.3));      // 23
console.log(Math.round(23.9));      // 24

console.log(Math.ceil(23.3));       // 24
console.log(Math.ceil(23.9));       // 24

console.log(Math.floor(23.3));      // 23
console.log(Math.floor(23.9));      // 23

console.log(Math.trunc(23.3));      // 23
console.log(Math.trunc(23.9));      // 23

console.log(Math.trunc(-23.3));     // -23
console.log(Math.floor(-23.3));     // -24

// Rounding decimals
console.log((2.7).toFixed(0));      // 3        (string)
console.log((2.7).toFixed(3));      // 2.700    (string)
console.log((2.345).toFixed(2));    // 2.35     (string)
console.log(+(2.345).toFixed(2));   // 2.35     (number)


