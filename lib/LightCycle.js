// const Directions = require('./Directions.js');
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
    this.cellSize = 4;
    this.p1Lives = document.getElementById('update-p1-lives');    
    this.p2Lives = document.getElementById('update-p2-lives');
  }
  checkBorderCollisions() {
    if (this.x <= 0 || this.x > 599 || this.y <= 0 || this.y > 599) {
      this.collided = true;
      this.decrementLife();
      this.stopMovement();
      if (this.p1Lives < 3 && this.p2Lives < 3) {
        this.stopMovement();
        // midRoundScreen();
      } else if (this.p1Lives <= 0 || this.p2Lives <= 0) {
        console.log('Game Over');
        this.stopMovement();
        // endGameScreen();
      }
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
  //   for (var i = 0; i < this.cycleArr.length - this.cellSize; i++) {
  //     console.log(this.cycleArr[i][0], this.cycleArr[i][1]);
  //     if (this.cycleArr[i][0] <= this.x &&
  //         this.cycleArr[i][1] <= this.y ||

  //         this.cycleArr[i][0] <= this.x + this.cellSize &&
  //         this.cycleArr[i][1] <= this.y ||

  //         this.cycleArr[i][0] <= this.x  &&
  //         this.cycleArr[i][1] <= this.y + this.cellSize ||

  //         this.cycleArr[i][0] <= this.x + this.cellSize &&
  //         this.cycleArr[i][1] <= this.y + this.cellSize) {

  //       return true;
  //     }
  //   }
  //   return false;
  // }

  checkOwnTrailCollisions() {
    for (var i = 0; i < this.cycleArr.length - 1; i++) {
      let segment = this.cycleArr[i];

      if (segment.x === this.x && segment.y === this.y) {
        // console.log('segment', segment);
        // console.log('this.x', this.x);
        // console.log('LightCycle', LightCycle);
        return true;
        // this.decrementLife();
      }
    }
    return false;
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
  handleKeyP1(e) {
    e.preventDefault();    
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
    e.preventDefault();    
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
    console.log(this.p2Lives.innerText)   
    if (this.collided = true && this.color === '#EE6A2C') {
      this.p2Lives.innerText--;
      this.p2Lives.innerText = this.p2Lives.innerText;
    } else if (this.collided = true && this.color === '#7AF6D8') {
      this.p1Lives.innerText--;
      this.p1Lives.innerText = this.p1Lives.innerText;
    }
  }
} //comment
module.exports = LightCycle;