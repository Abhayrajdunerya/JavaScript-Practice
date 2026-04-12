console.log('a+very+nice+string'.split('+'));   // [ 'a', 'very', 'nice', 'string' ]
console.log('Jonas Schmedtmann'.split(' '));    // [ 'Jonas', 'Schmedtmann' ]

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);   // Mr. Jonas SCHMEDTMANN

const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];

    for (const n of names) {
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(namesUpper.join(' '));
}

capitalizeName('jessica and smith davis');  // Jessica And Smith Davis
capitalizeName('jonas schmedtmann');        // Jonas Schmedtmann

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+')); // +++++++++++Go to gate 23!+++++
console.log('Jonas'.padStart(25, '+').padEnd(30, '+')); // ++++++++++++++++++++Jonas+++++

const maskCreditCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(64637836));                  // ****7836
console.log(maskCreditCard(43378463864647384));         // *************7384
console.log(maskCreditCard('33325373038273533788303')); // *******************8303

// Repeat
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));
// Bad weather... All Departures Delayed...Bad weather... All Departures Delayed...Bad weather... All Departures Delayed...Bad weather... All Departures Delayed...Bad weather... All Departures Delayed...

const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${'✈️ '.repeat(n)}`);
}

planesInLine(5)     // There are 5 planes in line ✈️ ✈️ ✈️ ✈️ ✈️
planesInLine(3)     // There are 3 planes in line ✈️ ✈️ ✈️
planesInLine(12)    // There are 12 planes in line ✈️ ✈️ ✈️ ✈️ ✈️ ✈️ ✈️ ✈️ ✈️ ✈️ ✈️ ✈️








