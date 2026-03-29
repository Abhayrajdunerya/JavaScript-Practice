/**
 * let: 
 *  1. If not initialized then value will be undefined
 *  2. Mutable - values can be re-assigned.
 *  3. Scope - function scope
 * 
 * const:
 *  1. You have to assign a value in initialization.
 *  2. Non mutable - values can't be re-assigned.
 *  3. Scope - function scope
 * 
 * var:
 *  1. If not initialized then value will be undefined
 *  2. Mutable - values can be re-assigned.
 *  3. Scope - block scope
 */

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;           // TypeError: Assignment to constant variable.
// const job;                  // SyntaxError: Missing initializer in const declaration

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';

console.log(age);           // 31
console.log(birthYear);     // 1991
console.log(lastName);      // Schmedtmann




