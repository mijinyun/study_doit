var img = document.querySelector('#image');
var links = document.querySelectorAll('.naver');
var btn = document.getElementById('button');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
    if (img instanceof HTMLImageElement) {
        img.src = "new.jpg";
    }
    links.forEach(function (link) {
        if (link instanceof HTMLAnchorElement) {
            link.href = "https://kakao.com";
        }
    });
});
