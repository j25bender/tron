var {expect} = require('chai');
var LightCycle = require('../lib/LightCycle.js');

describe('LightCycle', () => {
  let lightCycle;

  beforeEach(() => {
    lightCycle = new LightCycle(100, 300, 50, 4, '#7AF6D8', 'right');
  })

  it('Should be an object', () => {
    expect(lightCycle).to.be.an('object')
  })

  it('Should have properties', () => {
    expect(lightCycle).to.include({collided: false})
  })

  it('Should be able to take parameters', () => {
    let lightCycle2 = new LightCycle(20, 20, 20, 20, 'red', 'left')

    expect(lightCycle).to.deep.equal({x: 300, y: 100, width: 4, height: 4, color: '#7AF6D8', direction: 'right', lives: 3})
    expect(lightCycle).to.deep.equal({x: 300, y: 450, width: 4, height: 4, color: '#EE6A2C', direction: 'left'})
  })

  it('Should have a x and y value', () => {
    expect(lightCycle.x).to.equal(4);
    expect(lightCycle.y).to.equal(4);
  })

  it('Should have a width and a height', () => {
    expect(lightCycle.width).to.equal(10);
    expect(lightCycle.height).to.equal(10);
  })

  it('Should have a color', () => {
    expect(lightCycle.color).to.equal('#7AF6D8');
    expect(lightCycle.color).to.equal('#EE6A2C');
  })

  it('Should have a direction', () => {
    expect(lightCycle1.direction).to.equal('left');
    expect(lightCycle2.direction).to.equal('right');
  })

  it('Should default to not colliding', () => {
    expect(lightCycles.collided).to.equal(false);
  })

  it('Should default to having 3 lives', () => {
    expect(lightCycles.lives).to.equal(3);
  })

  it('Should be able to move based on keys', () => {
    lightCycle1.direction = 'up';
    lightCycle1.move()
    expect(lightCycle1.y).to.equal(0)
    lightCycle1.direction = 'down';
    lightCycle1.move()
    expect(lightCycle1.y).to.equal(4)
    lightCycle1.direction = 'left';
    lightCycle1.move()
    expect(lightCycle1.x).to.equal(0)
    lightCycle1.direction = 'right';
    lightCycle1.move()
    expect(lightCycle1.x).to.equal(4)
  })

  it('Should be able to stop movement', () => {
    expect(player.y).to.equal(10);
    player.direction = 'down';
    player.move();
    expect(player.y).to.equal(20);
    player.stopMovement();
    expect(player.direction).to.equal('none');
    player.move();
    expect(player.y).to.equal(20);
  })

  it('Should lose a life if it collides', () => {
    expect(player.lives).to.equal(3);
    player.collided = true;
    player.removeLife();
    expect(player.lives).to.equal(2);
  })

});