var {expect} = require('chai');
var StartScreen = require('../lib/StartScreen.js');

describe('StartScreen', () => {
  let lightCycle;

  it('Should have properties', () => {
    let ss = new StartScreen();
    expect(ss).to.include({counter: 0})
  })

});