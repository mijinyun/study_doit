//(응용2)합격판독기에 0에서 100사이 숫자가 아닌걸 입력하면 장난치지 말라고 경고하기.

function test(num) {
    (num >=0 && num <=100) ? console.log("정상") : console.log("장난치지마세요.");
}

test(50);
test(150);
test(-30);