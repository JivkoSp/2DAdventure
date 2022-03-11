import InputHandler from "./input.js";
import Player from "./player.js";
import Animation from "./animation.js";
import Background from "./background.js";
import { FlyEnemy, RavenEnemy, GreenMonsterEnemy, GreenMonsterEnemyTwo } from "./enemy.js";
import { CollisionAnimation } from "./animation.js";
import { BonusLifeParticle, DustParticle } from "./particales.js";
import { HurtState } from "./state.js";

export default class Game{

    #showTimer(){

        let timeDiff = Date.now() - this.startGame;

        this.cntx.font = "15px fantasy";
        this.cntx.textAlign = "left";
        this.cntx.fillStyle = this.colorText;
        this.cntx.fillText("Time: " + Math.round(timeDiff/1000)+" sec", 215, 17);
    }

    #detectHit(){
        this.enemies.forEach((enemy) => {

            let dx = (enemy.x+enemy.gameWith/2)- (this.player.x+this.player.width*this.player.attackAngleX);
            let dy = (enemy.y+enemy.gameHeight/2) - (this.player.y+this.player.height*this.player.attackAngleY);
            let dist = Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2));

            if(dist <= enemy.gameWith/3+this.player.width/16){
            
                this.player.scorePoints+=enemy.hitPoints;
                this.player.totalScorePoints += enemy.hitPoints;
                enemy.markForDeletion = true;
                this.collisions.push(new CollisionAnimation(this, enemy.x, enemy.y));
            }
        });
    }

    #detectPlayerHit(){

        this.enemies.forEach((enemy) => {

            let dx = (enemy.x+enemy.gameWith/2)- (this.player.x+this.player.width/2);
            let dy = (enemy.y+enemy.gameHeight/2) - (this.player.y+this.player.height/2);
            let dist = Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2));

            if(dist <= enemy.gameWith/3+this.player.width/3){

                this.player.helthBar.update(enemy.hitPower);
                this.player.currentActionState = this.player.actionStates[5];
                this.player.animationFrame = 0;
                this.player.currentActionState.enter();
            }
        });
    }

    #detectBonusLifeContact(){

        this.bonusLifeParticles.forEach((particle) => {

            let dx = (particle.x+particle.size/2) - (this.player.x+this.player.width/2);
            let dy = (particle.y+particle.size/2) - (this.player.y+this.player.height/2);
            let dist = Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2));

            if(dist <= particle.size/2+this.player.width/3){

                this.player.helthBar.helth += Math.floor(Math.random()*20+5);
                if(this.player.helthBar.helth > 100){
                    this.player.helthBar.helth = 100;
                }
                particle.markForDeletion = true;
                for(let i=0; i<10;i++){
                    this.dustParticles.push(new DustParticle(this, 
                        particle.x, particle.y, 2, 200, 200, 100, 1, 30));
                }
            }
        });
    }

    #winGame(){

        let timeDiff = Date.now() - this.startGame;

        if(this.player.scorePoints >= 650 && Math.round(timeDiff/1000) < 240){
            this.cntx.font = "40px fantasy";
            this.cntx.textAlign = "left";
            this.cntx.fillStyle = "black";
            this.cntx.fillText("YOU WIN!", (this.width*0.38)-0.8, (this.height*0.39)+0.8);
            this.cntx.fillStyle = "green";
            this.cntx.fillText("YOU WIN!", this.width*0.38, this.height*0.39);
            this.winGame = true;
        }
    }

    #winLevel(){

        let timeDiff = Date.now() - this.startGame;

        if(this.player.scorePoints >= this.background.backgroundPoints 
            && Math.round(timeDiff/1000) < this.background.backgroundTimeLimit){
                
            let backgroundName = "";
            this.activeBackground++;  

            if(this.activeBackground > 2){
                this.activeBackground = 0;
            }

            switch(this.activeBackground){
                case 0:
                    backgroundName = "background1";
                    this.colorText = "black";
                    this.player.scorePoints = 0;
                    this.player.dustColor1 = 0;
                    this.player.dustColor2 = 95;
                    this.player.dustColor3 = 2;
                    this.startGame = new Date();
                    break;
                case 1:
                    backgroundName = "background2";
                    this.colorText = "white";
                    this.player.scorePoints = 0;
                    this.player.dustColor1 = 200;
                    this.player.dustColor2 = 220;
                    this.player.dustColor3 = 250;
                    this.startGame = new Date();
                    break;
                case 2:
                    backgroundName = "background3";
                    this.colorText = "white";
                    this.player.scorePoints = 0;
                    this.player.dustColor1 = 163;
                    this.player.dustColor2 = 177;
                    this.player.dustColor3 = 205;
                    this.startGame = new Date();
                    break;
            }

            this.background.backgroundName = backgroundName;
        }
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
            case "raven":
                this.enemies.push(new RavenEnemy(this, 5));
                break;
            case "greenMonster":
                this.enemies.push(new GreenMonsterEnemy(this));
                break;
            case "greenMonster2":
                this.enemies.push(new GreenMonsterEnemyTwo(this));
                break;
        }

        this.enemies.sort((a,b) => {return a.y - b.y});
    }

    #addBunusLife(){
        this.bonusLifeParticles.push(new BonusLifeParticle(this, Math.random()*this.width, 0));
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
        this.enemyTypes = ["fly", "raven", "greenMonster", "greenMonster2"];
        this.enemyInterval = Math.random()*600+900;
        this.timeElapsed = 0;
        this.collisions = [];
        this.gameOver = false;
        this.winGame = false;
        this.startGame = new Date();
        this.activeBackground = 0;
        this.colorText = "black";
        this.bonusLifeParticles = [];
        this.dustParticles = [];
    }

    update(deltaTime){
        this.background.update();
        this.player.update(this.inputHandler.lastKey, deltaTime);

        this.timeElapsed += deltaTime;
        if(this.timeElapsed >= this.enemyInterval){
            this.#addEnemy();
            this.timeElapsed = 0;
        }

        if(this.timeElapsed >= this.enemyInterval*Math.random()*500+100){
            this.#addBunusLife();
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

        this.bonusLifeParticles.forEach((particle, index) => {
            particle.update();
            if(particle.markForDeletion){
                this.bonusLifeParticles.splice(index, 1);
            }
        });

        this.dustParticles.forEach((particle, index) => {
            particle.update();
            if(particle.markForDeletion){
                this.dustParticles.splice(index, 1);
            }
        });

        if(!this.player.attackingState && this.player.helthBar.helth > 0){
            this.#detectPlayerHit();
        }
        
        if(this.gameOver){
            this.#gameOver();
        }

        this.#showTimer();
        this.#winGame();
        this.#winLevel();
        this.#detectBonusLifeContact();
    }

    draw(){
        this.background.draw();
        this.player.draw();
        this.enemies.forEach((enemy) => enemy.draw());
        this.collisions.forEach((collision) => {
            collision.draw();
        });

        this.bonusLifeParticles.forEach((particle) => {
            particle.draw();
        });

        this.dustParticles.forEach((particle) => {
            particle.draw();
        });
    }
}