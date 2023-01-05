
class parent {
    constructor(name){
        this.name = name;
        this.sayHi = function() { console.log('hello')}
    }

    sayHi(){
        console.log('hello')
    }
}

var child = new parent('Kim');
console.log(child);

