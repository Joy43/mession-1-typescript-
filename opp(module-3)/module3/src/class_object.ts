/* Command to run:
ts-node-dev --respawn --transpile-only ./module3/src/class_object.ts */

// OOP class fundamental topic
class Animal {
    // name: string;
    species: string;
    sound: string;

    // parameter properties
    constructor(public name: string, species: string, sound: string) {
        // this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        console.log(`The ${this.name} goes '${this.sound}'`);
    }
}

const dog = new Animal("German Shepherd", "dog", "Ghew ghew");
const cat = new Animal("Persian Cat", "cat", "Meow meow");

dog.makeSound();  // Output: The German Shepherd goes 'Ghew ghew'
cat.makeSound();  // Output: The Persian Cat goes 'Meow meow'
