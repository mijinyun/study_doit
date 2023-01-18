var Person8 = /** @class */ (function () {
    function Person8(a) {
        this.name = a;
    }
    Person8.prototype.함수 = function (a) {
        console.log('안녕' + a);
    };
    return Person8;
}());
var 사람1 = new Person8('kim');
var 사람2 = new Person8('park');
사람1.함수('하세요.');
