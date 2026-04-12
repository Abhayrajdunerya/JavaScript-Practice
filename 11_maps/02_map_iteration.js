const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0,    // Open 24 hours
        close: 24,
    }
};

const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again'],
])

// Convert object to map
console.log(Object.entries(openingHours));

/**
 * LOGS:
    [
        [ 'thu', { open: 12, close: 22 } ],
        [ 'fri', { open: 11, close: 23 } ],
        [ 'sat', { open: 0, close: 24 } ]
    ]
 */

const hoursMap = new Map(Object.entries(openingHours))
console.log(hoursMap);

/**
 * LOGS:
    Map(3) {
        'thu' => { open: 12, close: 22 },
        'fri' => { open: 11, close: 23 },
        'sat' => { open: 0, close: 24 }
    }
 */

// Quiz app
console.log(question.get('question'));  // What is the best programming language in the world?
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = prompt('Your answer');
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
/**
 * LOGS:
    [
        [ 'question', 'What is the best programming language in the world?' ],
        [ 1, 'C' ],
        [ 2, 'Java' ],
        [ 3, 'JavaScript' ],
        [ 'correct', 3 ],
        [ true, 'Correct 🎉' ],
        [ false, 'Try again' ]
    ]
 */

// console.log(question.entries());

console.log([...question.keys()]);      // [ 'question', 1, 2, 3, 'correct', true, false ]
console.log([...question.values()]);

/**
 * LOGS:
    [
        'What is the best programming language in the world?',
        'C',
        'Java',
        'JavaScript',
        3,
        'Correct 🎉',
        'Try again'
    ]
 */





