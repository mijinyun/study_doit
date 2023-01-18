var 연산 = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return Math.abs(a - b);
    }
};
console.log(연산.plus(1, 4));
console.log(연산.minus(1, 4));
