// 응용1.
// 1.2를 10번 곱하려면 코드를 어떻게 짜야될까요? 
// 자바스크립트에는 ** 라는 거듭제곱 연산자도 있다.

var savings = 60000;
var f_savings = 0;

// f_savings = savings * 1.20 * 1.20;
f_savings = savings * Math.pow(1.20,10);
// f_savings = savings * (1.2 ** 10);

console.log(f_savings);