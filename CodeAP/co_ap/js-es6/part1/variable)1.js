//1. 
test();// 에러
function test() {
    console.log(aa); 
    let aa = 'Hello';
    // let변수는 hosting되지만 undefined를 할당하지 않음. 
}


//2. 
test2(); //에러
var test2 = function() {
    //function 키워드 대신 변수만드는 것처럼 함수를 선언과 할당하고 있음.
    // 역시나 hosting은 변수의 선언부분만 되기 때문에 test2만 선언이 된 것!
    // 그래서 test2()를 할 경우, 함수가 아닌 변수에다가 소과로호를 붙였기 때문에 에러 발생!!
    console.log(bb);
    var bb = 'Hello!';
}


//3.
let a = 1;
var test3 = function() {
    a = 2;
}
console.log(a); //1

//4. 
let c = 1;
var d = 2;
window.c = 3;
window.d = 4;
console.log(c + d); //5
// c는 let변수로 1을 할당하고 글로버 변수로 3을 할당했음.
// 이러할 경우 조금 더 범위가 작고 가까운 1을 참조해서 사용하게 된다.