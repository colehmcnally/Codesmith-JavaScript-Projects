function objOfMatches(array1, array2, callback) {
    // assign an empty dictionary / object to store our key : value pairs for elements that match when run through the callback function
    const matches = {};
    // iterate through each element of array1
    for (let i = 0; i < array1.length; i++) {
        // Determine if the element in array1, when run through the callback function (uppercaser), is strictly equal to its corresponding element in array2
        if (callback(array1[i]) === array2[i]) {
            // if true, return the current elements of each array as a respective key : value pair to the dictionary
            matches[array1[i]] = array2[i];
        }
    }
    // return the dictionary / object
    return matches;
}

// Uncomment these to check your work!
const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }