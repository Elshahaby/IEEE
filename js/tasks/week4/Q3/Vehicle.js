// vehicle.js
export default class Vehicle {
    constructor(color = "blue", wheels = 4, horn = "beep beep") {
        this.color = color;
        this.wheels = wheels;
        this.horn = horn;
    }

    honkHorn() {
        console.log(this.horn);
    }
}