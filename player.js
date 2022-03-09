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
        this.animationSpeed = 100;
        this.msPassed = 0; //ms from last animation       
    }

    update(input, deltaTime){
        this.currentActionState.handleInput(input); 
        
        if(this.msPassed >= this.animationSpeed){
            this.animationFrame == this.animations.length-1 ? this.animationFrame = 0 : this.animationFrame++;
            this.msPassed = 0;
        }

        this.msPassed += deltaTime;     
    }

    draw(){
        this.game.cntx.drawImage(this.animations[this.animationFrame].image, 0, 0, 
            this.width, this.height, this.x, this.y, this.width, this.height);
    }

    setState(state){
        this.currentActionState = this.actionStates[state];
        this.currentActionState.enter();
        this.animationFrame = 0;
    }
}


