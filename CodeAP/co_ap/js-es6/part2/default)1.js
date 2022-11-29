//3. default 파라미터 ex1

function test(a=5, b = a*2) {
    console.log(a+b);
    return 10
}

test(3); //9