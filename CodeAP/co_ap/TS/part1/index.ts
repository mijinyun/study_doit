let img = document.querySelector('#image');
let links = document.querySelectorAll('.naver');

let btn = document.getElementById('button');
btn?.addEventListener('click', function(){
    if (img instanceof HTMLImageElement){
        img.src="new.jpg";
    }

    links.forEach((link) => {
        if (link instanceof HTMLAnchorElement){
            link.href = "https://kakao.com";
        }
    })
})
