console.log(2 ** 53 - 1);               // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER);   // 9007199254740991
console.log(2 ** 53 + 1);               // 9007199254740992
console.log(2 ** 53 + 2);               // 9007199254740994
console.log(2 ** 53 + 3);               // 9007199254740996
console.log(2 ** 53 + 4);               // 9007199254740996

console.log(43264854057363948443648493349572244);       // 4.3264854057363945e+34
console.log(43264854057363948443648493349572244n);      // 43264854057363948443648493349572244n (bigint)
console.log(BigInt(4326485405));                        // 4326485405n

// Operations
console.log(10000n + 10000n);                           // 20000n
console.log(43264854057363948443648493349572244n + 10000000000000n);    // 43264854057363948443658493349572244n

const huge = 236438309329373643827397n;
const num = 23;
// console.log(huge * num);             // TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(huge * BigInt(num));        // 5438081114575593808030131n    

// Exceptions
console.log(20n > 15);                  // true
console.log(20n === 20);                // false
console.log(20n == 20);                 // true
console.log(typeof 20n);                // bigint

console.log(huge + ' is really big!!'); // 236438309329373643827397 is really big!!


// Division
console.log(10n / 3n);      // 3n
console.log(10 / 3);        // 3.3333333333333335











