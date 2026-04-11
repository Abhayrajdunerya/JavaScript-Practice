let rep = 5;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}

/**
 * LOGS:
    Lifting weights repetition 5 🏋️‍♀️
    Lifting weights repetition 6 🏋️‍♀️
    Lifting weights repetition 7 🏋️‍♀️
    Lifting weights repetition 8 🏋️‍♀️
    Lifting weights repetition 9 🏋️‍♀️
    Lifting weights repetition 10 🏋️‍♀️
 */

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}

/**
 * LOGS:
    You rolled a 5
    You rolled a 5
    You rolled a 4
    You rolled a 4
    You rolled a 3
    You rolled a 2
    You rolled a 2
 */