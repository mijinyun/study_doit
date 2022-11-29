//8. 데이터마이닝 기능 만들기
// 알파벳들의 출현 갯수 세어주는 함수

function checkNum(txt) {
    let obj = {};
    
    [...txt].sort().map((v) => {
        if (obj[v] == undefined ) obj[v] = 1;
        else obj[v] += 1;
    })
    console.log(obj);
}

checkNum('aacbbb');