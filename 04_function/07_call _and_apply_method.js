/**
 * Call and Apply methods works similarly.
 * Difference:
 *  - Call method except function parameters in seperate parameters
 *  - Apply method except function parameters in an array
 */

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book (flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
    },
};

lufthansa.book(239, 'Jonas Schmedtmann');   // Jonas Schmedtmann booked a seat on Lufthansa flight LH239
lufthansa.book(635, 'John Smith');          // John Smith booked a seat on Lufthansa flight LH635
console.log(lufthansa);

/**
 * LOGS:
    {
        airline: 'Lufthansa',
        iataCode: 'LH',
        bookings: [
            { flight: 'LH 239', name: 'Jonas Schmedtmann' },
            { flight: 'LH 635', name: 'John Smith' }
        ],
        book: [Function: book]
    }
 */

const eurowings = {
    name: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book;

// Sarah Williams booked a seat on undefined flight undefined23
// TypeError: Cannot read properties of undefined (reading 'push')
// book(23, 'Sarah Williams'); 


book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
/**
 * LOGS:
    Sarah Williams booked a seat on undefined flight EW23
    {
        name: 'Eurowings',
        iataCode: 'EW',
        bookings: [ { flight: 'EW 23', name: 'Sarah Williams' } ]
    }
 */


book.call(lufthansa, 239, 'Marry Cooper');
console.log(lufthansa);
/**
 * LOGS:
    Marry Cooper booked a seat on Lufthansa flight LH239
    {
        airline: 'Lufthansa',
        iataCode: 'LH',
        bookings: [
            { flight: 'LH 239', name: 'Jonas Schmedtmann' },
            { flight: 'LH 635', name: 'John Smith' },
            { flight: 'LH 239', name: 'Marry Cooper' }
        ],
        book: [Function: book]
    }
 */

const swiss = {
    name: 'Swiss air lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'Marry Cooper');
console.log(swiss);
/**
 * LOGS:
    Marry Cooper booked a seat on undefined flight LX583
    {
        name: 'Swiss air lines',
        iataCode: 'LX',
        bookings: [ { flight: 'LX 583', name: 'Marry Cooper' } ]
    }
 */

// Apply Method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
/**
 * LOGS:
    George Cooper booked a seat on undefined flight LX583
    {
        name: 'Swiss air lines',
        iataCode: 'LX',
        bookings: [
            { flight: 'LX 583', name: 'Marry Cooper' },
            { flight: 'LX 583', name: 'George Cooper' }
        ]
    }
 */

book.call(swiss, ...flightData);
console.log(swiss);
/**
 * LOGS:
    George Cooper booked a seat on undefined flight LX583
    {
        name: 'Swiss air lines',
        iataCode: 'LX',
        bookings: [
            { flight: 'LX 583', name: 'Marry Cooper' },
            { flight: 'LX 583', name: 'George Cooper' },
            { flight: 'LX 583', name: 'George Cooper' }
        ]
    }
 */

