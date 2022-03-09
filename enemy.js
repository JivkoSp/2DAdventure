class EnemyImage{
    constructor(image, width, height){
        this.image = new Image();
        this.image.src = image;
        this.width = width;
        this.height = height;
    }
}

class Enemy{
    constructor(game, enemyImage, frames){
        this.game = game;
        this.enemyImage = enemyImage;
        this.speed = Math.random()*0.4+0.8;
        this.gameWith = this.enemyImage.width/3.5;
        this.gameHeight = this.enemyImage.height;
        this.markForDeletion = false;
        this.x = game.width;
        this.y = Math.random()*(game.height/2);    
        this.frames = frames;
        this.frame = 0;
    }

    update(deltaTime){
        
        this.frame != 0 && this.frame % this.frames === 0 ? this.frame = 0 : this.frame+=1;

        this.x-=this.speed*deltaTime;
            if(this.x < 0-this.gameWith){
                this.markForDeletion = true;
            }
    }

    draw(){
        this.game.cntx.drawImage(this.enemyImage.image, this.frame*(this.enemyImage.width/this.frames), 0, 
        this.enemyImage.width/this.frames, this.enemyImage.height, this.x, this.y, this.gameWith, this.gameHeight);
    }
}

export class FlyEnemy extends Enemy{
    constructor(game, frames){
        super(game, new EnemyImage("enemy_fly.png", 360, 44), frames);
        this.angle = 0;
        this.curve = Math.random()*10;
    }

    update(deltaTime){
        super.update(deltaTime);
        this.y += Math.sin(this.angle) * this.curve;
        this.angle+=0.1;
    }
}
