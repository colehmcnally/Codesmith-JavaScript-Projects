console.log('Hello, world!');

function repeater(char, counter = 0, result = '') {
    if (counter === 5) { // if our counter is strictly equal to 5
        return result; // return the value of result
    }
    result += char; // add a character to our string
    counter++; // increment our counter
    return repeater(char, counter, result); // recursively call the repeater function with the parameters passed in
}

console.log(repeater('g'));
console.log(repeater('j'));