const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Brochette', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const arr = [2, 3, 4];
const a = arr[0];           // 2
const b = arr[1];           // 3
const c = arr[2];           // 4

const [x, y, z] = arr;
console.log(x, y, z);       // 2, 3, 4

let [main, secondary] = restaurant.categories;
console.log(main, secondary);           // Italian Pizzeria

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);        // Pizzeria Italian

[main, secondary] = [secondary, main];
console.log(main, secondary);           // Pizzeria Italian

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);       // Garlic Bread Pizza

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);                   // 2, 5, 6

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);                   // 8 9 1








