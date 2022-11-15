//  2. 369 게임 업그레이드
// 3의 배수에서 박수 치는 게임
// 9의 배수에서 박수 두번 치기

function game1 (num) {
    if ( num % 9 == 0 ) {
        console.log("박수 박수~~");
    } else if ( num % 3 == 0 ) {
        console.log("박수");
    } else {
        console.log("통과! 박수안쳐!");
    }
}

game1(3);
game1(7);
game1(9);
