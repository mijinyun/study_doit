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
            res('2번 주문 완료');
            // rej(new Error('err..'));
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

// 1. 기존 프로미스 방식
// f1()
// .then(res => f2(res))
// .then(res => f3(res))
// .then(res => console.log(res))
// .catch(console.log)
// .finally(()=> {
//     console.log('끝')
// })


// 2. async, await 방식
// async function oreder() {
//     try {
//     const result1 = await f1();
//     const result2 = await f2(result1);
//     const result3 = await f3(result2);
//     console.log(result3);
//     } catch (e) {
//         console.log(e);
//     }
// console.log('종료');
// }
// oreder();


// 3. promise.all 사용
async function oreder() {
    try {
    const result = await Promise.all([f1(),f2(),f3()]);
    console.log(result);
    } catch (e) {
        console.log(e);
    }
console.log('종료');
}
oreder();
