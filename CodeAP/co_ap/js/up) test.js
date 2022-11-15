// 공인중개사 1차 시험은 개론, 민법 2개 과목이 있습니다.
// 과목마다 100점 만점이지만 두 과목 합해서 120점 이상이면 합격시켜줍니다. 
// 다만 한 과목이 40점 미만이면 과락으로 불합격됩니다.  
// 과목 점수 2개를 파라미터로 입력하면 합격인지 불합격인지 여부를 콘솔창에 출력하는 함수를 만들어보십시오. 

function test(a,b) {
    if ( ( a<40) || (b<40) ) {
        console.log("불합격, 과락입니다.");
    } else if ( a + b >= 120) {
        console.log("합격입니다.");
    } else {
        console.log("불합격입니다.")
    }
}


test(70,70);
test(30,100);
test(50,50);