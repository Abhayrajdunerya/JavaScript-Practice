"use strict";

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        // const output = `You are ${age}, born in ${birthYear}`;
        let output = `You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millennial = true;
            const str = `Oh, and you're a millennial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

            output = 'NEW OUTPUT';
        }
        // console.log(str);        // ReferenceError: str is not defined
        console.log(millennial);    // true
        // console.log(add(2, 3));     // ReferenceError: add is not defined
        console.log(output);        // NEW OUTPUT
    }

    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1991);              // You are 46, born in 1991
                            // Oh, and you're a millennial, Jonas
                            // true
// console.log(age);           // ReferenceError: age is not defined
// printAge();                 // ReferenceError: printAge is not defined



