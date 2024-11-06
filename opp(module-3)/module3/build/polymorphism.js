"use strict";
{
    // polymorphsim
    class Person {
        getSleep() {
            console.log(`i am sleeping for hour per day`);
        }
    }
    class Student extends Person {
        getSleep() {
            console.log(`i am sleeping for 7 hour per day`);
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log(`i am sleeping for 5 hour per day`);
        }
    }
    const getSleepHours = (param) => {
        param.getSleep();
    };
    const Person1 = new Person();
    const Person2 = new Student();
    const Person3 = new Developer();
    getSleepHours(Person1);
    getSleepHours(Person2);
    getSleepHours(Person3);
    // -------another example polymorphsis
    // Define a base class 'Shape' with a method 'getArea' that returns 0 by default
    class Shape {
        getArea() {
            return 0; // Default implementation returns 0
        }
    }
    // Define a Rectangle class that extends Shape
    class Rectangle extends Shape {
        // Constructor to initialize height and width
        constructor(height, width) {
            super(); // Call the base class constructor
            this.height = height;
            this.width = width;
        }
        // Override the getArea method to calculate area of rectangle
        getArea() {
            return this.height * this.width; // Area of a rectangle
        }
    }
    // Define a Circle class that extends Shape
    class Circle extends Shape {
        // Constructor to initialize radius
        constructor(radius) {
            super(); // Call the base class constructor
            this.radius = radius;
        }
        // Override the getArea method to calculate area of circle
        getArea() {
            return Math.PI * this.radius * this.radius; // Area of a circle
        }
    }
    // Define a function that takes a Shape and prints its area
    const getShapeArea = (shape) => {
        console.log(shape.getArea());
    };
    // Create instances of Shape, Circle, and Rectangle
    const shape1 = new Shape();
    const shape2 = new Circle(10);
    const shape3 = new Rectangle(10, 20);
    // Call getShapeArea with different shapes
    getShapeArea(shape1); // Outputs: 0
    getShapeArea(shape2); // Outputs: 314.159...
    getShapeArea(shape3); // Outputs: 200
    // 
}
