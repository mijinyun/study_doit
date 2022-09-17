// arr.reduce()

let arr = [1,2,3,4,5];

// 배열의 모든 수 합치기 : for, for of , forEach 사용하면 됨.

// let result = 0;

// arr.forEach(num => {
//     result += num;
// });

// console.log(result);

const result = arr.reduce((prev, cur) => {
    return prev + cur;
},0);

console.log(result);
