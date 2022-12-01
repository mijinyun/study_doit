// remove3()함수를 이용하면 모든 array 내의 3이라는 모든 숫자 자료들이 삭제 되도록.

var arr = [1,2,3];
var arr2 = [1,2,3,4,5];
Array.prototype.remove3 = function () {
    for (let i=0; i<this.length; i++){
        if (this[i] == 3 ) {
            this.splice(i,1);
        }
    }
};

arr.remove3();
arr2.remove3();
console.log(arr); // [1,2]
console.log(arr2); // [1,2,4,5]