let n = 'name';
let a = 'age';

const user = {
    [n] : 'Mike',
    [a] : 30,
    [1+4] : 5,
};

console.log(user);