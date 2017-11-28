const LightCycle = require('./LightCycle.js');

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

let lightCycle1 = new LightCycle(100, 300, 50, 20, 1);
let AilightCycle1 = new LightCycle(450, 300, 50, 20, 1);

const lightCycles = [lightCycle1, AilightCycle1];

document.addEventListener('keydown', enterBoost);

requestAnimationFrame( function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    lightCycles.forEach( lightCycle => {
    lightCycle.draw(context);
    });
    
    requestAnimationFrame(gameLoop);
})

function enterBoost(e) {
    e.which = e.which || e.keyCode;
    if(e.which == 13) {
        moveOnStartGame();
        // use 1 turbo boost
        console.log('Did it work?')
    }

}

function moveOnStartGame() {
    lightCycle1.moveRight();
}


// requestAnimationFrame(gameLoop);

//start screen with directions

//level 1 only two opposing lightCycle and no obstacles

//animation should start on time delay or keydown event

//lightCycle should leave wall trail 

//game lost on contact with either canvas boundry or wall trail

//game won upon destruction of ai

//score should update and lives lost should decrement if necessary

//canvas should reload to either same level on loss or next level

//difficulty should increase with more ai lightCycle, obstacles, speed etc.

//game over when 3 lives lost

//game won when all levels completed