const personStore = {
    greet: function () {
        console.log('hello');
    }
}

function personFromPersonStore(name, age) {
    const person = Object.create(personStore);
    person.name = name;
    person.age = age;
    return person;
}

personStore.introduce = function () {
    console.log(`Hi, my name is ${this.name}`); // the function is assigned to introduce, and is added to our prototype chain in personStore, which is accessible by all objects created in our ojbect factory personFromPersonStore.
}

const sandra = personFromPersonStore('Sandra', 26);

// add code here


// Uncomment this line to check your work!
sandra.introduce(); // -> Logs 'Hi, my name is Sandra'