class LightCycle {
  constructor(x, y, width, height, color, direction) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.direction = direction;
    this.isStopped = true;
    this.collided = false;
    this.lives = 1;
    this.cycleArr = [];
    this.counter = 61;
    
  }
  draw(context) {
    context.shadowBlur = 10;
    // context.shadowColor = this.color;
    // context.fillRect(this.x, this.y, this.width, this.height);
    
    var xTrail = this.x;
    var yTrail = this.y;
    var cellSize = 20;
    var length = 1;
    this.counter++;

    if(this.counter > 60) {
      this.cycleArr.push({xTrail: xTrail, yTrail: yTrail});  
      this.counter = 0; 
    }

    // var paintDirection = 'right';
      // this.cycleArr.push({xTrail: xTrail + i * cellSize, yTrail: yTrail + i * cellSize});
    
    let newX = this.cycleArr[0].xTrail;
    let newY = this.cycleArr[0].yTrail;    
    
    if (this.direction == 'right') {newX++}
    else if (this.direction == 'left') {newX--}
    else if (this.direction == 'up') {newY--}
    else if (this.direction == 'down') {newY++}
    
    if (newX === -1 || newX === this.w / this.cellSize || newY === -1 || newY === this.h / this.cellSize || this.check_collision(newX, newY, this.cycleArr)) {
      console.log('COLLISION!!!!')
      return;
    }
    
    const trail = {xTrail: newX, yTrail: newY};
    
    this.cycleArr.unshift(trail); 
    
    for(var i = 0; i < this.cycleArr.length; i++) {
      var cycleArrIndex = this.cycleArr[i];
      
      context.fillStyle = 'blue';
      context.fillRect(cycleArrIndex.xTrail, cycleArrIndex.yTrail, cellSize, cellSize);
    }
  }

  check_collision(newX, newY, cycleArr) {
    //This function will check if the provided x/y coordinates exist
    //in an array of cells or not
    for(var i = 0; i < cycleArr.length; i++) {
      if( cycleArr[i].newX === newX && cycleArr[i].newY === newY)
       return true;
    }
    return false;
  }

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
      break
    case 'down':
      this.y += 1;
      break
    case 'left':
      this.x -= 1;
      break
    case 'right':
      this.x += 1;
      break
    }
  }
 
  paint(context) {
    var xTrail = this.x;
    var yTrail = this.y;
    var cellSize = 20;
    var length = 15;
    this.counter++;

    if(this.counter > 30) {
      this.cycleArr.push({xTrail: xTrail, yTrail: yTrail + cellSize});  
      this.counter = 0;         
    }
  }

    // var paintDirection = 'right';
      // this.cycleArr.push({xTrail: xTrail + i * cellSize, yTrail: yTrail + i * cellSize});
    
    let newX = this.cycleArr[0].xTrail;
    let newY = this.cycleArr[0].yTrail;
    
    if (this.direction == 'right') {newX++}
    else if (this.direction == 'left') {newX--}
    else if (this.direction == 'up') {newY--}
    else if (this.direction == 'down') {newY++}
    
    if (newX == -1 || newX == this.w / this.cellSize || newY == -1 || newY == this.h / this.cellSize) {
      return;
    }
    
    const trail = {xTrail: newX, yTrail: newY};
    
    newX++;
    trail.x = newX;
    this.cycleArr.unshift(trail); 
    
    for(var i = 0; i < this.cycleArr.length; i++) {
      var cycleArrIndex = this.cycleArr[i];
      console.log(this.cycleArr[i])
      context.fillStyle = 'blue';
      context.fillRect(cycleArrIndex.xTrail, cycleArrIndex.yTrail, cellSize, cellSize);
    }
  }

}

module.exports = LightCycle;