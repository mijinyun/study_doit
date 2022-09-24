const Bmw = function (color) {
    this.color = color;
};

Bmw.prototype = {
    wheels : 4,
    drive : function () {
        console.log('drive..');
    }
}

const x5 = new Bmw('red');

console.log(x5.wheels);
console.log(x5.drive());

console.log(x5 instanceof Bmw);