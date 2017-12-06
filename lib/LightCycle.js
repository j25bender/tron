// const Directions = require('./Directions.js');

class LightCycle {
  constructor(x, y, width, height, color, direction, head) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.direction = direction;
    this.isStopped = true;
    this.collided = false;
    this.lives = 1;
    this.cycleArr = [];
    this.cellSize = 4;
  }

  checkBorderCollisions() {
    if (this.x <= -1 || this.x > 601 || this.y <= -1 || this.y > 601) {
      this.collided = true;
      let crashColor = this.color;
      return crashColor;
    }
  }

  p1Wins(context) {
    context.strokeStyle = this.color;                                
    context.font = '40px serif';            
    context.strokeText('PLAYER ONE WINS!', 300, 150);
  }
  
  p2Wins(context) {
    context.strokeStyle = this.color;                                
    context.font = '40px serif';            
    context.strokeText('PLAYER TWO WINS!', 300, 150);
  }

  // checkOpponentTrailCollisions() {

  // }

  // checkOwnTrailCollisions() {

  // }

  // checkHeadOnCollisions() {

  // }

  draw(context) {
    let length = 1;
      for (let i = 0; i < this.cycleArr.length; i++) {
        let cycleArrIndex = this.cycleArr[i];
        
        context.shadowBlur = 10;      
        context.shadowColor = this.color;
        context.fillStyle = this.color;   
        context.fillRect(cycleArrIndex.x, cycleArrIndex.y, this.cellSize, this.cellSize);
      
    }
  }

  // checkCollision(newX, newY, cycleArr) {
  //   //This function will check if the provided x/y coordinates exist
  //   //in an array of cells or not
  //   for (var i = 0; i < this.cycleArr.length; i++) {
  //     if ( this.cycleArr[i].newX === newX && this.cycleArr[i].newY === newY) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  handleKeyP1(e) {
    var keyCode = e.keyCode;
    var keyboard = {
      
      '37'() {
        if (this.direction !== 'right' &&
          this.direction !== 'none') {
          this.direction = 'left'
          this.height = 20;
          this.width = 40;
        }
      },
      '39'() {
        if (this.direction !== 'left' &&
          this.direction !== 'none') {
          this.direction = 'right'
          this.height = 20;
          this.width = 40;
        }
      },
      '38'() {
        if (this.direction !== 'down' &&
          this.direction !== 'none') {
          this.direction = 'up'
          this.height = 40;
          this.width = 20;
        }
      },
      '40'() {
        if (this.direction !== 'up' &&
          this.direction !== 'none') {
          this.direction = 'down'
          this.height = 40;
          this.width = 20;
        }
      }
    }
    
    if (keyboard[ keyCode ]) {
      keyboard[ keyCode ].call(this);
    }
  }

  handleKeyP2(e) {
    var keyCode = e.keyCode;
    var keyboard = {

      '83'() {
        if (this.direction !== 'up' &&
          this.direction !== 'none') {
          this.direction = 'down'
          this.height = 40;
          this.width = 20;
        }
      },
      '65'() {
        if (this.direction !== 'right' &&
          this.direction !== 'none') {
          this.direction = 'left'
          this.height = 20;
          this.width = 40;
        }
      },
      '68'() {
        if (this.direction !== 'left' &&
          this.direction !== 'none') {
          this.direction = 'right'
          this.height = 20;
          this.width = 40;
        }
      },
      '87'() {
        if (this.direction !== 'down' &&
          this.direction !== 'none') {
          this.direction = 'up'
          this.height = 40;
          this.width = 20;
        }
      }
    }

    if (keyboard[ keyCode ]) {
      keyboard[ keyCode ].call(this);
    }
  }

  move() {
    switch (this.direction) {
    case 'up':
      this.y -= 1;
      break;
    case 'down':
      this.y += 1;
      break;
    case 'left':
      this.x -= 1;
      break;
    case 'right':
      this.x += 1;
      break;
    case 'none':
      this.x = this.x;
      break;
    }
    this.cycleArr.push({
      x: this.x, y: this.y
    }); 
  }

  stopMovement() {
    if (this.collided === true) {
      this.direction = 'none';
    }
  }
}

module.exports = LightCycle;