class Particle{
    constructor(game, x, y, speedX, speedY, size, trail){
        this.game = game;
        this.markForDeletion = false;
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.size = size;
        this.trail_size = trail;
    }

    update(){
        this.x -= this.speedX+this.trail_size;
        this.y -= this.speedY;
        this.size *= 0.95;
        
        if(this.size < 0.5){
            this.markForDeletion = true;
        }
    }

    draw(){
        this.game.cntx.beginPath();
        this.game.cntx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    }
}

export class DustParticle extends Particle{
    constructor(game, x, y, trail, color1, color2, color3, opacity, optionalSize=0){
        let size = Math.random()*10+10+optionalSize;
        let speedX = Math.random();
        let speedY = Math.random();
        super(game, x, y, speedX, speedY, size, trail);
        this.color = `rgba(${color1},${color2},${color3},${opacity})`;
    }

    draw(){
        super.draw();
        this.game.cntx.fillStyle = this.color;
        this.game.cntx.fill();
    }
}

export class FireParticle extends Particle{
    constructor(game, x, y, image){
        let size = Math.random()*80+50;
        let speedX = 1;
        let speedY = Math.sin(Math.random()*2-1);
        super(game, x, y, speedX, speedY, size, 5);
        this.image = new Image();
        this.image.src = image;   
    }

    draw(){
        this.game.cntx.drawImage(this.image, this.x, this.y, this.size, this.size);
    }
}

export class BonusLifeParticle extends Particle{
    constructor(game, x, y){
        let size = 15;
        let speedX = 0;
        let speedY = 1;
        super(game, x, y, speedX, speedY, size, 0);
      
    }

    update(){
        this.y += this.speedY;
        if(this.y >= this.game.height-(this.size*6)){
            this.markForDeletion = true;
        }
    }

    draw(){
        this.game.cntx.beginPath();
        this.game.cntx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        this.game.cntx.fillStyle = "orange";
        this.game.cntx.fill();
    }
}