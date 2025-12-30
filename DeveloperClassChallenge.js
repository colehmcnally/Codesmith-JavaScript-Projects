class PersonClass {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log('hello');
    }
}

class DeveloperClass extends PersonClass { // DeveloperClass inherits all properties of PersonClass (if any methods have the same name, it will overwrite that method)
    introduce() { // new introduce method
        console.log(`Hello World, my name is ${this.name}`) // console logs the string with the name passed in
    }

}

const thai = new DeveloperClass('Thai', 32);


console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); // -> Logs 'Hello World, my name is Thai'