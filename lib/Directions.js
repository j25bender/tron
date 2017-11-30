class Directions {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    drawP1Directions(context) {
        context.strokeStyle = 'gray';                                
        context.font = '40px serif';
        context.strokeText('RETURN FOR TURBO', 100, 150);
        context.strokeText('UP, DOWN, LEFT AND RIGHT', 40, 200);
        context.strokeText('KEYS TO STEER', 150, 250);
    }

    drawP2Directions(context) {
        context.strokeStyle = 'gray';                                
        context.font = '40px serif';

        context.strokeText('PLAYER 1', 200, 50);
        context.strokeText('TAB FOR TURBO', 135, 100);
        context.strokeText('W = UP, S = DOWN, A = LEFT AND D = RIGHT', 1, 200);
        context.strokeText('KEYS TO STEER', 150, 250);

        context.strokeText('PLAYER 2', 200, 325);        
        context.strokeText('RETURN FOR TURBO', 100, 350);
        context.strokeText('UP, DOWN, LEFT AND RIGHT', 40, 370);
        context.strokeText('KEYS TO STEER', 150, 400);
    }

    drawSpacebarBttn(context) {
        context.fillStyle = this.color;                
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    drawSpacebarText(context) {
        context.strokeStyle = this.color;                        
        context.font = '20px serif';
        context.strokeText('PRESS SPACEBAR TO START', this.x, this.y);
    }

    
    // var showText = function (target, message, index, interval) {    
    //     if (index < message.length) { 
    //       document.getElementById('canvas-container').append(message[index++]); 
    //       setTimeout(function () { showText(target, message, index, interval); }, interval); 
    //     } 
    //   }
      
        
    //      showText("#canvas-container", "Hello, World!", 0, 500);          
      
    
    // typeWriter = (typeWriter) => {
    //     const txt = 'Lorem ipsum typing effect!';
    //     const speed = 50;
    //   for (const i = 0; i < txt.length; i++) {
        
    //     document.getElementById("canvas-container").innerHTML += txt.charAt(i);
    //     setTimeout(typeWriter, speed);
    //   }
    // }
}

module.exports = Directions;