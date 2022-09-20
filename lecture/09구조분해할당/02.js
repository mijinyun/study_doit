function User(name, age, ...skills) {
    this.name = name;
    this.age = age;
    this.skill = skills;
}

const user1 = new User('Mike',30,'html','css');
const user2 = new User('Tom',20,'JS','React');
const user3 = new User('Jane',10,'English');

console.log(user1);
console.log(user2);
console.log(user3);