class EnemyImage{
    constructor(image, width, height){
        this.image = new Image();
        this.image.src = image;
        this.width = width;
        this.height = height;
    }
}

class Enemy{
    constructor(game, enemyImage, frames, enemyImages){
        this.game = game;
        this.markForDeletion = false;
        this.x = game.width;
        this.y = Math.random()*(game.height/2);
        
        if(enemyImages != null){
            this.frames = enemyImages.length-1;
            this.enemyImages = enemyImages;
        }
        else{
            this.frames = frames;
            this.enemyImage = enemyImage;
            this.speed = Math.random()*0.4+0.8;
            this.gameWith = this.enemyImage.width/3.5;
            this.gameHeight = this.enemyImage.height;
        }

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
        this.hitPower = 0.5;
        this.hitPoints = 2;
    }

    update(deltaTime){
        super.update(deltaTime);
        this.y += Math.sin(this.angle) * this.curve;
        this.angle+=0.1;
    }
}

export class RavenEnemy extends Enemy{
    constructor(game, frames){
        super(game, new EnemyImage("raven.png", 271, 194), frames);
        this.gameWith = this.enemyImage.width/2.5;
        this.gameHeight = this.enemyImage.height/2.5;
        this.angle = 0;
        this.curve = Math.random()*10;
        this.hitPower = 1;
        this.hitPoints = 3;
    }

    update(deltaTime){
        super.update(deltaTime);
        this.y += Math.sin(this.angle) * this.curve;
        this.angle+=0.1;
    }

    draw(){
        this.game.cntx.drawImage(this.enemyImage.image, this.frame*(this.enemyImage.width), 0, 
        this.enemyImage.width, this.enemyImage.height, this.x, this.y, this.gameWith, this.gameHeight);
    }
}

export class GreenMonsterEnemy extends Enemy{
    constructor(game){
        const enemyImages = [
            new EnemyImage("Transparent_PNG/skeleton-walking_0.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_1.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_2.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_3.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_4.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_5.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_6.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_7.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_8.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_9.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_10.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_11.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_12.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_13.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_14.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_15.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_16.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_17.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_18.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_19.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_20.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_21.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_22.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_23.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_24.png", 451, 508),
            new EnemyImage("Transparent_PNG/skeleton-walking_25.png", 451, 508)
        ];

        super(game, null, null, enemyImages);
        this.speed = Math.random()*1+0.4;
        this.gameWith = 451/3.5;
        this.gameHeight = 508/3.5;
        this.y = game.height-(this.gameHeight+40);
        this.hitPower = 1;
        this.hitPoints = 2.5;
    }

   draw(){

    this.game.cntx.drawImage(this.enemyImages[this.frame].image, 0, 0, 
    451, 508, this.x, this.y, this.gameWith, this.gameHeight);
   }
}

export class GreenMonsterEnemyTwo extends Enemy{
    constructor(game){
        const enemyImages = [
            new EnemyImage("GreenMonster2/skeleton-02_walking_00.png", 946, 821),
            new EnemyImage("GreenMonster2/skeleton-02_walking_01.png", 946, 821),
            new EnemyImage("GreenMonster2/skeleton-02_walking_02.png", 946, 821),
            new EnemyImage("GreenMonster2/skeleton-02_walking_03.png", 946, 821),
            new EnemyImage("GreenMonster2/skeleton-02_walking_04.png", 946, 821),
            new EnemyImage("GreenMonster2/skeleton-02_walking_05.png", 946, 821),
            new EnemyImage("GreenMonster2/skeleton-02_walking_06.png", 946, 821),
            new EnemyImage("GreenMonster2/skeleton-02_walking_07.png", 946, 821),
            new EnemyImage("GreenMonster2/skeleton-02_walking_08.png", 946, 821),
            new EnemyImage("GreenMonster2/skeleton-02_walking_09.png", 946, 821),
            new EnemyImage("GreenMonster2/skeleton-02_walking_10.png", 946, 821),
            new EnemyImage("GreenMonster2/skeleton-02_walking_11.png", 946, 821),
            new EnemyImage("GreenMonster2/skeleton-02_walking_12.png", 946, 821),
        ];

        super(game, null, null, enemyImages);
        this.speed = Math.random()*0.5+0.5;
        this.gameWith = 946/8;
        this.gameHeight = 821/8;
        this.y = game.height-(this.gameHeight+49);
        this.hitPower = 2.5;
        this.hitPoints = 3;
    }

   draw(){

    this.game.cntx.drawImage(this.enemyImages[this.frame].image, 0, 0, 
    946, 821, this.x, this.y, this.gameWith, this.gameHeight);
   }
}