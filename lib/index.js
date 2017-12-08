const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const StartScreen = require('./StartScreen.js');
const Directions = require('./Directions.js');
const LightCycle = require('./LightCycle.js');

const backgroundMusic = new Audio('../Sounds/backgroundMusic.mp3');
backgroundMusic.volume = 0.2;

const w = canvas.width;
const h = canvas.height;
const center = w / 2;

const InitialStartScreen = new StartScreen();
const startBttn = new StartScreen(225, 425, 150, 50, 'gray');
const startText = new StartScreen(w/2, 457, 0, 0, '#59CFEE');

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
  
  if (x >= 224 && x <= 380 && y >= 430 && y <= 476) {
    requestAnimationFrame( function gameLoop() {
      context.clearRect(0, 0, w, h);
      onePlayerDirections.drawP1Directions(center, context);
      spaceBarBttn.drawSpacebarBttn(context);
      spaceBarText.drawSpacebarText(center, context);
    });
  }
}

function startScreen(e) {
  InitialStartScreen.drawTitle(center, context);
  startBttn.drawStartBttn(context);
  startText.drawStartText(context);
  backgroundMusic.play();
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
