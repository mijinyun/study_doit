//object에 타입지정할때 interface도 있음

// type Square = { color : string , width : number };
interface Square { color : string , width : number }; // type alias랑 비슷
let square :Square = { color : 'red' , width : 100}


//--------------------------------------------------------------//
interface Student { name : string };
interface Teacher extends Student { age: number};

let student :Student = { name : 'kim '};
let teacher :Teacher = { name : 'kim', age : 20}

//--------------------------------------------------------------//
type Animal9 = { name : string }
type Cat = { age : number } & Animal9 