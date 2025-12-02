function eitherCallback(callback1, callback2) {
    // Creating a higher order function that passes in two callbacks and iterates through the array each i in the array, if the number passes it is added to the new array in the filter function
    return (element, i, array) => {
        // return a boolean - true or false - whether EITHER callback returns true:
        return callback1(element, i, array) || callback2(element, i, array)
    }
}

// Uncomment these to check your work!
function filterArray(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i], i, array)) newArray.push(array[i]); // We don't actually need arguments 2 and 3 for this example but JS will ignore them if not used.
    }
    return newArray;
}
const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]