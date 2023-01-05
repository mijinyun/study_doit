
class grandfather {
    constructor(name){
        this.firstname = 'Kim';
        this.name = name;
    }
    sayHi(){
        console.log('안녕');
    }
}

// var grandfather1 = new grandfather('만덕');
// console.log(grandfather1);

class father extends grandfather {
    constructor() {
        super(name);
        this.age = 50;
    }
}

var father1 = new father('만수');
