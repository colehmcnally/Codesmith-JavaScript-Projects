function forEach(arr, cb) {
    // create for loop to iterate through each element in array
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i); // pass each element of arr and it's index as arguments to the callback
    }
}

const delays = [200, 500, 0, 350]; // delays array

function delayLog(delayTime, i) {
    setTimeout(() => console.log(`printing element ${i}`), delayTime); // wait delayTime milliseconds, then print ( think I need to pass a function into setTimeout and not a console log here)
}

forEach(delays, delayLog); // use forEach function to run the delayLog function on each element of the delays array