console.log('Hello, world!');

function repeater(char) {
    if (char.length === 5) { // if our passed in character has a length of 5
        return char; // return the value of result
    }
    return repeater(char + char[0]); // recursively call the repeater function with the current iteration of the char paramater plus the first character of char (extending the string by one character)
}

console.log(repeater('g'));
console.log(repeater('j'));