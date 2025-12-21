function makePerson(name, age) {
    const newUser = {}; // create a new user object
    newUser.name = name; // add a name property to the object 
    newUser.age = age; // add an age property to the object

    return newUser; // return the new object
}

const vicky = makePerson('Vicky', 24);


console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24