// Fix capitalization in name
const passenger = 'jOnAS';  // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);  // Jonas

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);      // hello@jonas.io

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);   // hello@jonas.io

console.log(email === normalizedEmail);     // true

// Replacing
const priceGB = '288,97€'
const priceUS = priceGB.replace('€', '$').replace(',', '.')
console.log(priceUS);   // 288.97$

const announcement = 'All passengers come to boarding door 23. Boarding door 23';
console.log(announcement.replace('door', 'gate'));      
// All passengers come to boarding gate 23. Boarding door 23

console.log(announcement.replaceAll('door', 'gate'));   
// All passengers come to boarding gate 23. Boarding gate 23

console.log(announcement.replace(/door/g, 'gate'));      
// All passengers come to boarding gate 23. Boarding gate 23

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));    // true
console.log(plane.includes('Boeing'));  // false
console.log(plane.startsWith('Airb'));  // true

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the NEW Airbus family');   // Part of the NEW Airbus family
}









