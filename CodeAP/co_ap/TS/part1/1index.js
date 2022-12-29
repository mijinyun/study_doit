// 1. 간단한 변수 타입지정
var userName = ['kim', 'park'];
var userAge = { age: 20 };
// 2. 다양한 타입이 들어올 수 있는 union type
var example = 'kim';
var ex2 = 123;
//4. 함수 타입지정
function fx(x) {
    return x * 2;
}
var john = [123, true];
var choi = { name: 'kim' };
// 7. class 타입지정
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
