
// 1. 간단한 변수 타입지정
let userName :string[] = ['kim','park'];
let userAge : { age : number } = { age : 20 }


// 2. 다양한 타입이 들어올 수 있는 union type
let example : string | number = 'kim';


// 3. 타입 지정이 길어질 경우 변수에 담기.
type Mytype = string | number;
let ex2 : Mytype = 123;


//4. 함수 타입지정
function fx(x :number) :number {
    return x * 2;
}


//5. array에 쓸 수 있는 tuple 타입
type Member = [number, boolean];
let john:Member = [123,true];


//6. object
type Member2 = { name : string }
// 6-2. 모든 object 속성
type Member3 = { [key: string] : string }
let choi:Member2 = { name : 'kim' } 


// 7. class 타입지정
class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}