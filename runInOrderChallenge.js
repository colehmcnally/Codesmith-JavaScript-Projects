function runInOrder(funcArray, numArray) {
    let elapsedTime = 0; // declare time variable to track total time elapsed
    for (let i = 0; i < funcArray.length; i++) {// iterate through each index element of the function array and call that function using the set timeout delay in the corresponding index position in the number array
        elapsedTime += numArray[i]; // update time variable
        setTimeout(funcArray[i], elapsedTime);
    }
}

// /* Uncomment the following lines and click 'run' to test your work */

function sayHi() {
    console.log('hi');
}
function sayBye() {
    console.log('bye');
}
function sayHowdy() {
    console.log('howdy');
}

runInOrder([sayHi, sayBye, sayHowdy], [200, 100, 300]);

/*
should log:
'hi' (after 200 ms)
'bye' (100 ms after 'hi')
'howdy' (300 ms after 'bye')
*/
