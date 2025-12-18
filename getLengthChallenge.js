function getLength(array, i = 0) {
    if (array[i] === undefined) { // base case: if the current array's index position is undefined, return that index number
        return i;
    }
    i++; // increment i
    return getLength(array, i); // recursively call getLength with the new index position

}

console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
