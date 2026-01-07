// Add code here

function limitedInterval(callback, wait, limit) {
    let totalTime = 0; // total time variable to track the total amount of time that the callback has been run
    const id = setInterval(() => { // start repeating, save the ID. We need to do the following each time setInterval runs:
        callback(); // run the callback function
        totalTime += wait // add the time to the tracker
        if (totalTime + wait >= limit) { // check if we have hit the time limit
            clearInterval(id); // if so, stop using the id
        }
    }, wait);
}

// /* Uncomment the following line and click 'run' to test your work */
limitedInterval(() => console.log('repeating'), 100, 550); // should log 'repeating' once per 100 ms, five times.
