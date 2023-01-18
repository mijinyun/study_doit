interface MathObj {
    plus : (a:number,b:number) => number,
    minus : (a:number,b:number) => number;
}
let 연산 :MathObj = {
    plus(a,b){
        return a+b;
    },

    minus(a,b){
        return Math.abs(a - b);
    }
    
}
console.log(연산.plus(1,4));
console.log(연산.minus(1,4));