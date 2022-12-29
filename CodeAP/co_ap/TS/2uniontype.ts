// 1. union type
let member : number | string = 'kim';
let members : (number | string)[]  = [ 1,'2',3];
let obj : { a : string | number} = { a : 123 };

// 2. any type
let anytest : any;
anytest = 123;
anytest = true;

// 3. unknown type
let unknowntest : unknown;
unknowntest = 123;
unknowntest = [];

let unknowntest2 : unknown;
// unknowntest2 - 1  //에러발생


//--------------------------------------------------------------//
// hw1. 변수 4개에 타입 지정 -- ok

let user : string = 'kim';
let age : number | undefined = undefined;
let married : boolean = false;
let jin : (string | number | undefined | boolean)[] = [user,age,married];


// hw2. school라는 변수에 타입지정 -- ok
let school :{
    score:(number|boolean)[], 
    teacher:string, 
    friend:string|string[]
} 
= {
    score : [100,97,84],
    teacher: 'Phil',
    friend: 'John'
}

school.score[4] = false;
school.friend = ['Lee', school.teacher]