// const minNum = Math.min(3,10,1,6,4);
// const minNum2 = Math.min([3,10,1,6,4]); //배열을 풀어서 넣어야함. 안풀면 NaN!
// const maxNum = Math.max(3,10,1,6,4);


// console.log(minNum);
// console.log(minNum2);
// console.log(maxNum);


// -------------------------------------------------

const nums = [3,10,1,6,4];
const minNum = Math.min.apply(null, nums); 
// 여기서 null은 this로 사용될 값인데 Math.min이나 Math.max는 this값이 필요하지 않아서 null을 써놓은 것. 
const maxNum = Math.max.apply(null, nums);
// 두번째 매개변수로 배열을 전달하면 그 요소들을 차례대로 인수로 사용함. 
// 위코드는 = Math.max.apply(null, [3,10,1,6,4])
const maxNum2 = Math.max.apply(null, ...nums);
// 위코드는 = Math.min.apply(null,3,10,1,6,4)와 같다. 
console.log(minNum);
console.log(maxNum);