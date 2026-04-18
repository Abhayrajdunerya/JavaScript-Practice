const ordersSet = new Set([
    'Pizza',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
])
console.log(ordersSet);         // Set(3) { 'Pizza', 'Risotto', 'Pasta' }

console.log(new Set('Jonas'));  // Set(5) { 'J', 'o', 'n', 'a', 's' }

console.log(ordersSet.size);            // 3
console.log(ordersSet.has('Pizza'));    // true
console.log(ordersSet.has('Bread'));    // false

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);         // Set(4) { 'Pizza', 'Risotto', 'Pasta', 'Garlic Bread' }

ordersSet.delete('Risotto');
console.log(ordersSet);         // Set(3) { 'Pizza', 'Pasta', 'Garlic Bread' }

// ordersSet.clear();
// console.log(ordersSet);         // Set(0) {}

for (const order of ordersSet) {
    console.log(order);
}

/**
 * LOGS:
    Pizza
    Pasta
    Garlic Bread
 */

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);       // [ 'Waiter', 'Chef', 'Manager' ]

console.log(
    new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size     // 3
);

console.log(new Set('jonasschmedtmann').size);  // 11












