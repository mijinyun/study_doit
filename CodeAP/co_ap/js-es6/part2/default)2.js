//4. default 파라미터 ex2

function test(a = 5, b = a*2) {
    console.log(a+b);
}

test(undefined,undefined); //15