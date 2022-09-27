const f1 = () => {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res('1번 주문 완료');
        },1000);
    });
};

const f2 = (message) => {
    console.log(message);
    return new Promise((res,rej) => {
        setTimeout(() => {
            // res('2번 주문 완료');
            rej(new Error('xx'));
        },3000);
    });
};

const f3 = (message) => {
    console.log(message);
    return new Promise((res,rej) => {
        setTimeout(() => {
            res('3번 주문 완료');
        },2000);
    });
};

// 이렇게 프로미스가 연결되는 것을 프로미스 체이닝(Promises chaining)이라함.
console.log('시작');
// //f1을 실행. f1은 프로미스를 반환하고 resolve하면서 실행하면서 넘겨준 값을 f2에게 넘겨줌
f1()
.then(res => f2(res))
.then(res => f3(res))
.then(res => console.log(res))
.catch(console.log)
.finally(()=> {
    console.log('끝')
})
// 가져온 데이터 순으로 화면을 그릴 순 있다.
// 만약 f1~f3중 rej를 실행할경우 중간에 실행이 멈추게 된다. 




//Promise.all (배열로 받는다.) 한꺼번에 동시에 시작 하는 것!
//하나의 정보라도 누락되면 페이지를 보여주면 안되는 경우에 사용
// 그렇기 때문에 만약 f1~f3중 rej를 실행할경우 애초에 실행이 되지않는다. 
Promise.all([f1(), f2(), f3()])
.then(res => {
    console.log(res);
});
//f1~f3 세작업이 모두 완료되어야 then이 됨.


//Promise.rece
// all은 모든작업이 완료될때까지 기다리지만, race는 하나라도 1등으로 완료되면 끝이남.
Promise.race([f1(), f2(), f3()])
.then(res => {
    console.log(res);
});