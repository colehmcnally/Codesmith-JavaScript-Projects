function majority(array, callback) {
    // declare count variable to store the number of true returns
    let count = 0
    // create a for loop to iterate through the array
    for (let i = 0; i < array.length; i++) {
        // invoke callback on each element & if it returns true (number is odd), increment count by 1
        if (callback(array[i]) === true) {
            count += 1
            // if the true count exceeds half of the array length, return true
            if (count > (array.length / 2)) {
                return true;
            }
        }
    }
    // if the for loop completes without having returned true, it means the majority is not odd, so return false
    return false;
}

// Uncomment these to check your work!
const isOdd = function (num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false