function flow(input, funcArray, i = 0) {
    if (i === funcArray.length) { // base case: if i === funcArray.length, return input
        return input;
    }
    const output = funcArray[i](input); // pass input to 
    i++; // increment i to move to next element of the array of functions
    return flow(output, funcArray, i);// recursively call flow with the output passed in

}

function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7