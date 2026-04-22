/**
 * FIRST CLASS FUNCTIONS
 *  - JavaScript treats function as first-class citizens
 *  - This means that functions are simply values
 *  - Functions are just another "type" of object
 */

/**
 * HIGHER ORDER FUNCTIONS
 *  - A function receives another function as an
 *    argument, that returns a new function, or both
 *  - This is only possible because of first-class functions
 */

// ------------------------------------------------------------------------------------

/**
    // 1. Store function in variables or properties
    const add = (a, b) => a + b;
    const counter = {
        value: 23,
        inc: function() { this.value++; }
    }

    // 2. Pass functions as arguments to OTHER functions
    const greet = () => console.log('Hey Jonas');
    btnClose.addEventListener('click', greet);

    // 3. Return functions from functions
    // 4. Call methods on function:
    counter.inc.bind(someOtherObject);
 */

// -------------------------------------------------------------------------------------

/**]
    // Function that reveives another function
    const greet = () => console.log('Hey Jonas');
    btnClose.addEventListener('click', greet);

    // HIGHER ORDER FUNCTION - addEventListener
    // CALLBACK FUNCTION - greet

    // function that returns new function
    function count() {          // HIGHER ORDER FUNCTION
        let counter = 0;
        return function() {     // RETURNED FUNCTION
            counter++;
        }
    }
 */


