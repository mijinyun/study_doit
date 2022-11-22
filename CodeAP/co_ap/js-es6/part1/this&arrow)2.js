// 2. 오브젝트 내의 데이터를 전부 더해주는 메소드만들기
//전부더하기()라고 쓰면 자료.data 안에 있는 모든 숫자를 더해서 콘솔창에 출력해주어야합니다. 
//조건) obj라는 object 중괄호 {} 내에 코드 작성 금지

var obj = {
    data: [1,2,3,4,5]
}

obj.sum = () => {
    let plus = 0;
    obj.data.forEach((val) => {
        plus += val;
    })
    console.log(plus);
}

obj.sum();