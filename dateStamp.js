function dateStamp(func) {

    const cache = {}; // declares an empty cache
    const today = new Date(); // creates a constant value today with the current date (time stamp) 
    const formattedDate = today.toDateString(); // converting the time stamp to a readable format
    return function inner(...args) { // function that accepts whatever args are passed in
        cache['date'] = formattedDate;
        cache['output'] = func(...args);
        // return object with a date key and an output key with the result of invoking the passed in func
        return cache;
    }
}


// Uncomment these to check your work!
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }