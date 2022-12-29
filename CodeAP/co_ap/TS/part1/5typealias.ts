// 1. type 변수화
type Animal = string | number | undefined;
let 동물 : Animal = 'kim';

type Person = { name : string , age : number };
let 사람 : Person = { name: 'kim', age: 20};


// 2. object 수정 경고 (readonly)
type GF = {
    readonly name : string
}
const gf :GF = {
    name : '엠버'
}

// 3-1. union type으로 합치기(extend하기)
type Name = string;
type Age = number;
type Person2 = Name | Age;

// 3-2. &연산자로 object 타입 합치기
type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;

let position : NewType = { x: 10 , y : 20 };


//-------------------------------------------------------------------//

// hw1. object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면?

type PositionZ = { x: number };
type NewType2 = PositionX & PositionZ;

let position2 : NewType2 = { x: 123 }; 
// 내 해답 ) 만약 PositionZ가 x: string일 경우, number와 string을 만족하는건 이세상에 없으므로 extend하였을 때, never가 뜨는 것이 당연하다!!!


// hw2. type alias
// 1) object 자료형 타입  
// 2) color라는 속성을 가질수도 있으며 항상 문자가 들어와야한다. 
// 3) size라는 속성이 있어야하며 항상 숫자
// 4) position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array자료


type ObjType = {
    color? : string,
    size: number,
    readonly position: number[]
}

let objtest :ObjType = {
    size: 1234,
    position: [1,2,3,4]
}



// hw3. 
// ex){ name : 'kim', phone : 123, email : 'abc@naver.com' } 
// object안에 있는 이름, 전화번호 , 이메일 속성이 옳은 타입인지 검사하는 type alias

type UserCheck = {
    name: string,
    phone: number,
    email?: string 
}


// hw4.
// 1) 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias
// 2) 미성년자 여부 속성은 true/false만
// 3) hw3활용

type Adult = {
    adult : boolean
}
type NewUser = UserCheck & Adult;
let testUser : NewUser = { name: '유리', phone: 123456, adult: true};