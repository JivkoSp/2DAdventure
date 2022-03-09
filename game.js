import InputHandler from "./input.js";
import Player from "./player.js";
import Animation from "./animation.js";

export default class Game{
    constructor(cntx, width, height){
        this.cntx = cntx;
        this.width = width;
        this.height = height;
        this.inputHandler = new InputHandler();
        this.animation = new Animation();
        this.player = new Player(this);
        this.enemies = [];
    }

    update(deltaTime){
        this.player.update(this.inputHandler.lastKey, deltaTime);
    }

    draw(){
        this.player.draw();
    }
}