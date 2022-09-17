//arr.map()

let userList = [
    {name :'Mike', age: 30},
    {name : 'Jane', age : 27},
    {name : 'Tom', age : 10},
];

let newUserList = userList.map((user,index) => {
    return Object.assign({},user,{
        id : index + 1, 
        isAdult: user.age > 19,
    });
});

console.log(newUserList);
console.log(userList);