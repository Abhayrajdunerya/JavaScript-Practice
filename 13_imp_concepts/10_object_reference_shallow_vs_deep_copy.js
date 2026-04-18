const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
}

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

// Before { firstName: 'Jessica', lastName: 'Davis', age: 27 }
console.log('Before', jessica);       

// After { firstName: 'Jessica', lastName: 'Davis', age: 27 }
console.log('After', marriedJessica);   


const jessica2 = {
    firstName: 'Jessica 2',
    lastName: 'Williams',
    age: 27,
}

function marryPerson(originalPerson, newLastName) {
    originalPerson.lastName = newLastName;
    return originalPerson;
}

const marriedJessica2 = marryPerson(jessica2, 'Davis');

// Before { firstName: 'Jessica 2', lastName: 'Davis', age: 27 }
console.log('Before', jessica2);       

// After { firstName: 'Jessica 2', lastName: 'Davis', age: 27 }
console.log('After', marriedJessica2);   


const jessica3 = {
    firstName: 'Jessica 3',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
}

// Shallow Copy
const jessica3Copy = {...jessica3};
jessica3Copy.lastName = 'Davis';

jessica3Copy.family.push('Mary');
jessica3Copy.family.push('John');

console.log('Before', jessica3);     
/** 
 * LOGS:
    Before {
        firstName: 'Jessica 3',
        lastName: 'Williams',
        age: 27,
        family: [ 'Alice', 'Bob', 'Mary', 'John' ]
    }
 */  

console.log('After', jessica3Copy);   
/**
    After {
        firstName: 'Jessica 3',
        lastName: 'Davis',
        age: 27,
        family: [ 'Alice', 'Bob', 'Mary', 'John' ]
    }
 */


// Deep Copy / Clone
const jessica3Clone = structuredClone(jessica3);
jessica3Clone.family.push('Abhay');
jessica3Clone.family.push('Raj');

console.log('Original:', jessica3);
console.log('Clone:', jessica3Clone);

/**
 * LOGS:
    Original: {
        firstName: 'Jessica 3',
        lastName: 'Williams',
        age: 27,
        family: [ 'Alice', 'Bob', 'Mary', 'John' ]
    }
    Clone: {
        firstName: 'Jessica 3',
        lastName: 'Williams',
        age: 27,
        family: [ 'Alice', 'Bob', 'Mary', 'John', 'Abhay', 'Raj' ]
    }
 */


