function arrayBuilder(dict) {

    let newArray = []
    let item = 0
    for (item in dict) { // Loop through each key value pair in the dictionary
        for (let num = 0; num < dict[item]; num++) { // Iterate through each key value pair the number of times of the value
            newArray.push(item) // Add the item to the new array
        }
    }

    return newArray // Return the new array
}

// Uncomment these to check your work!
console.log(arrayBuilder({ 'cats': 2, 'dogs': 1 })); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []