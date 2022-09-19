let arr = [1,5,4,2,3];
let arr2 = ["a","c","b"];
let arr3 = [27,8,15,13];

arr.sort();
arr2.sort();
arr3.sort();

// arr3.sort((a,b) => {
//     return a-b;    //두 요소를 전달해서 크기를 비교해서 양수,0,음수인지만을 알려줌. a와 b를 비교해서 a가 작으면 앞으로 보냄.
// });


console.log(arr);
console.log(arr2);
console.log(arr3); // 문자열로 취급하기때문에