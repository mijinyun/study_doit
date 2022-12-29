// 1. Narrowing
function myfunc(x) {
    if (typeof x === 'string') {
        return x + '1';
    }
    else {
        return x + 1;
    }
}
myfunc(123);
function myfunc2(x) {
    var array = [];
    if (typeof x === 'number') {
        array[0] = x;
    }
}
// 2. assertion
function myfunc3(x) {
    var array = [];
    array[0] = x;
}
//----------------------------------------------------------------------//
// hw1. 숫자여러개를 array 자료에 저장해놨는데 가끔 '4', '5' 이런식의 문자타입의 숫자가 발견되고 있습니다. 이걸 클리닝해주는 함수가 필요
// 즉, (['1',2,'3']) => [1,2,3]
function cleaning(arr) {
    var cleanArr = [];
    arr.map(function (v) {
        if (typeof v === 'string') {
            cleanArr.push(parseInt(v));
        }
        else
            cleanArr.push(v);
    });
    console.log(cleanArr);
}
cleaning(['1', 2, '3']);
// hw2. aT, bT, cT 자료를 넣으면 과목중 맨 뒤의 1개를 return해주는 함수.
var aT = { subject: 'math' };
var bT = { subject: ['science', 'english'] };
var cT = { subject: ['science', 'art', 'korean'] };
function checkSub(obj) {
    var sub;
    if (typeof obj.subject === 'string') {
        sub = obj.subject;
    }
    else if (Array.isArray(obj.subject)) {
        sub = obj.subject[obj.subject.length - 1];
    }
    else {
        return '과목이 없습니다!';
    }
    return sub;
}
console.log(checkSub(aT));
console.log(checkSub(bT));
console.log(checkSub(cT));
