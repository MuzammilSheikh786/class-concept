"use strict";
class Car {
    constructor(price, colour, Model) {
        this.price = 0;
        this.colour = 'not defined';
        this.Model = 0;
        this.price = price;
        this.colour = colour;
        this.Model = Model;
    }
}
let car1 = new Car(140000, "blue", 2023);
// car1.Model = 2023;
// car1.colour = "blue";
// car1.price = 140000
let car2 = new Car(150000, "white", 2021);
console.log(car1);
console.log(car2);
