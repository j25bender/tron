class AiLightCycle2{
  constructor(x, y, width, height, dx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.dx = dx;
    // this.changeX = ;
    // this.changeY =;
    this.bikeSize = 30;
  }

  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height, this.dx);
  }

  startMovingPlayer2() {
    this.x--;
  }

  moveRight() {
    this.x += 10;
  }

  moveDown() {
    this.y += 10;
  }

  moveLeft() {
    this.x -= 10;
  }

  moveUp() {
    this.y -= 10;
  }

//   function leaveTrail() {
//   let trailWall = this.lightCycle.length - 1;
//   for(var i = 0; i < number; i++) {
//     this.body.push(new LightCycle(tailWall.x, trailWall.y))
//   }
// }

// grow(number) {
//   let tail = this.body[this.body.length - 1];
//   for(var i = 0; i < number; i++) {
//     this.body.push(new Block(tail.x, tail.y, blockSize, blockSize, 'green', tail.direction));
//   }
// }

}

module.exports = AiLightCycle2;