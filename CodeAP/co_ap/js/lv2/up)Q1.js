// 1. 이자율 게산하기
// 철수는 은행에 예금을 하러 갔는데 예금 금액에 따라 이율이 달라지는 것을 보고 크게 당황했습니다.
// 첫 예금액이 5만원 미만이면 이율이 연 15퍼센트,
// 첫 예금액이 5만원 이상이면 이율이 연 20퍼센트라고 합니다.
// 그래서 민준이는
// (1) 변수에 예금액을 넣으면
// (2) 2년 후의 총 예금액을 자동으로 콘솔창에 출력해주는 기능을 자바스크립트로 만들려고하는데 어떻게 코드를 짜면 될까요? 

function Q1(num) {
    var savings = num;
    var f_savings = 0;

    if ( savings > 50000) {
        f_savings = savings * 1.20 * 1.20;
        console.log(Math.ceil(f_savings) + "원");
    } else {
        f_savings = savings * 1.15 * 1.15;
        console.log(Math.ceil(f_savings) + "원");
    }
}

Q1(60000);
Q1(10000)