const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const StartScreen = require('./StartScreen.js');
const Directions = require('./Directions.js');
const Grid = require('./Grid.js');
const LightCycle = require('./LightCycle.js');
// const TrailElement = require('./TrailElement.js');
const InitialStartScreen = new StartScreen();
const onePlayerBttn = new StartScreen(75, 420, 150, 50, 'gray');
const twoPlayerBttn = new StartScreen(375, 420, 150, 50, 'gray');
const onePlayerText = new StartScreen(150, 452, 0, 0, '#59CFEE');
const twoPlayerText = new StartScreen(450, 452, 0, 0, '#59CFEE');
const center = canvas.width / 2;
const onePlayerDirections = new Directions();
const twoPlayerDirections = new Directions();
const spaceBarBttn = new Directions(0, 550, 600, 50, 'gray');
const spaceBarText = new Directions(170, 570, 600, 30, '#59CFEE');
const w = canvas.width;
const h = canvas.height;
let lightCycle1 = new LightCycle(100, 300, 50, 8, '#7AF6D8', 'right');
let lightCycle2 = new LightCycle(450, 300, 50, 8, '#EE6A2C', 'left');
const lightCycles = [lightCycle1, lightCycle2];
// let counter = 0;

document.addEventListener('keydown', playerMovement);
document.addEventListener('keydown', spaceBar);
window.addEventListener('load', startScreen);
canvas.addEventListener('click', mouseClick);
// canvas.addEventListener('mousemove', flicker);

// function flicker(e) {
//   this.counter++;
//   this.counter = 0;
//   startScreen(e);
  
//   if(this.counter >= 1) {
//     console.log(this.counter)
    
    
//   }
// }

function playerMovement(e) {
  lightCycle1.handleKeyP1(e);
  lightCycle2.handleKeyP2(e);
}

function spaceBar(e) {
  if (e.code === 'Space') {
    gameLoop();
  }
  
}

function gameLoop() {
  canvas.focus();
  context.clearRect(0, 0, canvas.width, canvas.height);
  lightCycles.forEach( lightCycle => {
    lightCycle.draw(context);
    lightCycle.move();
    lightCycle.checkBorderCollisions();
    checkWinner(context);

    // lightCycles.forEach( nestedLightCycle => {
    //   if (lightCycle.checkCollision(nestedLightCycle)) {
    //     lightCycle.isStopped = true;
    //     lightCycle.stopMovement();
    //   }
    // })
  });
  // requestAnimationFrame(gameLoop);
  this.animationFrameID = requestAnimationFrame(gameLoop.bind(this));
}

function mouseClick(e) {
  const x = e.clientX - canvas.offsetLeft;
  const y = e.clientY - canvas.offsetTop;
  if ( y >= 425 && y <= 480 && x >= 75 && x <= 225) {
    requestAnimationFrame( function gameLoop() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      onePlayerDirections.drawP1Directions(center, context);
      spaceBarBttn.drawSpacebarBttn(context);
      spaceBarText.drawSpacebarText(center, context);
    });
  } else if ( y >= 425 && y <= 480 && x >= 375 && x <= 525) {
    requestAnimationFrame( function gameLoop() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      twoPlayerDirections.drawP2Directions(center, context);
      spaceBarBttn.drawSpacebarBttn(context);
      spaceBarText.drawSpacebarText(center, context);
    });
  }
}

function startScreen(e) {
  InitialStartScreen.drawTitle(center, context);
  onePlayerBttn.drawOnePlayerBttn(context);
  twoPlayerBttn.drawOnePlayerBttn(context);
  onePlayerText.drawOnePlayerText(context);
  twoPlayerText.drawTwoPlayerText(context);    
}

function checkWinner(context) {
  console.log('hello?')
  if(this.color === '#7AF6D8') {    
    this.p1Wins(context);
  } else if (this.color === '#EE6A2C') {
    this.p2Wins(context);
  }
}