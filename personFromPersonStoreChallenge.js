const personStore = {
    greet: function () {
        console.log('hello');
    }
}

function personFromPersonStore(name, age) {
    const newUser = Object.create(personStore);
    newUser.name = name;
    newUser.age = age;
    return newUser;
}

const sandra = personFromPersonStore('Sandra', 26);

// Uncomment these lines to check your work!
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); // -> Logs 26
sandra.greet(); // -> Logs 'hello'