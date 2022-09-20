//전개구문
// arr1 을 [4,5,6,1,2,3]으로..

let arr1 = [1,2,3];
let arr2 = [4,5,6];

// 1. (내방식) 배열메소드 사용
// let result = arr2.concat(...arr1);
// console.log(result);


// 2. 전개구문 이용
arr1 = [...arr2, ...arr1];
console.log(arr1);