
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function map(array, callback) {
    // Create an empty array to store results
    let newArray = [];
    // Use forEach to iterate through the input array, which will call the function once for each element in the array
    forEach(array, function (element) { // <-- this is an anonympus function. Element is the variable that recieves whatever value forEach is giving us.
        // Then, for each element, apply the callback transformation and push the transformed result into newArray
        newArray.push(callback(element));
    });

    // Return the new array with all transformed elements
    return newArray;
}

// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(['a', 'b', 'c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], n => n - 2)); // should log: [1, 2, 3]