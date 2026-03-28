console.log(23 === 23.0);                   // true

console.log(0.1 + 0.2);                     // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);             // false

// Conversion
console.log(Number('23'));                  // 23 (number)
console.log(+'23');                         // 23 (number)

// Parsing
console.log(Number.parseInt('30px'));       // 30
console.log(Number.parseInt('30px', 10));   // 30
console.log(Number.parseInt('e23'));        // NaN: first character must be a digit

console.log(Number.parseInt('   2.5rem   '));       // 2
console.log(Number.parseFloat('   2.5rem   '));     // 2.5

console.log(Number.isNaN(20));              // false
console.log(Number.isNaN('20'));            // false
console.log(Number.isNaN(+'20X'));          // true
console.log(Number.isNaN(20/0));            // false
console.log(20/0);                          // Infinity

// Checking if value is number
console.log(Number.isFinite(20));           // true
console.log(Number.isFinite('20'));         // false
console.log(Number.isFinite(+'20X'));       // false
console.log(Number.isFinite(23/0));         // false

console.log(Number.isInteger(23));          // true
console.log(Number.isInteger(23.0));        // true
console.log(Number.isInteger('23'));        // false
console.log(Number.isInteger(23 / 0));      // false












