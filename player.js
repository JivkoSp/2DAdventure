import{
    IdleState,
    JumpingState,
    WalkingState,
    AttackingState,
    TauntState
} from "./state.js";

export default class Player{

    constructor(game){
        this.game = game;
        this.animation = this.game.animation;
        this.width = this.animation.animationWidth;
        this.height = this.animation.animationHeight;
        this.x = 0;
        this.y = this.game.height-this.height-50;
        this.actionStates = [
            new IdleState(this, this.game.animation.getAnimations("idle")),
            new JumpingState(this, this.game.animation.getAnimations("jumping")),
            new WalkingState(this, this.game.animation.getAnimations("walking")),
            new TauntState(this, this.game.animation.getAnimations("taunt")),
            new AttackingState(this, this.game.animation.getAnimations("attacking"))
        ];
        this.animations = this.game.animation.getAnimations("idle");
        this.currentActionState = this.actionStates[0];
        this.animationFrame = 0;
        this.animationSpeed = 80;
        this.msPassed = 0; //ms from last animation
        this.vy = 0;
        this.speed = 0; 
        this.attackAngleY = 0.7;
        this.attackAngleX = 0.8;
        this.attackingState = false;
        this.walkingParticles = [];
        this.fireParticles = [];
    }

    update(input, deltaTime){
        this.currentActionState.handleInput(input); 
        
        if(this.msPassed >= this.animationSpeed){
            this.animationFrame == this.animations.length-1 ? this.animationFrame = 0 : this.animationFrame++;
            this.msPassed = 0;
        }

        if(!this.isPlayerOnGround()){
            this.vy+=0.6;
        }
        
        //right restriction
        if(this.x > this.game.width-this.width){
            this.x = this.game.width-this.width;
        }

        //left restiction
        if(this.x < 0){
            this.x = 0;
        }

        //ground restriction
        if(this.y > this.game.height-this.height-50){
            this.y = this.game.height-this.height-50;
            this.vy = 0;
            this.currentActionState = this.actionStates[2];
            this.currentActionState.enter();
        }

        this.x += this.speed;
        this.y += this.vy;
        this.msPassed += deltaTime;
        
        this.walkingParticles.forEach((particle, index) => {
            particle.update();
            if(particle.markForDeletion){
                this.walkingParticles.splice(index, 1);
            }
        });

        this.fireParticles.forEach((particle, index) => {
            particle.update();
            if(particle.markForDeletion){
                this.fireParticles.splice(index, 1);
            }
        });
    }

    draw(){
        this.game.cntx.drawImage(this.animations[this.animationFrame].image, 0, 0, 
            this.width, this.height, this.x, this.y, this.width, this.height);
        
        this.walkingParticles.forEach((particle) => {
            particle.draw();
        });

        this.fireParticles.forEach((particle) => {
            particle.draw();
        });
    }

    isPlayerOnGround(){
        return this.y == this.game.height-this.height-50;
    }

    setState(state){
        this.currentActionState = this.actionStates[state];
        this.currentActionState.enter();
        this.animationFrame = 0;
    }
}


