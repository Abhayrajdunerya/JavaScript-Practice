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
    },

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

// Use ANY data type, return ANY data type
console.log(2 || 'Jonas');      // 2
console.log('' || 'Jonas');     // Jonas
console.log(true || 0);         // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null);     // Hello

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);           // 10

const guests2 = restaurant.numGuests || 10;
console.log(guests2);           // 10

// -------------- AND ------------------------

console.log(0 && 'Jonas');      // 0
console.log(7 && 'Jonas');      // Jonas

console.log('Hello' && 23 && null && 'Jonas');  // null

if (restaurant.orderPizza) {
    restaurant.orderPizza('mushroom', 'spinach');
    // mushroom
    // [ 'spinach' ]
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
// mushroom
// [ 'spinach' ]





