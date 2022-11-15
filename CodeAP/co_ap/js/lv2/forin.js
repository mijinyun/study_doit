// for in: object 자료 갯수만큼 반복문을 돌리고 싶을 때 사용.

var obj = { name : 'kim', age: 20}

for (var key in obj) {
    console.log(key);
    console.log("val:" + obj[key]);
}