console.log(me);    // undefined
// console.log(job);   // ReferenceError: Cannot access 'job' before initialization
// console.log(year);  // ReferenceError: Cannot access 'year' before initialization

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Function
console.log(addDec(2, 3));          // 5
// console.log(addExpr(2, 3));      // ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addArrow(2, 3));     // ReferenceError: Cannot access 'addArrow' before initialization
// console.log(addExprVar(2, 3));   // TypeError: addExprVar is not a function
// this is because addExprVar is undefined here

console.log(addExprVar);            // undefined



function addDec(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

var addExprVar = function (a, b) {
    return a + b;
}


// Example
if (!numProducts) deleteShoppingCart();     // All products deleted
// because numProducts is undefined here

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted');
}



var x = 1;
let y = 2;
const z = 3;

// In node.js - ReferenceError: window is not defined
console.log(x === window.x);    // In browser it will be true
console.log(y === window.y);    // In browser it will be false
console.log(z === window.z);    // In browser it will be false
