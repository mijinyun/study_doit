function makeCounter() {
    let num = 0;
    return function() {
        return num++;
    };
    
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());

