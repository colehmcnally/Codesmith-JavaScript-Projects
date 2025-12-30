class PersonClass {
    constructor(name) {
        this.name = name; // Set the 'name' property of the current instance (this) to the provided argument value (name)

    }

    greet() {
        console.log(`hello`);
    }

}

const george = new PersonClass('George');
george.greet(); // -> Logs 'hello'