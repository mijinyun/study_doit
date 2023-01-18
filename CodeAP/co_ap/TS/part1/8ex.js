var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
console.log(car1);
console.log(car1.tax());
