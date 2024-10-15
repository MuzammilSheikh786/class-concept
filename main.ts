
type CarType = {
    price : number,
    colour: string,
    Model : number 
}


class Car {
    price :number = 0;
    colour:string =  'not defined';
    Model: number = 0;
    constructor(price:number,colour:string,Model:number){
        this.price = price;
        this.colour = colour;
        this.Model = Model;

    }

}

let car1:CarType = new Car(140000,"blue",2023);
// car1.Model = 2023;
// car1.colour = "blue";
// car1.price = 140000


let car2:CarType = new Car(150000,"white",2021);
console.log(car1);
console.log(car2);






   


