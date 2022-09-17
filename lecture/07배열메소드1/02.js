// find / findIndex

let arr = [1,2,3,4,5];

const result = arr.find((item) => {
    return item % 2 === 0;
})

console.log(result);