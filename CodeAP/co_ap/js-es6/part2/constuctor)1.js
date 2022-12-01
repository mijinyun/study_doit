// Q1. 쇼핑몰에 쓸 상품데이터를 오브젝트로 여러개 만들기
// Q2. 상품마다 부가세() 라는 내부 함수를 실행하면 상품가격 * 10% 만큼의 부가세금액이 출력되게 하기.

// var product1 = { name : 'shirts', price : 50000 };
// var product2 = { name : 'pants', price : 60000 };

function Product (name, price) {
    this.name = name;
    this.price = price;

    this.tax = function () {
        console.log( this.price * 0.1 + '원');
    }
}

var product1 = new Product('shirts',50000);
var product2 = new Product('pants',60000);

console.log(product1.name);
console.log(product2.price);
product1.tax();
