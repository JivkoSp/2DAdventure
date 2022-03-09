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
        }
    }

    enter(){
        this.player.animations = this.animations;
    }
}

export class WalkingState{
    constructor(player, animations){
        this.player = player;
        this.animations = animations;
    }
    
    handleInput(input){

        switch(input){
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
    }
}

export class AttackingState{
    constructor(player, animations){
        this.player = player;
        this.animations = animations;
    }
    
    handleInput(input){

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
    }
}

export class TauntState{
    constructor(player, animations){
        this.player = player;
        this.animations = animations;
    }
    
    handleInput(input){

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
    }
}