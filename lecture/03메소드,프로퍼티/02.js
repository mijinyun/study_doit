function makeObj(key,val){
    return {
        [key] : val
    }
}

const obj = makeObj('나이', 33);

console.log(obj);