import InputHandler from "./input.js";
import Player from "./player.js";
import Animation from "./animation.js";
import Background from "./background.js";
import { FlyEnemy } from "./enemy.js";
import { CollisionAnimation } from "./animation.js";

export default class Game{

    #detectHit(){
        this.enemies.forEach((enemy) => {

            let dx = enemy.x- (this.player.x+this.player.width*this.player.attackAngleX);
            let dy = enemy.y - (this.player.y+this.player.height*this.player.attackAngleY);
            let dist = Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2));

            if(dist <= enemy.gameWith/2+this.player.width/16){
                enemy.markForDeletion = true;
                this.collisions.push(new CollisionAnimation(this, enemy.x, enemy.y));
            }
        });
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
        this.inputHandler = new InputHandler();
        this.animation = new Animation();
        this.player = new Player(this);
        this.background = new Background(this);
        this.enemies = [];
        this.enemyTypes = ["fly"];
        this.enemyInterval = Math.random()*600+100;
        this.timeElapsed = 0;
        this.collisions = [];
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
            if(collision.markForDeletion){
                this.collisions.splice(index, 1);
            }
        });
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