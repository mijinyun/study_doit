var person = {
    name: 'Park',
    age: 30,
    get nextAge() {
        return this.age + 1;
    },
    set setAge(age){
        this.age = parseInt(age);
    }
}

person.setAge = '20';
console.log(person);
console.log(person.nextAge);


///------------------------------------------///

class Person2 {
    constructor() {
        this.name = 'Park';
        this.age = 20;
    }

    get getNextAge(){
        return this.age + 1
    }

}

var person1 = new Person2();