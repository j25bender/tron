class StartScreen {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    drawTitle(context) {
        context.font = '100px serif';
        context.textBaseline = 'middle';
        context.strokeText('TRON', 160, 250);
    }

    drawOnePlayerBttn(context) {
        context.font = '20px serif';
        context.strokeText('ONE PLAYER', 75, 450);
        context.fillStyle = "gray";
        context.fillRect(75, 420, 150, 50);
    }

    drawTwoPlayerBttn(context) {
        
        context.fillStyle = "gray";
        context.fillRect(375, 420, 150, 50);
    }

    drawTwoPlayerText(context) {
        
        context.font = '20px serif';
        context.strokeText('TWO PLAYER', 375, 450);
        context.fillStyle = "red";
        
    }
}

module.exports = StartScreen;