function cycleIterator(array) {

    let counter = 0 // declare a counter variable
    function inner() {  // declare function with no arguments
        const currentElement = array[counter % array.length];  // assign the relative position in the array to a currentElement
        counter++; // increment counter
        return currentElement; // return the current element
    }
    return inner; // return the inner function
}

// Uncomment these to check your work!
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'