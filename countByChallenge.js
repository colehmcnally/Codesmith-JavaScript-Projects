function countBy(array, callback) {
    // create empty object / dictionary to store key : value pairs
    const results = {};

    // for loop to iterate through each element of the array
    for (let i = 0; i < array.length; i++) {
        // if the result (even or odd) does not yet exist in the results dictionary, set it's value equal to 1
        if (!(callback(array[i]) in results)) {
            results[callback(array[i])] = 1
        } else { // else, increment it's value by 1
            results[callback(array[i])] += 1
        }
    }
    // return results
    return results;
}

// Uncomment these to check your work!
function evenOdd(n) {
    if (n % 2 === 0) return 'even';
    else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }