var Canvas = document.getElementById('canvas');
var ctx = Canvas.getContext('2d');

Canvas.width = window.innerWidth - 100;
Canvas.height = window.innerHeight - 100;

var dino = {
    x : 10,
    y: 200,
    width : 50,
    height: 50,
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
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
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
}

var timer = 0;
var cactuses = [];

function 프레임마다실행할거() {
    requestAnimationFrame(프레임마다실행할거);
    timer++;

    ctx.clearRect(0,0, Canvas.width, Canvas.height);
    
    if (timer % 60 === 0) {
        var cactus = new Cactus();
        cactuses.push(cactus);
        
    }

    cactuses.forEach((cactus) => {
        cactus.x -= 3;
        cactus.draw();
    })
    dino.draw();

    if (window.event.keyCode == 32) {
        
    }
}
프레임마다실행할거();