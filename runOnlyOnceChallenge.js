
function runOnlyOnce(callback) {
    let counter = 0; // establish a counter variable
    let originalResult = 0; // establish a store for the original result

    function checkCounter(num) {
        if (counter === 0) { // if counter is equal to 0 (function run for first time)
            originalResult = callback(num); // store result of the callback function in originalResult
            counter++; // increment the counter
        } else {
            counter++; // increment the counter
        }
        return originalResult; // return the result to the outside world
    }
    return checkCounter; // return the function definition of checkCounter

}

// TEST CASES
function multiplyBy2(num) {
    console.log("Processing...");
    return num * 2;
}

const runOnceAndSave = runOnlyOnce(multiplyBy2);

console.log(runOnceAndSave(10));
// Should log "Processing..." 
// Should return 20

console.log(runOnceAndSave(500));
// Should NOT log "Processing..."
// Should return 20 (the previous result)