function groupBy(array, callback) {
    // define an object to store our results
    const results = {};

    // for loop to iterate through the array
    for (let i = 0; i < array.length; i++) {
        // if the result of the callback (1 or 2) is not in the results already, assign the result of the callback (key) equal to the current value in the array.
        if (!(callback(array[i]) in results)) {
            results[callback(array[i])] = [array[i]]
        } else { // else, push the current value in the array to the new array
            results[callback(array[i])].push(array[i])
        }
    }
    return results;
}

// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
