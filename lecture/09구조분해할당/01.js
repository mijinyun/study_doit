// 나머지 매개변수
// 전달 받은 모든 수를 더해야함

function add(...numbers) {
    
    //1. forEach 방식

    let result = 0;
    numbers.forEach((num) => ( result += num ));
    console.log(result);

    //2. reduce 방식
    // let result = numbers.reduce((prev,cur) => prev += cur);

}



add(1,2,3);
add(1,2,3,4,5,6,7,8,9,10);

