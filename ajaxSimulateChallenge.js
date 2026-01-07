let dataReceived;

function ajaxSimulate(id, callback) {
    const database = ['Aaron', 'Barbara', 'Chris'];
    setTimeout(() => callback(database[id]), 0); // pass the database array index element equal to id into the callback function after 0ms. Using arrow function reference so the function is called
}

function storeData(data) {
    dataReceived = data; // reassign dataReceived to the value of data passed in
    console.log(dataReceived); // console log the value of dataReceived - will be defined here
}

ajaxSimulate(1, storeData); // invoke ajaxSimulate function
console.log(dataReceived); // console log the value of dataReceived - will be undefined here