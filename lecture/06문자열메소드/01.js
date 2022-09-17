let list = [
    '01. 들어가며',
    '02. JS의 역사',
    '03. 자료형',
    '04. 함수',
    '05. 배열',
];

let newList = [];

for ( let i = 0; i <list.length; i++ ) {
    newList.push(list[i].slice(4));
}

console.log(newList);