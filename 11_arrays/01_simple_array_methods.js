let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr);                       // [ 'a', 'b', 'c', 'd', 'e' ]

/**
 * 1. slice: does not modify array, returns new array (subarray) as a result.
 * 
 * 2. splice: modify array, delete elements, returns new array,
 *            original array contains remaining elements,
 *            returned elements will be removed from array.
 * 
 * 3. reverse: modify array (reverse), return reversed array.
 * 
 * 4. concat: does not modify array, return new array (concat) as a result
 * 
 * 5. join: does not modify array, return new string
 * 
 * 6. includes: return boolean: check element is present or not, not modify array
 */

// ------------------ SLICE ---------------------------------------------------------------
// subarray from index 2 -> n-1
console.log(arr.slice(2));              // [ 'c', 'd', 'e' ]

// subarray from index 2 -> 4-1 (last number is exclusive)
// length of subarray 4 - 2 = 2
console.log(arr.slice(2, 4));           // [ 'c', 'd' ]
console.log(arr.slice(-2));             // [ 'd', 'e' ]
console.log(arr.slice(-1));             // [ 'e' ]
console.log(arr.slice(1, -2));          // [ 'b', 'c' ]

// creating duplicate array
console.log(arr.slice());               // [ 'a', 'b', 'c', 'd', 'e' ]
console.log([...arr]);                  // [ 'a', 'b', 'c', 'd', 'e' ]


// ------------------ SPLICE ---------------------------------------------------------------
console.log(arr.splice(2));
console.log(arr);

arr = ['a', 'b', 'c', 'd', 'e'];
// Remove last element from array
console.log(arr.splice(-1));            // [ 'e' ]
console.log(arr);                       // [ 'a', 'b', 'c', 'd' ]


console.log(arr.splice(1, 2));          // [ 'b', 'c' ]
console.log(arr);                       // [ 'a', 'd' ]



// ------------------ REVERSE ---------------------------------------------------------------

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());            // [ 'f', 'g', 'h', 'i', 'j' ]
console.log(arr2);                      // [ 'f', 'g', 'h', 'i', 'j' ]


// ------------------ CONCAT ---------------------------------------------------------------

const letters = arr.concat(arr2);       // will not modify any array

/**
 * LOGS:
 *  [
        'a', 'b', 'c', 'd',
        'e', 'f', 'g', 'h',
        'i', 'j'
    ]
 */
console.log(letters);
console.log([...arr, ...arr2]);


// ------------------ JOIN ---------------------------------------------------------------

console.log(letters.join(' - '));   // a - b - c - d - e - f - g - h - i - j


// ------------------ INCLUDES ---------------------------------------------------------------

console.log(arr.includes('z'));     // false
console.log(arr.includes('a'));     // true



