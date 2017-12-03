const LightCycle = require('./LightCycle.js');
const StartScreen = require('./StartScreen.js');
const Grid = require('./Grid.js')
const Directions = require('./Directions.js');

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const w = 600;
const h = 600;
const cellWidth = 10;

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
let aiLightCycle2 = new LightCycle(450, 300, 50, 20, 1);

const lightCycles = [lightCycle1, aiLightCycle2];

document.addEventListener('keydown', movementKeys);
window.addEventListener('load', startScreen);
canvas.addEventListener('click', mouseClick);
document.addEventListener('keydown', enterBttn);

function enterBttn(e) {
    if(e.code === 'Space') {
        console.log('LOAD LEVEL ONE: PLAYER VS. MACHINE!');
        requestAnimationFrame( function gameLoop() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            lightCycles.forEach( lightCycle => {
              lightCycle.draw(context);
            });
            requestAnimationFrame(gameLoop);
          });
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
        });
    } else if ( y >= 425 && y <= 480 && x >= 375 && x<= 525) {
        console.log('two player directions')
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

function movementKeys(e) {
  if (e.code === 'ArrowUp') {
    direction = 'up';
    lightCycle1.yPos -= 10;
  } else if (e.code === 'ArrowDown') {
    direction = 'down';
    lightCycle1.yPos += 10;
  } else if (e.code === 'ArrowLeft') {
    direction = 'left';
    lightCycle1.xPos -= 10;
  } else if (e.code === 'ArrowRight') {
    direction = 'right';
    lightCycle1.xPos += 10;
  }
}

function init()
{
  direction = "right"; //default direction
  create_snake();
  // create_food(); //Now we can see the food particle
  //finally lets display the score
  score = 0;
  
  //Lets move the snake now using a timer which will trigger the paint function
  //every 60ms
  if(typeof game_loop != "undefined") clearInterval(game_loop);
  game_loop = setInterval(paint, 60);
}
init();

function create_snake()
{
  var length = 5; //Length of the snake
  snake_array = []; //Empty array to start with
  for(var i = length-1; i>=0; i--)
  {
    //This will create a horizontal snake starting from the top left
    snake_array.push({x: i, y:0});
  }
}

//Lets paint the snake now
function paint()
{
  //To avoid the snake trail we need to paint the BG on every frame
  //Lets paint the canvas now
  context.fillStyle = "white";
  context.fillRect(0, 0, w, h);
  context.strokeStyle = "black";
  context.strokeRect(0, 0, w, h);
  
  //The movement code for the snake to come here.
  //The logic is simple
  //Pop out the tail cell and place it infront of the head cell
  var newX = snake_array[0].x;
  var newY = snake_array[0].y;
  //These were the position of the head cell.
  //We will increment it to get the new head position
  //Lets add proper direction based movement now
  if(direction == "right") newX++;
  else if(direction == "left") newX--;
  else if(direction == "up") newY--;
  else if(direction == "down") newY++;
  
  //Lets add the game over clauses now
  //This will restart the game if the snake hits the wall
  //Lets add the code for body collision
  //Now if the head of the snake bumps into its body, the game will restart
  // || check_collision(newX, newY, snake_array)
  if(newX == -1 || newX == w/cellWidth || newY == -1 || newY == h/cellWidth)
  {
    //restart game
    init();
    //Lets organize the code a bit now.
    return;
  }
  
  //Lets write the code to make the snake eat the food
  //The logic is simple
  //If the new head position matches with that of the food,
  //Create a new head instead of moving the tail
  if(true)
  {
    var tail = {x: newX, y: newY};
    score++;
    //Create new food
    // create_food();
  }
  else
  {
    var tail = snake_array.pop(); //pops out the last cell
    tail.x = newX; 
    tail.y = newY;
  }
  //The snake can now eat the food.
  
  snake_array.unshift(tail); //puts back the tail as the first cell
  
  for(var i = 0; i < snake_array.length; i++)
  {
    var snakeArrIndex = snake_array[i];
    //Lets paint 10px wide cells
    paint_cell(snakeArrIndex.x, snakeArrIndex.y);
  }
  
  //Lets paint the food
  // paint_cell(food.x, food.y);
  //Lets paint the score
  // var score_text = "Score: " + score;
  // context.fillText(score_text, 5, h-5);
}

function paint_cell(x, y) {
  context.fillStyle = "blue";
  context.fillRect(x*cellWidth, y*cellWidth, cellWidth, cellWidth);
}