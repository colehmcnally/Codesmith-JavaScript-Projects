function intersection(arr) {
    // create an empty newArray to hold values that appear in all arrays
    let newArray = [];
    // create a for loop that loops through the first array
    for (let i = 0; i < arr[0].length; i++) {
        const currentValue = arr[0][i];
        let currentElementCommon = true; // assume current element is common among arrays; resets every time we move to the next element of the first loop
        // create a for loop that loops through the remaining arrays
        for (let j = 1; j < arr.length; j++) {
            // check if the current array includes the current value
            if (!arr[j].includes(currentValue)) {
                currentElementCommon = false;
            }
        }
        // if currentElementCommon is still true, this means it is present in all arrays, so add it to newArray
        if (currentElementCommon === true) {
            newArray.push(currentValue);
        }
    }
    return newArray;
}