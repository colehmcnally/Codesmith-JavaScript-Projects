function addByX(x) {
    function innerFunc(input) {
        let result = input + x;
        return result;
    }
    return innerFunc;
}

// This is calling addByX and returning innerFunc with 2 subbed in for x (input + 2). 
const addByTwo = addByX(2);

// Now call addByTwo with an input of 1 and log the output
console.log(addByTwo(1));

// Now call addByTwo with an input of 2 and log the output
console.log(addByTwo(2));