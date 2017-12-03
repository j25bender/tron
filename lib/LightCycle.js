class LightCycle {
  constructor(xPos, yPos, width, height, xVelocity, yVelocity) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.xVelocity = 10;
    this.yVelocity = 10;
    this.cycleSize = 3;
  }
  
  draw(context) {
    context.fillRect(this.xPos, this.yPos, this.width, this.height, this.dx);
  }

  // moveOnStartGame() {
  //   this.xPos++;
  // }

  // changeDirection() {
  //   if ('ArrowUp') {
  //     this.yPos--;
  //   }
  //   if ('ArrowDown') {
  //     this.yPos++;
  //   }
  //   if ('ArrowLeft') {
  //     this.xPos--;
  //   }
  //   if ('ArrowRight') {
  //     this.xPos++;
  //   }
  // }
}

module.exports = LightCycle;