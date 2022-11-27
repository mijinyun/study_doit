
//1.반복문을 돌리면 5이라는 숫자가 1초미다 출력됨.
for (var i = 0; i < 5; i++) { 
    setTimeout(function() { console.log(i); }, i*1000 ); 
  }
// 반복문을 해석한 후에 1초가 지나면 setTimeout내의 콘솔이 발동되는 것.
// 그때 i값은 5밖에 없기때문에 콘솔창에는 5만 출력되는 것.


//1.해결
for (let i = 1; i < 6; i++) { 
    setTimeout(function() { console.log(i); }, i*1000 ); 
  }
//let 변수는 범위가 중괄호, for반복문도 범위가 중괄호
// 즉, i값이 for 반복문 내에 남아있기 때문에 그것을 가져다 씀. 그래서 i는 0,1,2,3,4가 출력됨.