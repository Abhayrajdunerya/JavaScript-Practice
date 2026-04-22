const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// HIGHER ORDER FUNCTION
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    
    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
/**
 * LOGS:
    Original string: JavaScript is the best!
    Transformed string: JAVASCRIPT is the best!
    Transformed by: upperFirstWord
 */

transformer('JavaScript is the best!', oneWord);

/**
 * LOGS:
    Original string: JavaScript is the best!
    Transformed string: javascriptisthebest!
    Transformed by: oneWord
 */

