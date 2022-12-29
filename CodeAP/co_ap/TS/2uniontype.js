// 1. union type
var member = 'kim';
var members = [1, '2', 3];
var obj = { a: 123 };
// 2. any type
var anytest;
anytest = 123;
anytest = true;
// 3. unknown type
var unknowntest;
unknowntest = 123;
unknowntest = [];
var unknowntest2;
// unknowntest2 - 1  //에러발생
//--------------------------------------------------------------//
// hw1. 변수 4개에 타입 지정 -- ok
var user = 'kim';
var age = undefined;
var married = false;
var jin = [user, age, married];
// hw2. school라는 변수에 타입지정 -- ok
var school = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
school.score[4] = false;
school.friend = ['Lee', school.teacher];
