var functypetest = function (a) {
    return 10;
};
var memberInfo = {
    name: 'kim',
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () { }
};
memberInfo.plusOne(3);
var cutZero = function (a) {
    if (a[0] == '0')
        return a.substring(1);
};
console.log(cutZero('023'));
var removeDash = function (a) {
    var result = a.replace(/-/g, '');
    return parseFloat(result);
};
console.log(removeDash('0-9-7'));
var totalFunc = function (x, y, z) {
    var result = y(x);
    return z(result);
};
console.log(totalFunc('010-1111-2222', cutZero, removeDash));
