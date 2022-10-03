// async function getName() {
//     return 'Mike';
// }

// getName().then((name) => {
//     console.log(name);
// })


// 2. 프로미스 반환

// async function getName() {
//     return Promise.resolve('Mike');
// }

// getName().then((name) => {
//     console.log(name);
// })


// 3. reject 반환
async function getName() {
    throw new Error('err..');
}

getName().catch((err) => {
    console.log(err);  
});