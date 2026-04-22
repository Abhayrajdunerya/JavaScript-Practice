const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739479284,
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 24739479284) {
        console.log('Checked in');
    } else {
        console.log('Wrong passport!');
    }
}

checkIn(flight, jonas);     // Checked in
console.log(flight);        // LH234
console.log(jonas);         // { name: 'Mr. Jonas Schmedtmann', passport: 24739479284 }

