const Directions = require('./Directions.js');

class LightCycle {
  constructor(x, y, width, height, color, direction) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.direction = direction;
    // this.p1Head = this.lightCycle1[x: x, y: y];
    // this.p2Head = this.lightCycle2[]
    this.isStopped = true;
    this.p1Collided = false;
    this.p2Collided = false;
    this.p1Lives = 3;
    this.p2Lives = 3;
    this.cycleArr = [];
    this.counter = 61;
    this.cellSize = 4;
  }

  checkBorderCollisions(context) {
    if (this.x <= -1 || this.x > 601 || this.y <= -1 || this.y > 601) {
      this.collided = true;
      this.decrementLife();
      this.checkWinner(context);
      this.stopMovement();
      if (this.p1Lives > 0 && this.p2Lives > 0) {
        this.stopMovement();
        // midRoundScreen();
      } else if (this.p1Lives <= 0 || this.p2Lives <= 0) {
        console.log('Game Over');
        this.stopMovement();
        // endGameScreen();
      }
    }
  }

  checkWinner(context) {
    if(this.color === '#7AF6D8') {
      this.p1Wins();
    } else if (this.color === '#EE6A2C') {
      this.p2Wins();
    }
  }

  p1Wins() {
    this.p2Lives -=1;
  }

  p2Wins() {
    this.p1Lives -=1;
  }

  // checkOpponentTrailCollisions() {

  // }

  checkOwnTrailCollisions() {
    // debugger;
    for (var i = 0; i < this.cycleArr.length - 1; i++) {
      let segment = this.cycleArr[i];

      if (segment.x === this.x && segment.y === this.y) {
        console.log('collision sukka');
        return true;
        // this.p1Collided = true;
        // this.decrementLife();
      }
    }
    return false;
    // this.checkWinner(context);
  }

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
          this.height = 4;
          this.width = 4;
        }
      },
      '39'() {
        if (this.direction !== 'left' &&
          this.direction !== 'none') {
          this.direction = 'right'
          this.height = 4;
          this.width = 4;
        }
      },
      '38'() {
        if (this.direction !== 'down' &&
          this.direction !== 'none') {
          this.direction = 'up'
          this.height = 4;
          this.width = 4;
        }
      },
      '40'() {
        if (this.direction !== 'up' &&
          this.direction !== 'none') {
          this.direction = 'down'
          this.height = 4;
          this.width = 4;
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
          this.height = 4;
          this.width = 4;
        }
      },
      '68'() {
        if (this.direction !== 'left' &&
          this.direction !== 'none') {
          this.direction = 'right'
          this.height = 4;
          this.width = 4;
        }
      },
      '87'() {
        if (this.direction !== 'down' &&
          this.direction !== 'none') {
          this.direction = 'up'
          this.height = 4;
          this.width = 4;
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
      this.y -= this.cellSize;
      break;
    case 'down':
      this.y += this.cellSize;
      break;
    case 'left':
      this.x -= this.cellSize;
      break;
    case 'right':
      this.x += this.cellSize;
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
    if (this.p1Collided === true || this.p2Collided === true) {
      this.direction = 'none';
    }
  }

  decrementLife() {
    if (this.p2Collided === true) {
      this.p2lives -= 1;
    } else if (this.p1Collided === true) {
      this.p1lives -= 1;
    }
  }
}

module.exports = LightCycle;