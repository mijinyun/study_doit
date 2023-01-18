class Word{

    num;
    str;

    constructor(...arr){

        let nums : number[] = [];
        let strs : string[] = [];

        arr.map((v) => {
            if(typeof v == 'string') {
                strs.push(v);
            } else if (typeof v == 'number') {
                nums.push(v);
            }
        })

        this.num = nums;
        this.str = strs;
    }
}

let word = new Word('kim',3,5,'park');

console.log(word.num);
console.log(word.str);