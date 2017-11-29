class StartScreen {
    constructor() {
        
    }

    drawTitle(context) {
        context.font = '100px serif';
        context.textBaseline = 'middle';
        context.strokeText('TRON', 160, 250);
    }

    drawOnePlayerBttn(context) {
        context.fillStyle = "gray";        
        context.fillRect(75, 420, 150, 50);
    }

    drawTwoPlayerBttn(context) {
        context.fillRect(375, 420, 150, 50);
    }

    drawOnePlayerText(context) {        
        context.font = '20px serif';
        context.strokeText('ONE PLAYER', 90, 445);        
    }

    drawTwoPlayerText(context) {
        context.font = '20px serif';
        context.strokeText('TWO PLAYER', 390, 445);        
    }
}

module.exports = StartScreen;