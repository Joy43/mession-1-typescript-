// Abstraction: Using Interface and Abstract Class

// Define an interface with methods all vehicles should implement.
interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
}

// Real implementation using the Vehicle1 interface
class Car implements Vehicle1 {
    startEngine(): void {
        console.log(`Starting the car engine.`);
    }

    stopEngine(): void {
        console.log(`Stopping the car engine.`);
    }

    move(): void {
        console.log(`The car is moving.`);
    }

    test(): void {
        console.log(`Testing the car.`);
    }
}

// Create an instance of Car and demonstrate functionality
const toyotaCar = new Car();
toyotaCar.startEngine(); // Expected output: "Starting the car engine"
toyotaCar.move();        // Expected output: "The car is moving"
toyotaCar.stopEngine();   // Expected output: "Stopping the car engine"
toyotaCar.test();         // Expected output: "Testing the car"


// ----------- Abstract Class ------------

// Define an abstract class with abstract methods
abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    abstract test(): void;
}

// Implement the abstract class with a specific vehicle
class ToyotaCar extends Vehicle2 {
    startEngine(): void {
        console.log(`Starting Toyota's engine.`);
    }

    stopEngine(): void {
        console.log(`Stopping Toyota's engine.`);
    }

    move(): void {
        console.log(`Toyota is moving.`);
    }

    test(): void {
        console.log(`Testing Toyota.`);
    }
}

// Create an instance of ToyotaCar and call its methods
const toyotaVehicle = new ToyotaCar();
toyotaVehicle.startEngine(); // Expected output: "Starting Toyota's engine"
toyotaVehicle.move();        // Expected output: "Toyota is moving"
toyotaVehicle.stopEngine();   // Expected output:
