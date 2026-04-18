var firstName = 'Matilda'

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);

        const self = this;
        const isMillennial = function () {
            // undefined
            // console.log(this);  
            // TypeError: Cannot read property 'year' of undefined
            // console.log(this.year >= 1981 && this.year <= 1996);

            console.log(self);  
            console.log(self.year >= 1981 && self.year <= 1996);
        }
        
        isMillennial();
    },

    greet: () => {
        console.log(this);  // Will point to Window object in browser
        console.log(`Hey ${this.firstName}`);
    },

}

// jonas.greet();  // Hey undefined (Browser): if var is not defined
// jonas.greet();  // Hey Matilda (Browser): if var is defined
// console.log(this.firstName);    // undefined (Browser): if var is not defined
// console.log(this.firstName);    // Matilda: if var is defined

jonas.calcAge();
/**
 * LOGS: (Browser) - for commented code
    {
        firstName: 'Jonas',
        year: 1991,
        calcAge: [Function: calcAge],
        greet: [Function: greet]
    }
    46
    undefined
    TypeError: Cannot read property 'year' of undefined
 */

/**
 * LOGS: (Browser) - for uncommented code
    {
        firstName: 'Jonas',
        year: 1991,
        calcAge: [Function: calcAge],
        greet: [Function: greet]
    }
    46
    {
        firstName: 'Jonas',
        year: 1991,
        calcAge: [Function: calcAge],
        greet: [Function: greet]
    }
    true
 */


