//문제1. 단어 순서를 바꾸는 해체분석기 제작
//이렇게 백틱기호를 이용하면 `바지20 양말100`이라는 멋진 문자가 완성됩니다. 
//하지만 쓰고보니 단어 순서가 약간 잘못된걸 발견합니다. 
//양말이라는 단어가 왼쪽, 바지라는 단어가 오른쪽에 와야합니다. 
//그래서 문자가 `양말20 바지100`으로 바뀌게 만들고 싶습니다. 

var pants = 20;
var socks = 100;
var cloth =  `바지${pants} 양말${socks}`;

const sep = (cloths, vars1, vars2) => {
    console.log(cloths[1]+ vars1 +  cloths[0]+ vars2);
}

sep`바지${pants} 양말${socks}`;