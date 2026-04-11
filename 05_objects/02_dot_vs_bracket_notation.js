const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

console.log(jonas);

console.log(jonas.lastName);                // Schmedtmann
console.log(jonas['lastName']);             // Schmedtmann

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);      // Jonas
console.log(jonas['last' + nameKey]);       // Schmedtmann

// console.log(jonas.'last' + nameKey);     // not allowed


jonas.location = 'Portugal';
jonas['twitter'] = '@jonaschmedtmann'

console.log(jonas);

/**
 * LOGS:
    {
        firstName: 'Jonas',
        lastName: 'Schmedtmann',
        age: 46,
        job: 'teacher',
        friends: [ 'Michael', 'Peter', 'Steven' ],
        location: 'Portugal',
        twitter: '@jonaschmedtmann'
    }
 */



