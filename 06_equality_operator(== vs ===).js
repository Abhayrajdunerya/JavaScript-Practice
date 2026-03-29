/**
 * ==   : loose equality check  : only check values
 * ===  : strict equality check : check values & data type of values
 */

console.log(18 == 18);      // true
console.log(18 == 19);      // false

console.log(18 == '18');    // true
console.log(18 === '18');   // false

const day = 'monday'

switch (day) {      // day === 'monday'
    case 'monday':
        console.log('Its monday');
        break;

    default:
        break;
}