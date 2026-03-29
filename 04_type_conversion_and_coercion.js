/**
 * TYPE CONVERSION: When you explicitly convert type.
 * TYPE COERCION: When javascript convert type automatically.
 *  +           : concat - number -> string
 *  -, *, /     : string -> number
 */


// TYPE CONVERSION
const inputYear = '1991';
console.log(Number(inputYear), inputYear);  // 1991 (number) 1991 (string)
console.log(Number(inputYear) + 18);        // 2009

console.log(Number('Jonas'));               // NaN
console.log(typeof NaN);                    // number


console.log(String(23), 23);                // 23 (string) 23 (number)


// TYPE COERCION
console.log('I am ' + 23 + ' years old');       // I am 23 years old
console.log('I am ' + '23' + ' years old');     // I am 23 years old

console.log('23' - '10' - 3);                   // 10 (number)
console.log('23' + '10' + 3);                   // 23103 (string)
console.log('23' * '2');                        // 46 (number)
console.log('23' / '2');                        // 11.5 (number)
console.log('23' - '2');                        // 21 (number)
console.log('23' + '2');                        // 232 (string)

let n = '1' + 1;    // 11 (string)
n = n - 1;          // 10 (number)
console.log(n);     // 10

console.log(2 + 3 + 4 + '5');                   // 95 (string)
console.log('10' - '4' - '3' - 2 + '5');        // 15 (string)












