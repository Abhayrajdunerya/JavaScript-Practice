const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends); // [ 'Michael', 'Steven', 'Peter' ]

const friends_ = new Array('Michael', 'Steven', 'Peter');    // [ 'Michael', 'Steven', 'Peter' ]

console.log(friends[0]);        // Michael
console.log(friends[1]);        // Steven
console.log(friends[2]);        // Peter

console.log(friends.length);    // 3
console.log(friends[friends.length - 1]);   // Peter

friends[2] = 'Jay';
console.log(friends);       // [ 'Michael', 'Steven', 'Jay' ]

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

/**
 * LOGS:
    [
        'Jonas',
        'Schmedtmann',
        46,
        'teacher',
        [ 'Michael', 'Steven', 'Jay' ]
    ]
 */


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years));    // NaN





