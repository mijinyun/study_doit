// constructor 제작

// var 학생1 = { name : 'Kim', age : 20 }
// var 학생2 = { name : 'Park', age : 21 }
// var 학생3 = { name : 'Lee', age : 22 }

function Student (name, age) {
    this.name = name;
    this.age = age;

    this.sayHi = function (){
        console.log('안녕 나는 ' + this.name + '이야.');
    }
}

var test1 = new Student('kim',20);
var test2 = new Student('park',21);
var test3 = new Student('lee',22);

console.log(test1.name);
console.log(test2.age);
test3.sayHi();