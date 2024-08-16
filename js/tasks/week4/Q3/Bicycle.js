// Bicycle.js
import Vehicle from './Vehicle.js';

export default class Bicycle extends Vehicle {
    constructor(color ,wheels = 2, horn = "honk honk") {
        super(color,wheels, horn);
    }
}