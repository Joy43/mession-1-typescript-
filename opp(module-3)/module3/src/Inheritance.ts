// OOP Concept: Inheritance

class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(numOfHours: number) {
        console.log(`${this.name} will sleep for ${numOfHours} hours.`);
    }
}

// Student class inherits from Parent
class Student extends Parent {
    constructor(name: string, age: number, address: string) {
        super(name, age, address);
    }
}

const student1 = new Student('SS Joy', 20, "Bangladesh");
student1.getSleep(8); // Calling getSleep with numOfHours parameter

// Teacher class inherits from Parent
class Teacher extends Parent {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    }

    getSleep(numOfHours: number) {
        console.log(`${this.name}, a ${this.designation}, will sleep for ${numOfHours} hours.`);
    }

    getClass(numberOfClasses: number) {
        console.log(`${this.name} will take ${numberOfClasses} classes.`);
    }
}

const teacher1 = new Teacher('SS Joy', 35, "Bangladesh", "Professor");
teacher1.getSleep(6); // Calling getSleep with numOfHours parameter
teacher1.getClass(3); // Calling getClass with numberOfClasses parameter
