const Bmw = function (color){
    const c = color;
    this.getColor = function () { //이렇게 셋팅할경우 초기에 설정한 컬러값을 읽을수만 있고 변경할 수는 없다!!!! getColor함수는 생성될 당시의 context를 기억하는 것. 
        console.log(c);
    };
};

const x5 = new Bmw('red');