function hobbyTracker(hobbies) {

    const cache = {}; // create a cache object (dictionary) - part of the closure
    for (let i = 0; i < hobbies.length; i++) {
        cache[hobbies[i]] = 0; // iterate through the array and add each element to the cache, assigned a starting value of zero
    }

    return function (hobby, hours) { // return a function which accepts a string (hobby), int (hours)
        if (hobby === undefined) { // if no args passed in...
            for (let key in cache) {
                cache[key] = 0; // reset all cache values to zero
            }
            return 'tracker has been reset!';
        } else {
            cache[hobby] += hours; // else, update the value in the cache with the additional hours
            return cache; // return the cache
        }
    }
}

// Uncomment the code below to check your code:
const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}

// To make sure I understand the concept of closure and how the code runs correctly, here's what happens in the computer: 1. the function hobby tracker is saved to the global memory. 2. the constant updateHobbies is declared and is assigned the invocation of hobbyTracker with the array of hobbies passed in. This opens an execution context to run the code of hobbyTracker, which declares a constant cache in the local memory, then passes in the hobbies to the cache as keys via the for loop, assigning each a value of zero. Finally, the function definition is returned to updateHobbies. 3. updateHobbies is invoked with 'yoga' and '2' passed in as the arguments, which runs the inner functions code with yoga and 2 as the arguments - the argument hobby is defined, so we add the value of the hours argument to existing value assigned to the key that is the hobby argument in the cache. We do this again for 'baking', '4' and 'yoga', '1'. We then console log updateHobbies with 'piano', '2' passed in as arguments, which does the same as before to update the cache and prints the updated cache to the terminal. Next, updateHobbies is invoked without an argument, which triggers the if statement logic, resetting each value in the cache to zero and returning the 'tracker has been reset!' string. Finally, we console log updateHobbies with 'baking', '1' passed in, which adds the value of the hours argument to the baking key in our otherwise reset cache. 