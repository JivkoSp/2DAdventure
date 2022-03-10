import {DustParticle, FireParticle} from './particales.js';

const states = {
    IDLE:0,
    JUMP:1,
    WALKING:2,
    TAUNT:3,
    ATTACKING:4,
    HURT:5,
    DYING:6
};


export class IdleState{
    constructor(player, animations){
        this.player = player;
        this.animations = animations;
    }
    
    handleInput(input){

        switch(input){
            case "Pressed right":
                this.player.setState(states.WALKING);
                break;
            case "Pressed up":
                this.player.setState(states.JUMP);
                break;
        }
    }

    enter(){
        this.player.animations = this.animations;
        this.player.animationSpeed = 80;
        this.player.speed = 0;
        this.player.attackingState = false;
    }
}

export class JumpingState{
    constructor(player, animations){
        this.player = player;
        this.animations = animations;
    }
    
    handleInput(input){

        switch(input){
            case "Pressed down":
                this.player.setState(states.ATTACKING);
                break;
            case "Pressed left":
                this.player.x -= 10;
                break;
        }
    }

    enter(){
        this.player.animations = this.animations;
        this.player.vy = -20;
        this.player.x+=10;
        this.player.animationSpeed = 80;
        this.player.attackingState = false;
    }
}

export class WalkingState{
    constructor(player, animations){
        this.player = player;
        this.animations = animations;
        this.steps = 0;
        this.trail = 2;
        this.trail_opacity = 0.8;
    }
    
    handleInput(input){

        this.player.walkingParticles.push(new DustParticle(this.player.game, 
            this.player.x+this.player.width/2, this.player.y+this.player.height-20, this.trail, this.trail_opacity));

        switch(input){
            case "Pressed right":
                
                this.steps+=0.1;

                if(this.steps > 5 && this.player.speed < 3.5){
                    this.player.speed+=1;
                    this.player.animationSpeed -= 40;
                    this.steps = 0;
                    this.trail+=0.5;
                    this.trail_opacity = 1;
                }
                else if(this.player.speed == 3.5){
                    this.player.speed -= 1.5;
                    this.player.animationSpeed += 20;
                    this.steps = 0;
                    this.trail--;
                }

                break;
            case "Released right":
                this.player.setState(states.IDLE);
                break;
            case "Pressed down":
                this.player.setState(states.ATTACKING);
                break;
            case "Pressed up":
                this.player.setState(states.JUMP);
                break;
        }
    }

    enter(){
        this.player.animations = this.animations;
        this.player.speed = 0.5;
        this.player.animationSpeed = 80;
        this.steps = 0;
        this.player.attackingState = false;
        this.trail = 2;
        this.trail_opacity = 0.4;
    }
}

export class AttackingState{
    constructor(player, animations){
        this.player = player;
        this.animations = animations;
    }
    
    handleInput(input){

        this.player.fireParticles.push(new FireParticle(this.player.game, 
            this.player.x+this.player.width/2, this.player.y-this.player.height*0.4, "fire.png"));

        switch(input){
            case "Pressed right":
                this.player.setState(states.WALKING);
                break;
            case "Pressed down":
                this.player.setState(states.TAUNT);
                break;
            case "Pressed up":
                this.player.setState(states.JUMP);
                break;
        }
    }

    enter(){
        this.player.animations = this.animations;
        this.player.speed = 0;
        this.player.animationSpeed-=40;
        this.player.attackingState = true;
    }
}

export class TauntState{
    constructor(player, animations){
        this.player = player;
        this.animations = animations;
    }
    
    handleInput(input){

        this.player.fireParticles.push(new FireParticle(this.player.game, 
            this.player.x+this.player.width/2+10, this.player.y-this.player.height*0.4, "fire.png"));

        switch(input){
            case "Pressed right":
                this.player.setState(states.WALKING);
                break;
            case "Released down":
                this.player.setState(states.ATTACKING);
                break;
            case "Pressed up":
                this.player.setState(states.JUMP);
                break;
        }
    }

    enter(){
        this.player.animations = this.animations;
        this.player.speed = 0;
        this.player.animationSpeed = 80;
        this.player.animationSpeed -= 20;
        this.player.attackingState = false;
    }
}