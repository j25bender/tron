// const LightCycle = require('./LightCycle.js');
// const StartScreen = require('./StartScreen.js');
// const Grid = require('./Grid.js')
// const Directions = require('./Directions.js');
// const canvas = document.getElementById('game');
// const context = canvas.getContext('2d');
// const w = canvas.width;
// const h = canvas.height;
// const cellSize = 10;
// const InitialStartScreen = new StartScreen();
// const onePlayerBttn = new StartScreen(75, 420, 150, 50, 'gray');
// const twoPlayerBttn = new StartScreen(375, 420, 150, 50, 'gray');
// const onePlayerText = new StartScreen(150, 452, 0, 0, '#59CFEE');
// const twoPlayerText = new StartScreen(450, 452, 0, 0, '#59CFEE');
// const center = canvas.width/2;
// const onePlayerDirections = new Directions();
// const twoPlayerDirections = new Directions();
// const spaceBarBttn = new Directions(0, 550, 600, 50, 'gray');
// const spaceBarText = new Directions(170, 570, 600, 30, '#59CFEE');
// let lightCycle1 = new LightCycle(100, 300, 50, 20, 1);
// let aiLightCycle2 = new LightCycle(450, 300, 50, 20, 1);
// const lightCycles = [lightCycle1, aiLightCycle2];
// document.addEventListener('keydown', movementKeys);
// window.addEventListener('load', startScreen);
// canvas.addEventListener('click', mouseClick);
// document.addEventListener('keydown', enterBttn);
// function enterBttn(e) {
//   if(e.code === 'Space') {
//     requestAnimationFrame( function gameLoop() {
//       context.clearRect(0, 0, w, h);
//       lightCycles.forEach( lightCycle => {
//         lightCycle.draw(context);
//         paint();
//       });
//       requestAnimationFrame(gameLoop);
//     });
//   }
// }
// function mouseClick(e) {
//   const x = e.clientX - canvas.offsetLeft;
//   const y = e.clientY - canvas.offsetTop;
//   if( y >= 425 && y <= 480 && x >= 75 && x<= 225) {
//     requestAnimationFrame( function gameLoop() {
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         onePlayerDirections.drawP1Directions(center, context);
//         spaceBarBttn.drawSpacebarBttn(context);
//         spaceBarText.drawSpacebarText(center, context);
//     });
//   } else if ( y >= 425 && y <= 480 && x >= 375 && x<= 525) {
//     requestAnimationFrame( function gameLoop() {
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         twoPlayerDirections.drawP2Directions(center, context);
//         spaceBarBttn.drawSpacebarBttn(context);
//         spaceBarText.drawSpacebarText(center, context);
//     });
//   }
// }
// function startScreen(e) {
//     InitialStartScreen.drawTitle(center, context);
//     onePlayerBttn.drawOnePlayerBttn(context);
//     twoPlayerBttn.drawOnePlayerBttn(context);
//     onePlayerText.drawOnePlayerText(context);
//     twoPlayerText.drawTwoPlayerText(context);    
// }
// function movementKeys(e) {
//   if (e.code === 'ArrowUp') {
//     direction = 'up';
//     lightCycle1.yPos -= 10;
//     // newY--;
//   } else if (e.code === 'ArrowDown') {
//     direction = 'down';
//     lightCycle1.yPos += 10;
//     // newY++;
//   } else if (e.code === 'ArrowLeft') {
//     direction = 'left';
//     lightCycle1.xPos -= 10;
//     // newX--;
//   } else if (e.code === 'ArrowRight') {
//     direction = 'right';
//     lightCycle1.xPos += 10;
//     // newX++;
//   }
// }
// function init() {
//   direction = 'right';
//   createCycleTrail();
// }
// init();
// function createCycleTrail() {
//   var length = 1;
//   cycleArr = [];
//   for(var i = length - 1; i >= 0; i--) {
//     //This will create a horizontal cycle starting from the top left
//     cycleArr.push({x: i, y: 0});
//   }
// }
// function paint() {
//   //Pop out the tail cell and place it infront of the head cell
//   let newX = cycleArr[0].x;
//   let newY = cycleArr[0].y;
//   //These were the position of the head cell.
//   //We will increment it to get the new head position
//   //Lets add proper direction based movement now
//   if(direction == 'right') newX++;
//   else if(direction == 'left') newX--;
//   else if(direction == 'up') newY--;
//   else if(direction == 'down') newY++;
  
//   //Lets add the game over clauses now
//   //This will restart the game if the cycle hits the wall
//   //Lets add the code for body collision
//   //Now if the head of the cycle bumps into its body, the game will restart
//   // || check_collision(newX, newY, cycleArr)
//   if(newX == -1 || newX == w/cellSize || newY == -1 || newY == h/cellSize) {
//     //restart game
//     init();
//     return;
//   }
  
//   const tail = {x: newX, y: newY};
//   cycleArr.unshift(tail); //puts back the tail as the first cell
  
//   for(var i = 0; i < cycleArr.length; i++) {
//     var cycleArrIndex = cycleArr[i];
//     paint_cell(cycleArrIndex.x, cycleArrIndex.y);
//   }
// }
// function paint_cell(x, y) {
//   context.fillStyle = 'blue';
//   context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
// }