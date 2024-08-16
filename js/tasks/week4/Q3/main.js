// main.js
import Vehicle from './Vehicle.js';
import Bicycle from './Bicycle.js';

const car = new Vehicle();
console.log("Car:");
console.log("Color:", car.color);// blue
console.log("Wheels:", car.wheels);// 4
console.log("Horn:", car.horn);// beep beep
car.honkHorn();// beep beep

const bike = new Bicycle();
console.log("\nBicycle:");
console.log("Color:", bike.color);// blue
console.log("Wheels:", bike.wheels);// 2
console.log("Horn:", bike.horn);// honk honk
bike.honkHorn();// honk honk