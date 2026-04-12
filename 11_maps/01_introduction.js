const rest = new Map();
rest.set('name', 'Classico Italiano')
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

/**
 * LOGS:
    Map(3) {
        'name'  => 'Classico Italiano',
        1       => 'Firenze, Italy',
        2       => 'Lisbon, Portugal'
    }
 */

rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(')

console.log(rest.get('name'));  // Classico Italiano
console.log(rest.get(true));    // We are open :D
console.log(rest.get(1));       // Firenze, Italy

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // We are closed :(

console.log(rest.has('categories'));    // true
rest.delete(2);
console.log(rest);

/**
 * LOGS:
    Map(7) {
        'name'  => 'Classico Italiano',
        1       => 'Firenze, Italy',
        'categories' => [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
        'open'  => 11,
        'close' => 23,
        true    => 'We are open :D',
        false   => 'We are closed :('
    }
 */

// rest.clear();
// console.log(rest);      // Map(0) {}

rest.set([1, 2], 'Test');
console.log(rest);

/**
 * LOGS:
    Map(8) {
        'name' => 'Classico Italiano',
        1 => 'Firenze, Italy',
        'categories' => [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
        'open' => 11,
        'close' => 23,
        true => 'We are open :D',
        false => 'We are closed :(',
        [ 1, 2 ] => 'Test'
    }
 */

console.log(rest.size);         // 8

console.log(rest.get([1, 2]));  // undefined

const arr = [2, 3];
rest.set(arr, 'Test 2');
console.log(rest.get(arr));     // Test 2






