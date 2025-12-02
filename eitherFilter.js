function eitherFilter(array, callback1, callback2) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (callback1(array[i]) == true || callback2(array[i]) == true) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

// Uncomment these to check your work!
const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]