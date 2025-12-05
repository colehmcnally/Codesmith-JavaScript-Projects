function prioritize(array, callback) {
    // create arrays for true items (begins with s) and false items
    const trueItems = [];
    const falseItems = [];
    // create a for loop to iterate through the array
    for (let i = 0; i < array.length; i++) {
        // if the callback invocation is strictly equal to true, add the element to the beginning of the array
        if (callback(array[i]) === true) {
            trueItems.push((array[i]));
        } else {
            // else, simply push the element to the array (so that it is at the end - issue is that sunny will end up first)
            falseItems.push((array[i]));
        }
    }
    // concatenate the arrays (with results being first) and return the results
    return trueItems.concat(falseItems);
}

// Uncomment these to check your work!
function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']