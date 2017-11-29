const LightCycle1 = require('./LightCycle1.js');
const AiLightCycle2 = require('./AiLightCycle2.js');

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

let lightCycle1 = new LightCycle1(100, 300, 10, 10, 1);
let aiLightCycle2 = new AiLightCycle2(450, 300, 10, 10, 1);

const lightCycles = [lightCycle1, aiLightCycle2];

document.addEventListener('keydown', enterBoost);
document.addEventListener('keydown', moveCycleRight);
document.addEventListener('keydown', moveCycleLeft);
document.addEventListener('keydown', moveCycleUp);
document.addEventListener('keydown', moveCycleDown);

requestAnimationFrame( function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  lightCycles.forEach( lightCycle => {
    lightCycle.draw(context);
  });
  
  movePlayer1();
  requestAnimationFrame(gameLoop);
})

function enterBoost(e) {
  e.which = e.which || e.keyCode;
  if(e.which === 13) {
    // use 1 turbo boost
    console.log('BOOOST MOTHERFUCKER!!!!')
  }
}

function moveCycleRight(e) {
  e.which = e.which || e.keyCode;
  if(e.which === 39)
  lightCycle1.moveRight();
}

function moveCycleLeft(e) {
  e.which = e.which || e.keyCode;
  if(e.which === 37)
  lightCycle1.moveLeft();
}

function moveCycleUp(e) {
  e.which = e.which || e.keyCode;
  if(e.which === 38)
  lightCycle1.moveUp();
}

function moveCycleDown(e) {
  e.which = e.which || e.keyCode;
  if(e.which === 40)
  lightCycle1.moveDown();
}

function movePlayer1() {
  lightCycle1.startMovingPlayer1();
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