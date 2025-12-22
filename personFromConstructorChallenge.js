function PersonConstructor() {
    this.greet = function () {
        console.log('hello');
    }
}

function personFromConstructor(name, age) {
    const person = new PersonConstructor();
    person.name = name;
    person.age = age;
    return person;
}

PersonConstructor.prototype.introduce = function () {
    console.log(`Hi, my name is ${this.name}`)
}
const mike = personFromConstructor('Mike', 30);


mike.introduce(); // -> Logs 'Hi, my name is Mike'