function defineFirstArg(func, arg) {

    function inner(...args) { // collect any additional arguments into an array
        return func(arg, ...args); // call func with pre-set first arg, then spread remaining args
    }
    return inner; // return inner function (closure) 
}

// Uncomment these to check your work!
const subtract = function (big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20); // subFrom20 is assigned to the function definition of defineFirstArg (i.e the code inside - function inner and its return value) with the function subtract passed as func and 20 passed as arg
console.log(subFrom20(5)); // should log: 15 - subFrom20(5) → inner(5) → subtract(20, 5) → 15