var Word = /** @class */ (function () {
    function Word() {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        var nums = [];
        var strs = [];
        arr.map(function (v) {
            if (typeof v == 'string') {
                strs.push(v);
            }
            else if (typeof v == 'number') {
                nums.push(v);
            }
        });
        this.num = nums;
        this.str = strs;
    }
    return Word;
}());
var word = new Word('kim', 3, 5, 'park');
console.log(word.num);
console.log(word.str);
