function union(arrays) {
    let newArray = [];

    // create a loop that loops through each array
    for (let i = 0; i < arrays.length; i++) {
        // create a loop that loops through each element of the current array and compares it to newArray
        for (let j = 0; j < arrays[i].length; j++) {
            // constant that determinse if the current element is already in the newArray
            const isPresent = newArray.includes(arrays[i][j])
            // if it is not already present, add it to newArray, otherwise, move to the next element of the array
            if (!isPresent) {
                newArray.push(arrays[i][j]);
            }
        }
    }
    return newArray;
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]