const firstName = 'Jonas';
const year = 2037;
const birthYear = 1991;
const job = 'programmer'

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

console.log(jonas);     // I'm Jonas, a 46 year old programmer!

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`

console.log(jonasNew);  // I'm Jonas, a 46 year old programmer!

console.log(`Just a regular string...`);

console.log('\n');

console.log('String with \n\
multiple \n\
lines');

console.log('\n');

console.log(`String with
multiple
lines`);



