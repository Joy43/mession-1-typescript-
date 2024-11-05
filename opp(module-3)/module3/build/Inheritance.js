"use strict";
{
    // opp ---> inheritance
    class parent {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }
    class Student extends parent {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const Student1 = new Student('ss joy', 20, "bangladesh");
    Student1;
    // 
    class Teacher extends parent {
        constructor(name, age, address, designaion) {
            super(name, age, address);
            this.designaion = designaion;
        }
        getSleep(numOfHours) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
        GetClass(numberofClass) {
            console.log(`${this.name} will take ${numberofClass}`);
        }
    }
    const Teacher1 = new Student('ss joy', 20, "bangladesh");
    Student1;
}
