function outer() {
    let counter = 0; // this is a closure variable. It is the backpack that the inner function will use to keep track of state.
    function incrementCOunter() {
        counter++;
    }
    return incrementCOunter;
}


const myNewFunction = outer(); // myNewFunction now has access to the inner function incrementCounter and the closure variable counter.
myNewFunction(); // counter is now 1
myNewFunction(); // counter is now 2

const anotherFunction = outer(); // anotherFunction is a new instance of the inner function incrementCounter with its own closure variable counter.
anotherFunction(); // counter is now 1
anotherFunction(); // counter is now 2