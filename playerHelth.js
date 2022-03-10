export default class HelthBar{
    constructor(game, x, y, width, height, color){
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.helth = 100;
        this.maxWidth = width;
        this.maxHelth = this.height;
        this.color = color;
    }

    update(damage){
        this.helth -= damage;
        this.width -= damage*2;
        if(this.helth <= 50){
            this.color = "red";
        }
    }   

    draw(){
        this.game.cntx.lineWidth = 2;
        this.game.cntx.strokeStyle = "black";
        this.game.cntx.fillStyle = this.color;
        this.game.cntx.fillRect(this.x, this.y, this.width, this.height);
        this.game.cntx.strokeRect(this.x, this.y, this.maxWidth, this.height);
        this.game.cntx.font = "15px fantasy";
        this.game.cntx.textAlign = "center";
        this.game.cntx.fillStyle = "black";
        this.game.cntx.fillText(this.helth+" %", this.maxWidth/2, 15);
    }
}