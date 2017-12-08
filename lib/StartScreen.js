class StartScreen {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.counter = 0;
  }
  drawTitle(center, context) {
    context.strokeStyle = '#59CFEE';                        
    context.textAlign = 'center';
    context.font = '125px serif';
    context.strokeText('TRON', center, 250);
  }
  drawStartBttn(context) {
    context.fillStyle = this.color;        
    context.fillRect(this.x, this.y, this.width, this.height);
  }
  drawStartText(context) {
    context.strokeStyle = this.color;                
    context.font = '20px serif';
    context.strokeText('START', this.x, this.y);        
  }
//   drawTwoPlayerBttn(context) {
//     context.fillStyle = this.color;                
//     context.fillRect(this.x, this.y, this.width, this.height);
//   }
//   drawTwoPlayerText(context) {
//     context.strokeStyle = this.color;                        
//     context.font = '20px serif';
//     context.strokeText('TWO PLAYER', this.x, this.y);        
//   }
}
module.exports = StartScreen;