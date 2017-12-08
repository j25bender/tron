const { expect } = require('chai');
const { assert } = require('chai');
const LightCycle = require('../lib/LightCycle.js');

global.docuemnt = {
  getElementById: function() {}
}

global.canvas = {
  getContext() {}
}

describe('LightCycle', () => {
  let lightCycle1;
  let lightCycle2;
  let lightCycles;  
  let game;

  beforeEach(() => {
    lightCycle1 = new LightCycle(100, 300, 50, 4, '#7AF6D8', 'right');
    lightCycle2 = new LightCycle(500, 300, 50, 4, '#EE6A2C', 'left');
    lightCycles = [lightCycle1, lightCycle2];
  })

  it('Should be an object', () => {
    expect(lightCycle1).to.be.an('object')
    expect(lightCycle2).to.be.an('object')
  })

  it('Should have a x and y value', () => {
    expect(lightCycle1.x).to.equal(100);
    expect(lightCycle1.y).to.equal(300);
  })

  it('Should move', () =>{
    assert.equal(lightCycle1.x, 100);
    lightCycle1.move();
    assert.equal(lightCycle1.x, 104);
  });

  it('LightCycle should collide with borders', () => {
    lightCycle1.x = 597;
    lightCycle1.move();    
    expect(lightCycle1.checkBorderCollisions()).to.equal('#7AF6D8');
  })

  it('LightCycle should collide with own trail', () => {    
    lightCycle1.direction = 'right';     
    lightCycle1.move();    
    lightCycle1.direction = 'up';     
    lightCycle1.move();  
    lightCycle1.move();      
    lightCycle1.direction = 'left';     
    lightCycle1.move();    
    lightCycle1.direction = 'down';     
    lightCycle1.move();    
    lightCycle1.direction = 'right'; 
    lightCycle1.move();    
    expect(lightCycle1.checkCollision()).to.equal('#7AF6D8');
  })

  it('LightCycle should collide with player2 trail', () => { 
    lightCycle1.x = 292;
    lightCycle2.x = 304;   
    lightCycle1.move();
    lightCycle2.move();
    lightCycle1.move();
    lightCycle2.move();
    expect(lightCycles[0].checkCollision(lightCycles[1])).to.equal('#7AF6D8');
  })

  it('Should have a color', () => {
    expect(lightCycle1.color).to.equal('#7AF6D8');
    expect(lightCycle2.color).to.equal('#EE6A2C');
  })

  it('Should have a direction', () => {
    
    expect(lightCycle1.direction).to.equal('right');
    expect(lightCycle2.direction).to.equal('left');
  })

  it('Should default to not colliding', () => {
    expect(lightCycle1.checkCollision()).to.equal(false);
  })

  it('Should be able to move based on keys', () => {
    lightCycle1.direction = 'up';
    lightCycle1.move()
    expect(lightCycle1.y).to.equal(296)
    lightCycle1.direction = 'down';
    lightCycle1.move()
    expect(lightCycle1.y).to.equal(300)
    lightCycle1.direction = 'left';
    lightCycle1.move()
    expect(lightCycle1.x).to.equal(96)
    lightCycle1.direction = 'right';
    lightCycle1.move()
    expect(lightCycle1.x).to.equal(100)
  })

  it('Should be able to stop movement', () => {
    expect(lightCycle2.y).to.equal(300);
    lightCycle2.direction = 'down';
    lightCycle2.move();
    expect(lightCycle2.y).to.equal(304);
    lightCycle2.direction = 'none'
    expect(lightCycle2.direction).to.equal('none');
    lightCycle2.move();
    expect(lightCycle2.y).to.equal(304);
  })
});