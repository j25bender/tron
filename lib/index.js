const LightCycle = require('./LightCycle.js');
const StartScreen = require('./StartScreen.js');

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const InitialStartScreen = new StartScreen();
const onePlayerBttn = new StartScreen(75, 420, 150, 50, 'gray');
const twoPlayerBttn = new StartScreen(375, 420, 150, 50, 'gray');
const onePlayerText = new StartScreen(90, 445, 0, 0, 'white');
const twoPlayerText = new StartScreen(390, 445, 0, 0, 'white');

let lightCycle1 = new LightCycle(100, 300, 50, 20, 1);
let AilightCycle1 = new LightCycle(450, 300, 50, 20, 1);

const lightCycles = [lightCycle1, AilightCycle1];

window.addEventListener('load', startScreen);
document.addEventListener('keydown', enterBoost);
canvas.addEventListener('click', mouseEvent);

function mouseEvent(e) {
    const x = e.clientX - canvas.offsetLeft;
    const y = e.clientY - canvas.offsetTop;
    if( y >= 425 && y <= 480 && x >= 75 && x<= 225) {
        requestAnimationFrame( function gameLoop() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            lightCycles.forEach( lightCycle => {
                lightCycle.draw(context);
            });
        });
    }
}

function startScreen(e) {
    InitialStartScreen.drawTitle(context);
    onePlayerBttn.drawOnePlayerBttn(context);
    twoPlayerBttn.drawOnePlayerBttn(context);
    onePlayerText.drawOnePlayerText(context);
    twoPlayerText.drawTwoPlayerText(context);    
}

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