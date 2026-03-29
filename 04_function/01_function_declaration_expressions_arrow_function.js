/**
 * Function declaration:
 *  - Functions that can be used before it's declared
 * 
 * Function expression:
 *  - Essentially a function value stored in a variable
 *  - Can't be used before it's declared (initialization)
 * 
 * Arrow function:
 *  - Great for a quick one line functions.
 *  - Has no this keyword.
 */

console.log(calcAge1(2002));            // 35
// console.log(calcAge2(2002));         // Cannot access 'calcAge2' before initialization

// Function declaration 
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);


// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991)

console.log(age1, age2, age3);            // 46, 46, 46


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));   // Jonas retires in 19 years
console.log(yearsUntilRetirement(1980, 'Bob'));     // Bob retires in 8 years

