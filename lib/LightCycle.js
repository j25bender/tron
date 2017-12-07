class LightCycle {
  constructor(x, y, width, height, color, direction) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.direction = direction;
    this.isStopped = true;
    this.collided = false;
    this.cycleArr = [];
    this.cellSize = 4;
  }

  checkCollision(otherCycle = this) {
    for (var i = 0; i < otherCycle.cycleArr.length - 1; i++) {
      let segment = otherCycle.cycleArr[i];

      if (segment.x === this.x && segment.y === this.y) {
        let crashColor = this.color;
        
        return crashColor;
      }
    }
    return false;
  }

  checkOwnTrailCollisions() {
    for (var i = 0; i < this.cycleArr.length - 1; i++) {
      let segment = this.cycleArr[i];
      if (segment.x === this.x && segment.y === this.y) {
        let crashColor = this.color;
        
        return crashColor;
      }
    }
    return false;
  }

  checkBorderCollisions() {
    if (this.x <= 0 || this.x > 599 || this.y <= 0 || this.y > 599) {
      let crashColor = this.color;
        return crashColor;
      }
      return false;
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
} 

module.exports = LightCycle;