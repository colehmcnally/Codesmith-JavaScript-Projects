console.log("I am at the beginning of the code.");

function timeoutFunc() {
    console.log("I am in the setTimeout callback function");
}

setTimeout(timeoutFunc, 600); // set a timer that will log the passed in string after 600ms
console.log("I am at the end of the code.");