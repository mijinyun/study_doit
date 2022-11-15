//  (응용1) 369 게임
// 3,6,9로 끝나는 숫자라면 "박수"를 출력

function game2 (num) {
    let number = String(num);
    // console.log(typeof number);
    // console.log(number[number.length-1]);

    if ( number[number.length-1] % 3 == 0) {
        console.log("박수");
    } else {
        console.log("박수 안쳐용");
    }
}

game2(3);
game2(13);
game2(15);
game2(29);