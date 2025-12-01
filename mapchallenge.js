// ADD CODE HERE
// create a function that subtracts two from an input number variable and returns a result
function subtractTwo(inputNumber) {
    const result = inputNumber - 2;
    return result;
}

// Create a function that takes an input array and callback function as arguments
// Create a new empty Array
// Create a for loop that iterates through each index of the input array, runs the value at that index through the callback function, and pushes the output value to the newArray
// Return the new array
function map(inputArray, callback) {
    let newArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        newArray.push(callback(inputArray[i]));
    }
    return newArray;
}

// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], subtractTwo)); // should log: [ 1, 2, 3 ]