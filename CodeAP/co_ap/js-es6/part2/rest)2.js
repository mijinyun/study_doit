//2. spread ex2

var a = [1,2,3];
var b = ['you', 'are'];
var c = function(a,b) {
    console.log([[...a],...[...b]][1]) // [[1,2,3],you,are][1]
}

c(a,b); // you

