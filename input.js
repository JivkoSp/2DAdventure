export default class InputHandler{
    constructor(){
        this.lastKey = "";

        window.addEventListener('keydown', (e) => {

            switch(e.key){
                case "s":
                    this.lastKey = "Pressed down";
                    break;
                case "w":
                    this.lastKey = "Pressed up";
                    break;
                case "a":
                    this.lastKey = "Pressed left";
                    break;
                case "d":
                    this.lastKey = "Pressed right";
                    break;
            }
        });

        window.addEventListener('keyup', (e) => {

            switch(e.key){
                case "s":
                    this.lastKey = "Released down";
                    break;
                case "w":
                    this.lastKey = "Released up";
                    break;
                case "a":
                    this.lastKey = "Released left";
                    break;
                case "d":
                    this.lastKey = "Released right";
                    break;
            }
        });
    }
}