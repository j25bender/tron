class Directions {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    drawP1Directions(center, context) {
        context.strokeStyle = '#59CFEE';                                
        context.textAlign = 'center';
        setInterval( function() {
            context.font = '40px serif';            
            context.strokeText('RETURN FOR TURBO', center, 150);
        }, 500 );
        setInterval( function() {
            context.font = '40px serif';                        
            context.strokeText('UP, DOWN, LEFT AND RIGHT', center, 200);
        }, 1500 );
        setInterval( function() {
            context.font = '40px serif';                        
            context.strokeText('KEYS TO STEER', center, 250);            
        }, 2000 );
    }

    drawP2Directions(center, context) {
        context.strokeStyle = '#59CFEE';                                
        context.textAlign = 'center';
        setInterval( function() { 
            context.font = '35px serif';            
            context.strokeText('PLAYER 1', center, 50);
            context.strokeText('PLAYER 2', center, 335);                    
        }, 500 );
        setInterval( function() {
            context.font = '35px serif';                        
            context.strokeText('TAB FOR TURBO', center, 100);
            context.strokeText('RETURN FOR TURBO', center, 385);            
        }, 1000 );
        setInterval( function() {
            context.font = '35px serif';                                    
            context.strokeText('W = UP', center, 140);
        }, 1500 );
        setInterval( function() {
            context.font = '35px serif';                        
            context.strokeText('A = LEFT, S = DOWN, D = RIGHT', center, 180);
            context.strokeText('UP, DOWN, LEFT AND RIGHT', center, 425);            
        }, 2000 );
        setInterval( function() {
            context.font = '35px serif';                        
            context.strokeText('KEYS TO STEER', center, 220);
            context.strokeText('KEYS TO STEER', center, 465);            
        }, 2500 );
    }

    drawSpacebarBttn(context) {
        context.fillStyle = this.color;                
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    drawSpacebarText(center, context) {
        context.strokeStyle = this.color;                        
        context.font = '20px serif';
        context.textAlign = 'center';
        context.strokeText('PRESS SPACEBAR TO START', center, this.y);
    }

    drawEnterBttn(context) {
        context.fillStyle = this.color;                
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    drawEnterText(center, context) {
        context.strokeStyle = this.color;                        
        context.font = '20px serif';
        context.textAlign = 'center';
        context.strokeText('PRESS ENTER TO RESTART', center, this.y);
    }
}

module.exports = Directions;