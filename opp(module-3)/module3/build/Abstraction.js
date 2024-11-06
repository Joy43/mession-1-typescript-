"use strict";
// Abstraction: Using Interface and Abstract Class
// Real implementation using the Vehicle1 interface
class Car {
    startEngine() {
        console.log(`Starting the car engine.`);
    }
    stopEngine() {
        console.log(`Stopping the car engine.`);
    }
    move() {
        console.log(`The car is moving.`);
    }
    test() {
        console.log(`Testing the car.`);
    }
}
// Create an instance of Car and demonstrate functionality
const toyotaCar = new Car();
toyotaCar.startEngine(); // Expected output: "Starting the car engine"
toyotaCar.move(); // Expected output: "The car is moving"
toyotaCar.stopEngine(); // Expected output: "Stopping the car engine"
toyotaCar.test(); // Expected output: "Testing the car"
// ----------- Abstract Class ------------
// Define an abstract class with abstract methods
class Vehicle2 {
}
// Implement the abstract class with a specific vehicle
class ToyotaCar extends Vehicle2 {
    startEngine() {
        console.log(`Starting Toyota's engine.`);
    }
    stopEngine() {
        console.log(`Stopping Toyota's engine.`);
    }
    move() {
        console.log(`Toyota is moving.`);
    }
    test() {
        console.log(`Testing Toyota.`);
    }
}
// Create an instance of ToyotaCar and call its methods
const toyotaVehicle = new ToyotaCar();
toyotaVehicle.startEngine(); // Expected output: "Starting Toyota's engine"
toyotaVehicle.move(); // Expected output: "Toyota is moving"
toyotaVehicle.stopEngine(); // Expected output:
