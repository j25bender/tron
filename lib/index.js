const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const StartScreen = require('./StartScreen.js');
const Directions = require('./Directions.js');
const Grid = require('./Grid.js');
const backgroundMusic = new Audio('../Sounds/backgroundMusic.mp3');
const LightCycle = require('./LightCycle.js');
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
const p1WinsText = new LightCycle();
const p2WinsText = new LightCycle();
const w = canvas.width;
const h = canvas.height;
let lightCycle1 = new LightCycle(100, 300, 50, 4, '#7AF6D8', 'right');
let lightCycle2 = new LightCycle(450, 300, 50, 4, '#EE6A2C', 'left');
let updateP2Life = document.getElementById('update-p2-lives').innerHTML;
const lightCycles = [lightCycle1, lightCycle2];
// let counter = 0;

backgroundMusic.volume = 0.2;
document.addEventListener('keydown', playerMovement);
document.addEventListener('keydown', spaceBar);
window.addEventListener('load', startScreen);
canvas.addEventListener('click', mouseClick);
function playerMovement(e) {
  lightCycle1.handleKeyP1(e);
  lightCycle2.handleKeyP2(e);
}
function spaceBar(e) {
  e.preventDefault();  
  if (e.code === 'Space') {
    console.log(updateP2Life)
    
    gameLoop();
  }
}
function gameLoop() {
  canvas.focus();
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  lightCycles.forEach( lightCycle => {
    lightCycle.draw(context);
    lightCycle.move();
    if (lightCycle.checkBorderCollisions() || lightCycle.checkOwnTrailCollisions()) {
      // end game
      // lightCycle.die()
      // 
    }
    lightCycle.checkBorderCollisions();
    if (lightCycle.checkBorderCollisions()) {
      checkWinner(lightCycle.checkBorderCollisions());
    }
    
    
 
    // lightCycles.forEach( nestedLightCycle => {
    //   if (lightCycle.checkCollision(nestedLightCycle)) {
    //     lightCycle.isStopped = true;
    //     lightCycle.stopMovement();
    //   }
    // })
  });  
  // requestAnimationFrame(gameLoop);
  this.animationFrameID = requestAnimationFrame(gameLoop);
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
  // backgroundMusic.play();
}
function checkWinner(color) {
  if (color === '#EE6A2C') {
    p1WinsText.p1Wins(context);
    lightCycle2.direction = 'none';
    lightCycle1.color = '#1469EE';
  } else if (color === '#7AF6D8') {
    p2WinsText.p2Wins(context);
    lightCycle1.direction = 'none';
    lightCycle2.color = '#E23225';    
  }
}