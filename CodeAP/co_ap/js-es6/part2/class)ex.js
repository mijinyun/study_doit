// 1. class 구조  ---ok
// var 강아지1 = { type : '말티즈', color : 'white' };
// var 강아지2 = { type : '진돗개', color : 'brown' }; 

class Dog {
    constructor(type, color) {
        this.type = type,
        this.color = color
    }
    nextAge() {
        this instanceof Cat ? this.age++ : console.log('에러!');
    }
}

var dog1 = new Dog('말티즈','white');
var dog2 = new Dog('진돗개','brown');



// 2.class 구조 (1. 참고) ---ok

class Cat extends Dog {
    constructor(type,color,age){
        super(type,color);
        this.age = age;
    }
}

var cat1 = new Cat('코숏','white',5);
var cat2 = new Cat('러시안블루','brown',2);

console.log(cat1);
console.log(cat2);


// 3. object들에 기능 추가 ---ok
console.log(dog1.nextAge());
cat1.nextAge();
console.log(cat1);


// 4. get /set  ---ok

class Unit {
    constructor(공격력, 체력){
        this.공격력 = 5;
        this.체력 = 100;
    }
    get battlePoint(){
        return this.공격력 + this.체력;
    }
    set heal(체력){
        this.체력 = 체력 + 50;
    }
}

var test = new Unit();
test.heal = 150;
console.log(test);
console.log(test.battlePoint);


// 5. get /set 2  --- ok

var data = {
    odd : [],
    even : [],

    set settingArr(arr) {
        arr.forEach((v) => {
            v % 2 == 0 ? this.even.push(v) : this.odd.push(v);
        })
    },
    
    get gettingArr() {
        return { odd : this.odd, even : this.even };
    }
}

data.settingArr = [1,2,3,4,5];
console.log(data);
console.log(data.gettingArr);
