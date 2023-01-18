class Person8{
    // data= 0; // class 필드값 (constructor와 똑같은 역할)

    name :string; //name이라는 필드값을 지정해줘야 constructor에서 가능
    constructor(a){
        this.name = a;
    }

    함수(a :string){
        console.log('안녕' + a);
    }
}


let 사람1 = new Person8('kim');
let 사람2 = new Person8('park');

사람1.함수('하세요.');
