const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Brochette', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Risotto', 'Pasta'],

    openingHours: {
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
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);                  // 1 2 [ 3, 4, 5 ]

// Rest element must be last element
const [pizza, risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);     // Pizza Risotto [ 'Pasta', 'Focaccia', 'Brochette', 'Garlic Bread', 'Caprese Salad' ]


// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);                      // { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

// Functions
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}   

add(2, 3);                  // 5
add(5, 3, 7, 2);            // 17
add(8, 2, 5, 3, 2, 1, 4);   // 25

const x = [23, 5, 7];
add(...x);                  // 35


restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
/**
 * LOGS:
    mushrooms
    [ 'onion', 'olives', 'spinach' ]
 */

restaurant.orderPizza('mushrooms');
/**
 * LOGS:
    mushrooms
    []
 */

