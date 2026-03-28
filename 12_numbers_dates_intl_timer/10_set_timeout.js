// Will not block execution
setTimeout(() => {
    console.log('Here is your pizza 🍕');
}, 3000);

console.log('Waiting...');

/**
 * LOGS:
 *  Waiting...                          (instant)
 *  Here is your pizza 🍕               (after 3 sec)
 */



// Passing parameters to callback function
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
    (ing1, ing2) => {
        console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`);
    }, 
    4000,
    ...ingredients,
    // 'olives',
    // 'spinach',
);
console.log('Waiting...');

/**
 * LOGS:
 *  Waiting...                                                  (instant)
 *  Waiting...                                                  (instant)
 *  Here is your pizza 🍕                                       (after 3 sec)
 *  Here is your pizza with olives and spinach 🍕               (after 4 sec)
 */

// will not print: Here is your pizza with olives and spinach 🍕
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer)