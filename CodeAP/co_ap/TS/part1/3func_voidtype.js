function fx1(x) {
    return x * 2;
}
function fx2(x) {
    1 + 1;
}
function fx3(x) {
}
// fx2(); //파라미터 없으므로 에러 발생
fx2(2);
fx3(); //?연산자를 사용하여 에러 발생 해결
//---------------------------------------------//
// hw1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력,아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수 --ok
function nameValue(x) {
    x ? console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(x)) : console.log('이름이 없습니다.');
}
nameValue();
nameValue('홍길동');
// hw2. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수
function valueCheck(x) {
    return x.toString().length;
}
valueCheck('245');
valueCheck(9567);
// hw3. 결혼 가능 확률을 알려주는 함수
function marry(income, house, attr) {
    var score = 0;
    score += income;
    if (house)
        score += 500;
    if (attr == '상')
        score += 100;
    if (income >= 600)
        console.log('결혼가능');
}
marry(700, false, '중');
marry(100, false, '상');
