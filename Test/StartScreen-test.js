var {expect} = require('chai');
var StartScreen = require('../lib/StartScreen.js');

describe('StartScreen', () => {
  let lightCycle;

  it('Should have properties', () => {
    expect(StartScreen).to.include({counter: 0})
  })

});