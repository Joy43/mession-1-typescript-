"use strict";
// OOP Concept: Inheritance
class Parent {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep(numOfHours) {
        console.log(`${this.name} will sleep for ${numOfHours} hours.`);
    }
}
// Student class inherits from Parent
class Student extends Parent {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student1 = new Student('SS Joy', 20, "Bangladesh");
student1.getSleep(8); // Calling getSleep with numOfHours parameter
// Teacher class inherits from Parent
class Teacher extends Parent {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    getSleep(numOfHours) {
        console.log(`${this.name}, a ${this.designation}, will sleep for ${numOfHours} hours.`);
    }
    getClass(numberOfClasses) {
        console.log(`${this.name} will take ${numberOfClasses} classes.`);
    }
}
const teacher1 = new Teacher('SS Joy', 35, "Bangladesh", "Professor");
teacher1.getSleep(6); // Calling getSleep with numOfHours parameter
teacher1.getClass(3); // Calling getClass with numberOfClasses parameter
