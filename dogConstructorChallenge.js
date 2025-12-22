function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
    this.tricks = []; // create empty array to represent tricks known by the dog
}

// learnTrick method adds new trick to trick array
Dog.prototype.learnTrick = function (string) {
    this.tricks.push(string);
}

// performTrick performs the trick argument passed to the string parameter if it exists
Dog.prototype.performTrick = function (string) {
    if (this.tricks.includes(string) === true) {
        console.log(`${this.name} performed ${string}!`);
    } else {
        console.log(`${this.name} doesn't know that trick.`);
    }
}

const fido = new Dog('Fido', 'poodle');


fido.learnTrick('fetch');
fido.performTrick('fetch'); // should log 'Fido performed fetch!'
fido.performTrick('sit'); // should log 'Fido doesn't know that trick.'