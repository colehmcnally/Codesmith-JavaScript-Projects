function arrayBuilder(obj) {
    // input: object
    // output: array

    // declare and output array variable
    // use a for...in loop to iterate through the properties inside of this object
    // Use a count variable to keep track of how many times we need to add each property to the output array
    // use a while loop to push the property name into the output array as long as count is greater than 0 and decrement count each time we push
    // return the output array

    const outputArray = [];

    for (let key in obj) {
        let repeatCount = obj[key];

        while (repeatCount > 0) {
            outputArray.push(key);
            repeatCount--;
        }
    }

    return outputArray;
}

// Uncomment these to check your work!
console.log(arrayBuilder({ 'cats': 2, 'dogs': 1 })); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []