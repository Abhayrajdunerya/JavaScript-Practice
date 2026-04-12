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

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Brochette', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours,

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

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);    // [ 'thu', 'fri', 'sat' ]

for (const day of Object.keys(openingHours)) {
    console.log(day);
}

/**
 * LOGS:
        thu
        fri
        sat
 */


// Property VALUES
const values = Object.values(openingHours);
console.log(values);

/**
 * LOGS:
    [
        { open: 12, close: 22 },
        { open: 11, close: 23 },
        { open: 0, close: 24 }
    ]
 */

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

/**
 * LOGS:
    [
        [ 'thu', { open: 12, close: 22 } ],
        [ 'fri', { open: 11, close: 23 } ],
        [ 'sat', { open: 0, close: 24 } ]
    ]
 */

for (const [key, { open, close }] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/**
 * LOGS:
    On thu we open at 12 and close at 22
    On fri we open at 11 and close at 23
    On sat we open at 0 and close at 24
 */

