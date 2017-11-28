class LightCycle{
  constructor(x, y, width, height, dx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.dx = dx;
  }

  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height, this.dx);
  }

  moveRight() {
    this.x += 10;
    console.log('move!')
  }

//   moveDown() {
//     this.x++
//     console.log('move!')
//   }

//   moveLeft() {
//     this.x++
//     console.log('move!')
//   }

//   moveRight() {
//     this.x++
//     console.log('move!')
//   }
}

module.exports = LightCycle;