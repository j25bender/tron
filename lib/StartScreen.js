class StartScreen {
    constructor(font, direction, strokeText, x, y) {
        this.font = font;
        this.direction = direction;
        this.strokeText = strokeText;
        this.x = x;
        this.y = y;
    }

    drawText(context) {
        context.font = '100px serif';
        context.strokeText('TRON', 160, 250);
    }
}

module.exports = StartScreen;