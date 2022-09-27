const f1 = (callback) => {
    setTimeout(function() {
        console.log('1번 주문 완료');
        callback();
    },1000);
};

const f2 = (callback) => {
    setTimeout(function() {
        console.log('2번 주문 완료');
        callback();
    },3000);
};

const f3 = (callback) => {
    setTimeout(function() {
        console.log('3번 주문 완료');
        callback();
    },2000);
};

console.log('시작')
f1(function() { //f1,f2,f3 전부다 (callback) => 하면서 콜백함수를 받으니까 내부에 함수가 있어야하는 거임.
    f2(function() {
        f3(function(){
            console.log('끝');
        });
    });
});