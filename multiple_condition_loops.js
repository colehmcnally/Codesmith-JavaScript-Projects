function addingAllTheWeirdStuff(array1, array2) {
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < array2.length; i++) { // Summing odd and even numbers from array 2 to the sumOdd and sumEven variables
        if (array2[i] % 2 !== 0) {
            sumOdd += array2[i];
        } else {
            sumEven += array2[i];
        }
    }

    for (let i = 0; i < array1.length; i++) { // If any element in array 1 is less than 10, add the sumOdd total to that element in array 1
        if (array1[i] < 10) {
            array1[i] += sumOdd;
        }
        else if (array1[i] > 10) { // If any element in array 1 is greater than 10, add the sumEven total to that element in array 1
            array1[i] += sumEven;
        }
    }

    let array2_max = array2[0] // Finding the max value in array 2
    for (let i = 0; i < array2.length; i++) {
        if (array2[i] > array2_max) {
            array2_max = array2[i]
        }
    }

    if (array2_max > 20) { // return max element in array2, if greater than 20, add 1 to all elements
        for (let i = 0; i < array1.length; i++) {
            array1[i] = array1[i] + 1
        }
    }

    return array1;
}

console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]