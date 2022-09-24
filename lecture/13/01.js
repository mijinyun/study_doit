// const bmw = {
//     color: 'red',
//     wheels : 4,
//     navigator : 1,
//     drive() {
//         console.log('drive..');
//     },
// };

// const benz = {
//     color: 'black',
//     wheels : 4, 
//     drive() {
//         console.log('drive..');
//     },
// };

// const audi = {
//     color: 'blue',
//     wheels : 4, 
//     drive() {
//         console.log('drive..');
//     },
// };

// ----------------------------- 위코드는

const car = {
    wheels : 4,
    drive() {
        console.log('drive..');
    },

}

const bmw = {
    color: 'red',
    navigator : 1,
};

const benz = {
    color: 'black',
};

const audi = {
    color: 'blue',
};

// car가 bmw의 proto타입이 되는것. bmw는 car의 상속을 받는것.
bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

const x5 = {
    color: 'white',
    name: 'x5',
};

x5.__proto__ = bmw;

for (p in x5) {
    // console.log(p);

    if (x5.hasOwnProperty(p)) {
        console.log('o',p);
    } else {
        console.log('x',p);
    }


}
