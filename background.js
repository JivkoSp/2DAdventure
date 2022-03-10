class BackgroundLayer{
    constructor(cntx, image, width, height, speed){
        this.cntx = cntx;
        this.image = new Image();
        this.image.src = image;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.layerFrame = 0;
    }

    update(){

        if(this.layerFrame >= this.width-this.speed){
            this.layerFrame = 0;
        }

        this.layerFrame+=this.speed;
    }

    draw(){
        this.cntx.drawImage(this.image, this.layerFrame, 0, this.width, this.height, 0, 0, this.width, this.height);
        this.cntx.drawImage(this.image, this.layerFrame-this.width+this.speed, 0, this.width, this.height, 0, 0, this.width, this.height);
    }
}

export default class Background{
    constructor(game){
        this.backgrounds = {
            "background1": [
                new BackgroundLayer(game.cntx, "backgroundOne (7).png", 1024, 574, 0),
                new BackgroundLayer(game.cntx, "backgroundOne (6).png", 1024, 574, 1.5),
                new BackgroundLayer(game.cntx, "backgroundOne (5).png", 1024, 574, 2.8),
                new BackgroundLayer(game.cntx, "backgroundOne (4).png", 1024, 574, 3.2),
                new BackgroundLayer(game.cntx, "backgroundOne (3).png", 1024, 574, 3.8),
                new BackgroundLayer(game.cntx, "backgroundOne (2).png", 1024, 574, 5.4),
                new BackgroundLayer(game.cntx, "backgroundOne (1).png", 1024, 574, 6)
            ],
            "background2":[

            ],
            "background3":[

            ]
        };

        this.game = game;
        this.backgroundWidth = 1024;
        this.backgroundHeight = 574;
        this.speed = 6;
        this.currentBackground = this.backgrounds["background1"];
    }

    setBackground(background){
        this.currentBackground = this.backgrounds[background];
    }

    update(){
        this.currentBackground.forEach((layer) => {
            layer.update();
        });
    }

    draw(){
        this.currentBackground.forEach((layer) => {
            layer.draw();
        });     
    }
}