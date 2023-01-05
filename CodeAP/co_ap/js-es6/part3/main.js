var Canvas = document.getElementById('canvas');
var ctx = Canvas.getContext('2d');

Canvas.width = window.innerWidth - 100;
Canvas.height = window.innerHeight - 100;

var cactusImg = new Image();
var dinoImg = new Image();

cactusImg.src = 'cactus.png';
dinoImg.src = 'dinosaur.png';

var dino = {
    x : 10,
    y: 200,
    width : 50,
    height: 50,
    draw(){
        ctx.fillStyle = 'green';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(dinoImg, this.x, this.y,50,50);
    }
}

// dino.draw();

class Cactus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'red';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(cactusImg, this.x, this.y,50,50  );
    }
    
}

var timer = 0;
var cactuses = [];
var jumpTimer = 0;
var animation;

function 프레임마다실행할거() {
    animation = requestAnimationFrame(프레임마다실행할거);
    timer++;

    ctx.clearRect(0,0, Canvas.width, Canvas.height);
    
    if (timer % 200 === 0) {
        var cactus = new Cactus();
        cactuses.push(cactus);
        
    }

    cactuses.forEach((cactus,i,o) => {
        //x좌표가 0미만이면 제거
        if (cactus.x < 0) {
            o.splice(i,1);
        }
        cactus.x--;
        collision(dino,cactus);
        cactus.draw();
    })

    if (jump) { 
        dino.y--;
        jumpTimer++;
    } 
    if (!jump){
        if(dino.y < 200) {
            dino.y++;
        }
    } 
    
    if (jumpTimer >100) {
        jump = false;
        jumpTimer = 0;
    }
    dino.draw();
}
프레임마다실행할거();

var jump = false;
document.addEventListener('keydown',(e) => {
    if (e.code === 'Space') {
        jump = true;
    }
})

function collision (dino, cactus) {
    var diff_X = cactus.x - (dino.x + dino.width);
    var diff_Y = cactus.y - (dino.y + dino.height);

    if (diff_X < 0 && diff_Y < 0) {
        ctx.clearRect(0,0, Canvas.width, Canvas.height);
        cancelAnimationFrame(animation);
    }
}