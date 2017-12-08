const {expect} = require('chai');
const Directions = require('../lib/Directions.js');
const LightCycle = require('../lib/LightCycle.js');

describe('Directions', () => {

  it('Should have properties', () => {
    let directions = new LightCycle();    
    expect(directions).to.include({x: this.x});
  })
});