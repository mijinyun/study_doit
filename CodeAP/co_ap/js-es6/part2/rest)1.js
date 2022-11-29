//1. spread ex1

var a = [1,2,3];
var b = '김밥';
var c = [...b, ...a];

console.log(c); //['김','밥',1,2,3]