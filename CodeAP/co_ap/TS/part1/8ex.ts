
class Car {
    model :string;
    price :number;
    constructor(model, price){
        this.model = model;
        this.price = price;
    }

    tax() :number{
        return this.price / 10;
    }
}

let car1 = new Car('소나타', 3000);

console.log(car1);
console.log(car1.tax());