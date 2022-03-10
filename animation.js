class PlayerImage{
    constructor(image, width, height){
        this.image = new Image();
        this.image.src = image;
        this.width = width;
        this.height = height;
    }
}

export default class Animation{
    constructor(){
        this.animations = {
                "idle": [
                    new PlayerImage("idle_Minotaur_000.png", 221, 150),
                    new PlayerImage("idle_Minotaur_001.png", 221, 150),
                    new PlayerImage("idle_Minotaur_002.png", 221, 150),
                    new PlayerImage("idle_Minotaur_003.png", 221, 150),
                    new PlayerImage("idle_Minotaur_004.png", 221, 150),
                    new PlayerImage("idle_Minotaur_005.png", 221, 150),
                    new PlayerImage("idle_Minotaur_006.png", 221, 150),
                    new PlayerImage("idle_Minotaur_007.png", 221, 150),
                    new PlayerImage("idle_Minotaur_008.png", 221, 150),
                    new PlayerImage("idle_Minotaur_009.png", 221, 150),
                    new PlayerImage("idle_Minotaur_010.png", 221, 150),
                    new PlayerImage("idle_Minotaur_011.png", 221, 150)
                ],
                "taunt": [
                    new PlayerImage("taunt_Minotaur_000.png", 221, 150),
                    new PlayerImage("taunt_Minotaur_001.png", 221, 150),
                    new PlayerImage("taunt_Minotaur_002.png", 221, 150),
                    new PlayerImage("taunt_Minotaur_003.png", 221, 150),
                    new PlayerImage("taunt_Minotaur_004.png", 221, 150),
                    new PlayerImage("taunt_Minotaur_005.png", 221, 150),
                    new PlayerImage("taunt_Minotaur_006.png", 221, 150),
                    new PlayerImage("taunt_Minotaur_007.png", 221, 150),
                    new PlayerImage("taunt_Minotaur_008.png", 221, 150),
                    new PlayerImage("taunt_Minotaur_009.png", 221, 150),
                    new PlayerImage("taunt_Minotaur_010.png", 221, 150),
                    new PlayerImage("taunt_Minotaur_011.png", 221, 150),
                    new PlayerImage("taunt_Minotaur_012.png", 221, 150),
                    new PlayerImage("taunt_Minotaur_013.png", 221, 150),
                    new PlayerImage("taunt_Minotaur_014.png", 221, 150),
                    new PlayerImage("taunt_Minotaur_015.png", 221, 150),
                    new PlayerImage("taunt_Minotaur_016.png", 221, 150),
                    new PlayerImage("taunt_Minotaur_017.png", 221, 150)
                ],
                "walking": [
                    new PlayerImage("walking-Minotaur_000.png", 221, 150),
                    new PlayerImage("walking-Minotaur_001.png", 221, 150),
                    new PlayerImage("walking-Minotaur_002.png", 221, 150),
                    new PlayerImage("walking-Minotaur_003.png", 221, 150),
                    new PlayerImage("walking-Minotaur_004.png", 221, 150),
                    new PlayerImage("walking-Minotaur_005.png", 221, 150),
                    new PlayerImage("walking-Minotaur_006.png", 221, 150),
                    new PlayerImage("walking-Minotaur_007.png", 221, 150),
                    new PlayerImage("walking-Minotaur_008.png", 221, 150),
                    new PlayerImage("walking-Minotaur_009.png", 221, 150),
                    new PlayerImage("walking-Minotaur_010.png", 221, 150),
                    new PlayerImage("walking-Minotaur_011.png", 221, 150),
                    new PlayerImage("walking-Minotaur_012.png", 221, 150),
                    new PlayerImage("walking-Minotaur_013.png", 221, 150),
                    new PlayerImage("walking-Minotaur_014.png", 221, 150),
                    new PlayerImage("walking-Minotaur_015.png", 221, 150),
                    new PlayerImage("walking-Minotaur_016.png", 221, 150),
                    new PlayerImage("walking-Minotaur_017.png", 221, 150)
                ],
                "jumping": [
                    new PlayerImage("jumpStart-Minotaur_000.png", 221, 150),
                    new PlayerImage("jumpStart-Minotaur_001.png", 221, 150),
                    new PlayerImage("jumpStart-Minotaur_002.png", 221, 150),
                    new PlayerImage("jumpStart-Minotaur_003.png", 221, 150),
                    new PlayerImage("jumpStart-Minotaur_004.png", 221, 150),
                    new PlayerImage("jumpStart-Minotaur_005.png", 221, 150),
                    new PlayerImage("jumpLoop-Minotaur_000.png", 221, 150),
                    new PlayerImage("jumpLoop-Minotaur_001.png", 221, 150),
                    new PlayerImage("jumpLoop-Minotaur_002.png", 221, 150),
                    new PlayerImage("jumpLoop-Minotaur_003.png", 221, 150),
                    new PlayerImage("jumpLoop-Minotaur_004.png", 221, 150),
                    new PlayerImage("jumpLoop-Minotaur_005.png", 221, 150)
                ],
                "attacking": [
                    new PlayerImage("attacking_Minotaur_000.png", 221, 150),
                    new PlayerImage("attacking_Minotaur_001.png", 221, 150),
                    new PlayerImage("attacking_Minotaur_002.png", 221, 150),
                    new PlayerImage("attacking_Minotaur_003.png", 221, 150),
                    new PlayerImage("attacking_Minotaur_004.png", 221, 150),
                    new PlayerImage("attacking_Minotaur_005.png", 221, 150),
                    new PlayerImage("attacking_Minotaur_006.png", 221, 150),
                    new PlayerImage("attacking_Minotaur_007.png", 221, 150),
                    new PlayerImage("attacking_Minotaur_008.png", 221, 150),
                    new PlayerImage("attacking_Minotaur_009.png", 221, 150),
                    new PlayerImage("attacking_Minotaur_010.png", 221, 150),
                    new PlayerImage("attacking_Minotaur_011.png", 221, 150)
                ],
                "hurt": [
                    new PlayerImage("hurt_Minotaur_000.png", 221, 150),
                    new PlayerImage("hurt_Minotaur_001.png", 221, 150),
                    new PlayerImage("hurt_Minotaur_002.png", 221, 150),
                    new PlayerImage("hurt_Minotaur_003.png", 221, 150),
                    new PlayerImage("hurt_Minotaur_004.png", 221, 150),
                    new PlayerImage("hurt_Minotaur_005.png", 221, 150),
                    new PlayerImage("hurt_Minotaur_006.png", 221, 150),
                    new PlayerImage("hurt_Minotaur_007.png", 221, 150),
                    new PlayerImage("hurt_Minotaur_008.png", 221, 150),
                    new PlayerImage("hurt_Minotaur_009.png", 221, 150),
                    new PlayerImage("hurt_Minotaur_010.png", 221, 150),
                    new PlayerImage("hurt_Minotaur_011.png", 221, 150)
                ],
                "dying": [
                    new PlayerImage("dying_Minotaur_000.png", 221, 150),
                    new PlayerImage("dying_Minotaur_001.png", 221, 150),
                    new PlayerImage("dying_Minotaur_002.png", 221, 150),
                    new PlayerImage("dying_Minotaur_003.png", 221, 150),
                    new PlayerImage("dying_Minotaur_004.png", 221, 150),
                    new PlayerImage("dying_Minotaur_005.png", 221, 150),
                    new PlayerImage("dying_Minotaur_006.png", 221, 150),
                    new PlayerImage("dying_Minotaur_007.png", 221, 150),
                    new PlayerImage("dying_Minotaur_008.png", 221, 150),
                    new PlayerImage("dying_Minotaur_009.png", 221, 150),
                    new PlayerImage("dying_Minotaur_010.png", 221, 150),
                    new PlayerImage("dying_Minotaur_011.png", 221, 150),
                    new PlayerImage("dying_Minotaur_012.png", 221, 150),
                    new PlayerImage("dying_Minotaur_013.png", 221, 150),
                    new PlayerImage("dying_Minotaur_014.png", 221, 150)
                ],
            };

        this.animationWidth = 221;
        this.animationHeight = 150;
    }

    getAnimations(animationState){
        return this.animations[animationState];
    }
}

export class CollisionAnimation{
    constructor(game, x, y){
        this.image = new Image();
        this.image.src = "boom.png";
        this.game = game;
        this.spriteWidth = 100;
        this.spriteHeight = 90;
        this.sizeModifier = Math.random() + 0.5;
        this.width = this.spriteWidth*this.sizeModifier;
        this.height = this.spriteHeight*this.sizeModifier;
        this.x = x - this.width*0.5;
        this.y = y - this.height*0.5;
        this.frameX = 0;
        this.maxFrame = 4;
        this.markForDeletion = false;
        this.animationSpeed = 100;
        this.msPassed = 0;
    }

    update(deltaTime){

        this.msPassed += deltaTime;

        if(this.msPassed >= this.animationSpeed){
      
            if(this.frameX > 5){
                this.frameX = 0;
                this.markForDeletion = true;
            }

            this.frameX++;
            this.msPassed = 0;
        }
    }

    draw(){
        this.game.cntx.drawImage(this.image, this.frameX*this.spriteWidth, 0, this.spriteWidth, this.spriteHeight,
            this.x, this.y, this.width, this.height);
    }
}

