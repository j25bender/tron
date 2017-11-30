const LightCycle = require('./LightCycle.js');
const StartScreen = require('./StartScreen.js');
// // const Grid = require('./Grid.js')
const Directions = require('./Directions.js');

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const InitialStartScreen = new StartScreen();
const onePlayerBttn = new StartScreen(75, 420, 150, 50, 'gray');
const twoPlayerBttn = new StartScreen(375, 420, 150, 50, 'gray');
const onePlayerText = new StartScreen(150, 452, 0, 0, '#59CFEE');
const twoPlayerText = new StartScreen(450, 452, 0, 0, '#59CFEE');

const center = canvas.width/2;
const onePlayerDirections = new Directions();
const twoPlayerDirections = new Directions();
const spaceBarBttn = new Directions(0, 550, 600, 50, 'gray');
const spaceBarText = new Directions(170, 570, 600, 30, '#59CFEE');


let lightCycle1 = new LightCycle(100, 300, 50, 20, 1);
let AilightCycle1 = new LightCycle(450, 300, 50, 20, 1);

const lightCycles = [lightCycle1, AilightCycle1];

// document.addEventListener('keydown', movementKeys);
window.addEventListener('load', startScreen);
// document.addEventListener('keydown', startMove);
canvas.addEventListener('click', mouseClick);
document.addEventListener('keydown', enterBttn);

function enterBttn(e) {
    if(e.code === 'Space') {
        console.log('LOAD LEVEL ONE: PLAYER VS. MACHINE!'); 
    }
}

function mouseClick(e) {
    const x = e.clientX - canvas.offsetLeft;
    const y = e.clientY - canvas.offsetTop;
    if( y >= 425 && y <= 480 && x >= 75 && x<= 225) {
        requestAnimationFrame( function gameLoop() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            onePlayerDirections.drawP1Directions(center, context);
            spaceBarBttn.drawSpacebarBttn(context);
            spaceBarText.drawSpacebarText(center, context);
            // drawArrows();
        });
    } else if ( y >= 425 && y <= 480 && x >= 375 && x<= 525) {
        console.log('two player directions')
        requestAnimationFrame( function gameLoop() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            twoPlayerDirections.drawP2Directions(center, context);
            spaceBarBttn.drawSpacebarBttn(context);
            spaceBarText.drawSpacebarText(center, context);
            // drawArrows();
        });
    }
}



// function drawArrows() {
//   arrowImg = new Image();
//   arrowImg.src = './assets/neon-arrow.png';
//   arrowImg.onload = function(){
//     // context.rotate(0.25);
//     context.drawImage(arrowImg, 260, 300, 75, 75);
//   }
// }

function startScreen(e) {
    InitialStartScreen.drawTitle(center, context);
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