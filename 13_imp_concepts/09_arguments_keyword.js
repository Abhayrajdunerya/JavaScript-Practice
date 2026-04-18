const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
}

addExpr(2, 5);          // [Arguments] { '0': 2, '1': 5 }
addExpr(2, 5, 8, 12)    // [Arguments] { '0': 2, '1': 5, '2': 8, '3': 12 }

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
}

addArrow(2, 5, 8);      // ReferenceError: arguments is not defined (Browser)
