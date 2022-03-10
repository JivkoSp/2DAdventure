import InputHandler from "./input.js";
import Player from "./player.js";
import Animation from "./animation.js";
import Background from "./background.js";
import { FlyEnemy } from "./enemy.js";
import { CollisionAnimation } from "./animation.js";
import { HurtState } from "./state.js";

export default class Game{

    #detectHit(){
        this.enemies.forEach((enemy) => {

            let dx = enemy.x- (this.player.x+this.player.width*this.player.attackAngleX);
            let dy = enemy.y - (this.player.y+this.player.height*this.player.attackAngleY);
            let dist = Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2));

            if(dist <= enemy.gameWith/2+this.player.width/16){
            
                this.player.scorePoints+=enemy.hitPoints;
                enemy.markForDeletion = true;
                this.collisions.push(new CollisionAnimation(this, enemy.x, enemy.y));
            }
        });
    }

    #detectPlayerHit(){

        this.enemies.forEach((enemy) => {

            let dx = enemy.x- (this.player.x+this.player.width/2);
            let dy = enemy.y - (this.player.y+this.player.height/2);
            let dist = Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2));

            if(dist <= enemy.gameWith/2+this.player.width/3){

                this.player.helthBar.update(enemy.hitPower);
                this.player.currentActionState = this.player.actionStates[5];
                this.player.animationFrame = 0;
                this.player.currentActionState.enter();
            }
        });
    }

    #gameOver(){
        this.cntx.font = "40px fantasy";
        this.cntx.textAlign = "left";
        this.cntx.fillStyle = "black";
        this.cntx.fillText("GAME OVER!", (this.width*0.38)-0.8, (this.height*0.39)+0.8);
        this.cntx.fillStyle = "red";
        this.cntx.fillText("GAME OVER!", this.width*0.38, this.height*0.39);
    }

    #addEnemy(){

        const enemyType = this.enemyTypes[Math.floor(Math.random()*this.enemyTypes.length)];

        switch(enemyType)
        {
            case "fly":
                this.enemies.push(new FlyEnemy(this, 6));
                break;
        }

        this.enemies.sort((a,b) => {return a.y - b.y});
    }

    constructor(cntx, width, height){
        this.cntx = cntx;
        this.width = width;
        this.height = height;
        this.sound = new Audio();
        this.sound.src = "amb_forest.flac";
        this.inputHandler = new InputHandler();
        this.animation = new Animation();
        this.player = new Player(this);
        this.background = new Background(this);
        this.enemies = [];
        this.enemyTypes = ["fly"];
        this.enemyInterval = Math.random()*600+100;
        this.timeElapsed = 0;
        this.collisions = [];
        this.gameOver = false;
    }

    update(deltaTime){
        this.background.update();
        this.player.update(this.inputHandler.lastKey, deltaTime);

        this.timeElapsed += deltaTime;
        if(this.timeElapsed >= this.enemyInterval){
            this.#addEnemy();
            this.timeElapsed = 0;
        }

        this.enemies.forEach((enemy) => enemy.update(deltaTime));
        this.enemies = this.enemies.filter((enemy) => !enemy.markForDeletion);

        if(this.player.attackingState){
            this.#detectHit();
        }

        this.collisions.forEach((collision, index) => {
             collision.update(deltaTime);
             collision.sound.play();
            if(collision.markForDeletion){
                this.collisions.splice(index, 1);
            }
        });

        if(!this.player.attackingState && this.player.helthBar.helth > 0){
            this.#detectPlayerHit();
        }
        
        if(this.gameOver){
            this.#gameOver();
        }
    }

    draw(){
        this.background.draw();
        this.player.draw();
        this.enemies.forEach((enemy) => enemy.draw());
        this.collisions.forEach((collision) => {
            collision.draw();
        });
    }
}