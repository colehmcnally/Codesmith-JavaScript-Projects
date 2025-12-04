function reduce(array, callback, initialValue) {
    let accumulator = initialValue; // Assign initial value to the accumulator
    for (let i = 0; i < array.length; i++) { // Iterate through the array
        accumulator = callback(accumulator, array[i]) // Pass the acumulator value and the array value to the callback function, returning the result to accumulator
    }
    return accumulator;
}
// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function (a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8