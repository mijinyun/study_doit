// forEach : array자료에 쓰이는 기본 함수. 데이터 갯수만큼 콜백함수 코드가 실행.

var pants = [28,30,32];

// pants.forEach(function(){
//     console.log('안녕');
// })

pants.forEach(function(a,i){
    console.log(a);
})