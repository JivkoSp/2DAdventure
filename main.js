import Game from "./game.js";

window.addEventListener('load', () => {

    const canvas = document.getElementById("canvas1");
    const context = canvas.getContext("2d");
    const canvasWidth = canvas.width = window.innerWidth;
    const canvasHeight = canvas.height = window.innerHeight;


    const game  = new Game(context, canvasWidth, canvasHeight);

    let lastTime = 0;
    function animate(timeStamp){
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        let deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
    
        game.draw();
        game.update(deltaTime);
        
        requestAnimationFrame(animate);
    }

    animate(0);
});
