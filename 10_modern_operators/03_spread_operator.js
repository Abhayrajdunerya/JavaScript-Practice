const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Brochette', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    }
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);             // [ 1, 2, 7, 8, 9 ]

const newArr = [1, 2, ...arr];
console.log(newArr);                // [ 1, 2, 7, 8, 9 ]

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);          // [ 'Pizza', 'Pasta', 'Risotto' ]


// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);                  
/**
 * LOGS:
    [
        'Focaccia',
        'Brochette',
        'Garlic Bread',
        'Caprese Salad',
        'Pizza',
        'Pasta',
        'Risotto'
    ]
 */

// Iterables: array, strings, maps, sets, NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.']
console.log(letters);               // [ 'J',  'o', 'n', 'a',  's', ' ', 'S.']

console.log(...str);                // J o n a s

// console.log(`${...str} Schmedtmann`);        // ERROR

const sum = function (a, b, c) {
    return a + b + c;
}

const numToAdd = [10, 20, 30, 40];  // 10 + 20 + 30
console.log(sum(...numToAdd));      // 60

// Objects
const newRestaurant = {
    foundIn: 1998,
    ...restaurant,
    founder: 'Guiseppe'
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);           // Ristorante Roma
console.log(restaurant.name);               // Classico Italiano











