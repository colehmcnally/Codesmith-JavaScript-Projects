function pluralize(arr) {
    // create an empty output array
    // Use for loop to iterate through each item in the given array
    // add 's' to the end of each item to pluralize
    // return the output array
    const outputArray = []
    for (let item in arr) {
        let plural = arr[item] + 's'
        outputArray.push(plural);
    }
    return outputArray;
}

// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]