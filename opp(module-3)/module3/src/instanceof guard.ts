class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log("I am making a sound");
    }
}

class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, species);
    }

    makeBark() {
        console.log("Woof! I am barking");
    }
}

class Cat extends Animal {
    constructor(name: string, species: string) {
        super(name, species);
    }

    makeMeaw() {
        console.log("Meow! I am meowing");
    }
}


// -- smart way handle working function use 

const isDog=(animal:Animal)=>{
    return animal instanceof  Dog
}
const isCat=(animal:Animal)=>{
    return animal instanceof Cat;
}

const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
        animal.makeBark();
    } else if (animal instanceof Cat) {
        animal.makeMeaw();
    } else {
        animal.makeSound();
    }
};

const dog = new Dog("Dhi", "dog");
const cat = new Cat("Dhi", "cat");

getAnimal(dog); // Outputs: Woof! I am barking
getAnimal(cat); // Outputs: Meow! I am meowing
