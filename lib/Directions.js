class Directions {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    drawP1Directions(center, context) {
        context.strokeStyle = 'gray';                                
        context.font = '40px serif';
        context.textAlign = 'center';

        context.strokeText('RETURN FOR TURBO', center, 150);
        context.strokeText('UP, DOWN, LEFT AND RIGHT', center, 200);
        context.strokeText('KEYS TO STEER', center, 250);
    }

    drawP2Directions(center, context) {
        context.strokeStyle = 'gray';                                
        context.font = '35px serif';
        context.textAlign = 'center';

        context.strokeText('PLAYER 1', center, 50);
        context.strokeText('TAB FOR TURBO', center, 100);
        context.strokeText('W = UP', center, 140);
        context.strokeText('A = LEFT, S = DOWN, D = RIGHT', center, 180);
        context.strokeText('KEYS TO STEER', center, 220);

        context.strokeText('PLAYER 2', center, 335);        
        context.strokeText('RETURN FOR TURBO', center, 385);
        context.strokeText('UP, DOWN, LEFT AND RIGHT', center, 425);
        context.strokeText('KEYS TO STEER', center, 465);
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