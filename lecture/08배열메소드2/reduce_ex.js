const sum = [1,2,3,4];

const result = sum.reduce((prev,cur) => {
	return prev + cur;
},0);

console.log(result);