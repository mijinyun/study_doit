
// 1. literal type 예시

// 1. 가위 바위 보 중 1개 입력가능
// 2. 가위 바위 보 만 들어올 수 있는 array를 return

function game (a: '가위' | '바위' | '보' ) : ('가위'|'바위'|'보')[] {
    return ['가위']
}
game('가위');


// 2. literal type의 문제점
var 자료 = {
    name: 'kim' // 2) as 'kim'
} as const  // 3) 

function 내함수(a: 'kim'){

}

내함수(자료.name) // 1) 에러 발생 ( a: 'kim')은 'kim'이라는 타입을 지정한 것.