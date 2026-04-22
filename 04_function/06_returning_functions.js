const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');        // Hey Jonas
greeterHey('Steven');       // Hey Steven

greet('Hello')('Jonas');    // Hello Jonas

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
greetArrow('Hi', 'Jonas')   // Hello Jonas



