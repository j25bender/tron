const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const StartScreen = require('./StartScreen.js');
const Directions = require('./Directions.js');
const LightCycle = require('./LightCycle.js');

const explosionSound = new Audio('../Sounds/explosionSound.wav');

explosionSound.volume = 0.2;
const backgroundMusic = new Audio('../Sounds/backgroundMusic.mp3');

backgroundMusic.volume = 0.2;

const InitialStartScreen = new StartScreen();
const onePlayerBttn = new StartScreen(75, 420, 150, 50, 'gray');
const twoPlayerBttn = new StartScreen(375, 420, 150, 50, 'gray');
const onePlayerText = new StartScreen(150, 452, 0, 0, '#59CFEE');
const twoPlayerText = new StartScreen(450, 452, 0, 0, '#59CFEE');

const onePlayerDirections = new Directions();
const twoPlayerDirections = new Directions();
const spaceBarBttn = new Directions(0, 550, 600, 50, 'gray');
const spaceBarText = new Directions(170, 570, 600, 30, '#59CFEE');
const enterBttn = new Directions(0, 550, 600, 50, 'gray');
const enterText = new Directions(170, 570, 600, 30, '#59CFEE');

const p1WinsText = new LightCycle();
const p2WinsText = new LightCycle();
let lightCycle1 = new LightCycle(100, 300, 50, 4, '#7AF6D8', 'right');
let lightCycle2 = new LightCycle(500, 300, 50, 4, '#EE6A2C', 'left');
const lightCycles = [lightCycle1, lightCycle2];

const w = canvas.width;
const h = canvas.height;
const center = w / 2;

window.addEventListener('load', startScreen);
document.addEventListener('keydown', returnBttn);
document.addEventListener('keydown', playerMovement);
document.addEventListener('keydown', spaceBar);
canvas.addEventListener('click', mouseClick);

function returnBttn(e) {    
  if (e.code === 'Enter') {
    window.location.reload();
  }
}

// function playerMovement(e) {
//   lightCycle1.handleKeyP1(e);
//   lightCycle2.handleKeyP2(e);
// }

function playerMovement(e) {
  e.preventDefault();
  var keyCode = e.keyCode;
  var keyboard = {
    '37'() {
      lightCycle1.moveRight();
    },
    '65'() {
      lightCycle2.moveRight();
    },
    '39'() {
      lightCycle1.moveLeft();
    },
    '68'() {
      lightCycle2.moveLeft();
    },
    '38'() {
      lightCycle1.moveDown();
    },
    '87'() {
      lightCycle2.moveDown();
    },
    '40'() {
      lightCycle1.moveUp();
    },
    '83'() {
      lightCycle2.moveUp();
    }
  }

  if (keyboard[ keyCode ]) {
    keyboard[ keyCode ].call(this);
  }
}

function spaceBar(e) {
  e.preventDefault();  
  if (e.code === 'Space') {    
    gameLoop();
  }
}

function gameLoop() {
  canvas.focus();
  context.clearRect(0, 0, w, h);
  
  lightCycles.forEach( lightCycle => {    
    lightCycle.draw(context);
    lightCycle.move();
    lightCycle.checkBorderCollisions();
    lightCycle.checkCollision();
    if (lightCycle.checkBorderCollisions() || lightCycle.checkCollision()) {
      checkWinner(lightCycle.checkBorderCollisions());
      checkWinner(lightCycle.checkCollision());
    }
  });

  lightCycles[0].checkCollision(lightCycles[1]);
  lightCycles[1].checkCollision(lightCycles[0]);

  if (lightCycles[0].checkCollision(lightCycles[1]) ||
     lightCycles[1].checkCollision(lightCycles[0])) {
    checkWinner(lightCycles[0].checkCollision(lightCycles[1]));
    checkWinner(lightCycles[1].checkCollision(lightCycles[0]));
  }

  this.animationFrameID = requestAnimationFrame(gameLoop);  
}

function mouseClick(e) {
  const x = e.clientX - canvas.offsetLeft;
  const y = e.clientY - canvas.offsetTop;

  if ( y >= 425 && y <= 480 && x >= 75 && x <= 225) {
    requestAnimationFrame( function gameLoop() {
      context.clearRect(0, 0, w, h);
      onePlayerDirections.drawP1Directions(center, context);
      spaceBarBttn.drawSpacebarBttn(context);
      spaceBarText.drawSpacebarText(center, context);
    });
  } else if ( y >= 425 && y <= 480 && x >= 375 && x <= 525) {
    requestAnimationFrame( function gameLoop() {
      context.clearRect(0, 0, w, h);
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
  // backgroundMusic.play();
}

function checkWinner(color) {
  if (color === '#EE6A2C') {
    p1WinsText.p1Wins(context);
    lightCycle2.direction = 'none';
    lightCycle1.color = '#1469EE';
    enterBttn.drawEnterBttn(context);
    enterText.drawEnterText(center, context);
    // explosionSound.play();
  } else if (color === '#7AF6D8') {
    p2WinsText.p2Wins(context);
    lightCycle1.direction = 'none';
    lightCycle2.color = '#E23225';
    enterBttn.drawEnterBttn(context);
    enterText.drawEnterText(center, context);
    // explosionSound.play();
  } 
}
