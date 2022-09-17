//금지어 : hi
// includes 사용
// 문자가 있으면 true
// 없으면 false 반환
// 굳이 indexOf를 쓰지않고 문자가 있는지 없는지 판단할 때 좋음

function hasCola(str) { 
    if(str.includes('hi')) {
        console.log('금지어가 있습니다.');
    } else {
        console.log('통과');
    }
}

hasCola('hello everyone'); 
hasCola('hi everyone'); 
hasCola('hi'); 
