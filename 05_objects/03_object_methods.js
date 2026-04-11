const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDrivingLicense: true,

    calcAge: function(birthYear) {
        return 2037 - birthYear;
    },

    calcAge2: function() {
        return 2037 - this.birthYear;
    },

    calcAge3: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge3()} - year old ${jonas.job} and he has ${this.hasDrivingLicense ? 'a' : 'no'} driver's license`;
    }
}

console.log(jonas.calcAge(1991));           // 46
console.log(jonas['calcAge'](1991));        // 46

console.log(jonas.calcAge2());              // 46

// this -> always reference, who is calling
// Here jonas is the calcAge2 method hence this keyword will referenced to jonas object

console.log(jonas.calcAge3());              // 46
console.log(jonas.age);                     // 46


console.log(jonas.getSummary());    // Jonas is a 46 - year old teacher and he has a driver's license


