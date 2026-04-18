// {} - Empty object - in node.js
console.log(this);      // Window object - in browser

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);      // 46
    console.log(this);                  // undefined -> browser

    // node.js
    /**
            <ref *1> Object [global] {
                global: [Circular *1],
                clearImmediate: [Function: clearImmediate],
                setImmediate: [Function: setImmediate] {
                    [Symbol(nodejs.util.promisify.custom)]: [Getter]
                },
                clearInterval: [Function: clearInterval],
                clearTimeout: [Function: clearTimeout],
                setInterval: [Function: setInterval],
                setTimeout: [Function: setTimeout] {
                    [Symbol(nodejs.util.promisify.custom)]: [Getter]
                },
                queueMicrotask: [Function: queueMicrotask],
                structuredClone: [Function: structuredClone],
                atob: [Function: atob],
                btoa: [Function: btoa],
                performance: [Getter/Setter],
                fetch: [Function: fetch],
                navigator: [Getter],
                crypto: [Getter]
            }
     */
}

calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);      // 57
    console.log(this);                  // Window object - browser
    // Empty object - {} - in node.js
}

calcAgeArrow(1980)

const jonas = {
    year: 1991,
    calcAge: function() {
        // Jonas Object - calling object
        console.log(this);  // { year: 1991, calcAge: [Function: calcAge] }
        console.log(2037 - this.year);  // 46
    }
}

jonas.calcAge();

const matilda = {
    year: 2017,
}

matilda.calcAge = jonas.calcAge;
// { year: 2017, calcAge: [Function: calcAge] }
matilda.calcAge();  // 20

const f = jonas.calcAge;
f();
/**
 * LOGS: (Browser)
 *  undefined
 *  TypeError: Cannot read property 'year' of undefined
 */

/**
 * LOGS: (Node.js)
 * global function 
 * NaN
 */

