const italianFoods = new Set([
    'pasta',
    'gnocchi',
    'tomatoes',
    'olive oil',
    'garlic',
    'basil',
]);

const mexicanFoods = new Set([
    'tortillas',
    'beans',
    'rice',
    'tomatoes',
    'avocado',
    'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods);      // Intersection: Set(2) { 'tomatoes', 'garlic' }

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union:', italianMexicanFusion);

/**
 * LOGS:
    Union: Set(10) {
        'pasta',
        'gnocchi',
        'tomatoes',
        'olive oil',
        'garlic',
        'basil',
        'tortillas',
        'beans',
        'rice',
        'avocado'
    }
 */

console.log([...new Set([...italianFoods, ...mexicanFoods])]);

/**
 * LOGS:
    [
        'pasta',     'gnocchi',
        'tomatoes',  'olive oil',
        'garlic',    'basil',
        'tortillas', 'beans',
        'rice',      'avocado'
    ]
 */

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference Italian', uniqueItalianFoods);  // Difference Italian Set(4) { 'pasta', 'gnocchi', 'olive oil', 'basil' }

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference Mexican', uniqueMexicanFoods);  // Difference Mexican Set(4) { 'tortillas', 'beans', 'rice', 'avocado' }

const uniqueItalianAndMexicanFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods);

/**
 * LOGS:
    Set(8) {
        'pasta',
        'gnocchi',
        'olive oil',
        'basil',
        'tortillas',
        'beans',
        'rice',
        'avocado'
    }
 */

console.log(italianFoods.isDisjointFrom(mexicanFoods));     // false






