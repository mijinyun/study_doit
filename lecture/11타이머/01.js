//setInterval , clearInterval

let num = 0;

function showTime() {
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
    if (num > 5) {
    clearInterval(tId); }
}

const tId = setInterval(showTime,1000);
