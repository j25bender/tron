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

    move() {
        console.log('move!')
    }
}

module.exports = LightCycle;