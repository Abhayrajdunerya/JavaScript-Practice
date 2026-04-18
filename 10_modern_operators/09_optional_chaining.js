const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Brochette', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
    }
};

// TypeError: Cannot read properties of undefined (reading 'open')
// console.log((restaurant.openingHours.mon.open));

if (restaurant.openingHours && restaurant.openingHours.mon) {
    console.log((restaurant.openingHours.mon.open));
}

// WITH optional chaining
console.log((restaurant.openingHours.mon?.open));       // undefined
console.log((restaurant.openingHours?.mon?.open));      // undefined

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
}

/**
 * LOGS:
    On mon, we open at closed
    On tue, we open at closed
    On wed, we open at closed
    On thu, we open at 12
    On fri, we open at 11
    On sat, we open at 0
    On sun, we open at closed
 */

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');           // [ 'Focaccia', 'Pasta' ]
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');    // Method does not exist

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User not found');    // Jonas
console.log(users[1]?.name ?? 'User not found');    // User not found


