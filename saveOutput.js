function saveOutput(func, password) {
    // create dictionary to hold results from function
    let results = {};
    // return a function that takes anargument
    return function (arg) {
        // if the arg is equal to the password, return the dictionary
        if (arg === password) {
            return results;
        } else { // else, store the result in the results dictionary as the key and the function's result as the value
            results[arg] = func(arg);
            return results[arg];
        }
    }
}


const multiplyBy2 = function (num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }