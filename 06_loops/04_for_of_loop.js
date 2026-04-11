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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
    console.log(item);
}

/**
 * LOGS:
        Focaccia
        Brochette
        Garlic Bread
        Caprese Salad
        Pizza
        Pasta
        Risotto
 */

for (const item of menu.entries()) {
    console.log(item);
}

/**
 * LOGS:
        [ 0, 'Focaccia' ]
        [ 1, 'Brochette' ]
        [ 2, 'Garlic Bread' ]
        [ 3, 'Caprese Salad' ]
        [ 4, 'Pizza' ]
        [ 5, 'Pasta' ]
        [ 6, 'Risotto' ]
 */

console.log([...menu.entries()]);

/**
 * LOGS:
        [
            [ 0, 'Focaccia' ],
            [ 1, 'Brochette' ],
            [ 2, 'Garlic Bread' ],
            [ 3, 'Caprese Salad' ],
            [ 4, 'Pizza' ],
            [ 5, 'Pasta' ],
            [ 6, 'Risotto' ]
        ]
 */



