const user = {
    name: 'Mike',
    age: 30,
};

// const user2 = Object.assign({},user);
// user2.name = 'Tom';

// console.log(user);
// console.log(user2);

const result = Object.keys(user);
const result2 = Object.values(user);
const result3 = Object.entries(user);
console.log(result);
console.log(result2);
console.log(result3);

let arr = [
    ['mon','월'],
    ['tue','화']
]

const test = Object.fromEntries(arr);
console.log(test);