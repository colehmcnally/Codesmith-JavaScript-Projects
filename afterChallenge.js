function after(numCalls, callback) {
    let counter = 0; // create a counter to store the number of times a function has been called - this is your backpack that is brought out with the inner function to keep track of state due to closure.
    function inner(...args) { // create an inner function that accepts a string, which will be passed to the callback
        counter++; // increment the counter each time the function is called
        if (counter >= numCalls) { // if the function has been run at least num times
            return callback(...args); // set the value equal to the result of the callback with string passed in
        }
        return; // else, return undefined
    }
    return inner; // return the inner function (closure requires us to return a function)
}
const called = function (string) { return ('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed