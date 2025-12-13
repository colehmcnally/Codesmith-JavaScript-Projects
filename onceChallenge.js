function once(callback) {
    // create a counter to count the number of times a function is called
    let counter = 0;
    // create a variable to store the value of the callback the first time it is run
    let val = 0;
    // create a function that calls a callback if the function has not been run before
    function inner(num) {
        // if the callback has not been run before, set val equal to the result of the callback 
        if (counter < 1) {
            val = callback(num);
        }
        // increment the counter by 1 each time the function is called
        counter += 1;
        // return the value to the inner function (should always be the result of the first call)
        return val;
    }
    // return the inner function to give the value to the function once
    return inner;
}
const addByTwoOnce = once(function (num) {
    return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7