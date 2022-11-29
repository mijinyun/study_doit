//문제 2. 바지가 0개면 '바지다팔렸어요'라는 문자를 대신 표시해주고 싶습니다. 

var pants = 20;
var pants2 = 0;
var socks = 100;

const sep = (cloths, var1, var2) => {
    if (var1 == 0) {
        console.log('바지다팔렸어요' +  cloths[1] + var2);
    } else {
        console.log(cloths[0] + var1 +  cloths[1] + var2);
    }
}

sep`바지${pants} 양말${socks}`;

sep`바지${pants2} 양말${socks}`;
