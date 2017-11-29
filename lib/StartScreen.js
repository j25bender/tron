class StartScreen {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    drawTitle(context) {
        context.font = '100px serif';
        context.textBaseline = 'middle';
        context.strokeText('TRON', 160, 250);
    }

    drawOnePlayerBttn(context) {
        context.fillStyle = this.color;        
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    drawTwoPlayerBttn(context) {
        context.fillStyle = this.color;                
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    drawOnePlayerText(context) {
        context.strokeStyle = this.color;                
        context.font = '20px serif';
        context.strokeText('ONE PLAYER', this.x, this.y);        
    }

    drawTwoPlayerText(context) {
        context.strokeStyle = this.color;                        
        context.font = '20px serif';
        context.strokeText('TWO PLAYER', this.x, this.y);        
    }
}

module.exports = StartScreen;