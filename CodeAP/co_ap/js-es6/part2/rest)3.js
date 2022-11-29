//5. array ex
// 파라미터로 자료들을 입력하면 그걸 그대로 array를 만들어주는 함수를 만들고 싶습니다. 

function arr(...rest) {
    return rest;
}

var newArray = arr(1,2,3,4,5);
console.log(newArray); // [1,2,3,4,5]