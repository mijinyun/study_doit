//금지어 : hi

function hasCola(str) {
    if(str.indexOf('hi') > -1) {
        console.log('금지어가 있습니다.');
    } else {
        console.log('통과');
    }
}

hasCola('hello everyone'); // -1
hasCola('hi everyone'); 
hasCola('hi'); //0


