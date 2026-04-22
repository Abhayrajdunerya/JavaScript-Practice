const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book (flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
    },
};

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const swiss = {
    airline: 'Swiss air lines',
    iataCode: 'LX',
    bookings: [],
};

const book = lufthansa.book;

// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLF = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Sarah Williams');   // Sarah Williams booked a seat on Eurowings flight EW23

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schedtmann');   // Jonas Schedtmann booked a seat on Eurowings flight EW23
bookEW23('Martha Cooper');      // Martha Cooper booked a seat on Eurowings flight EW23


// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    
    this.planes++;
    console.log(this.planes);
};

// document
//     .querySelector('.buy')
//     .addEventListener('click', lufthansa.buyPlane);

/**
 * LOGS:
    <button class="buy">Buy a new plane</button>
    NaN
 */

// document
//     .querySelector('.buy')
//     .addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

/**
 * LOGS:
    {
        airline: 'Lufthansa',
        iataCode: 'LH',
        bookings: [{...}], 
        book: fn(...),
        planes: 300,
    }
    301
 */

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));  // 220

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));       // 123
console.log(addVAT(23));        // 28.29

