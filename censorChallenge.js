function censor() {

    const cache = {}; // create cache to store key value pairs of strings
    return function (str1, str2) { // create and return inner function that accepts two strings
        if (str2 === undefined) { // if only one string is passed in...
            let newStr = str1 // define a new string equal to the original string passed in
            for (let key in cache) { // for each key in cache
                newStr = newStr.replaceAll(key, cache[key]); // replace each key in cache appearing in str1 with value
            }
            return newStr; // return new string
        } else { // else(two strings passed in)...
            cache[str1] = str2; // store as key value pair in cache
        }
    }
}

// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'