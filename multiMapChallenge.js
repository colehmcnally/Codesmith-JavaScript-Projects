function multiMap(valueArray, callbackArray) {
    // create an output object (dictionary) to hold the key : value(array) pairs
    const results = {};
    // loop through the value array
    for (let i = 0; i < valueArray.length; i++) {
        //create an empty value list for the current key in results
        results[valueArray[i]] = []
        // loop each element through the array of callbacks
        for (let j = 0; j < callbackArray.length; j++) {
            // invoke the current callback on the element from the value array and push the output to the value list in the results dictionary
            results[valueArray[i]].push(callbackArray[j](valueArray[i]))
        }
    }
    // return results
    return results;
}

// Uncomment these to check your work!
function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }