//ex1
interface Product { brand :string, serialNumber :number, model : string[]}
let product :Product = { brand : 'Samsung', serialNumber: 1360, model : ['TV' ,'phone']}

//ex2
interface Cart { product: string, price :number }
let cart :Cart[] = [ {product : '청소기', price: 7000}, { product: '삼다수', price: 800}];

//ex3
interface Card extends Cart { card : boolean};
