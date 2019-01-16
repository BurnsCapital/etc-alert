var assert = require('assert');

//* unit under test *//
var gpio = require('../../src/gpio');


module.exports =
describe('gpio test', function() {
      it('green led works', function() {
        assert.equal(gpio.green.gpio, 17, "green led is on pin 17")
        assert.equal(gpio.green.digitalRead(), 0, "green gpio is in state 0");
        gpio.green.digitalWrite(1);
        assert.equal(gpio.green.digitalRead(), 1, "green gpio is in state 1");
        gpio.green.digitalWrite(0);
        assert.equal(gpio.green.digitalRead(), 0, "green gpio is in state 0");
      });
      it('yellow led works', function() {
        assert.equal(gpio.yellow.gpio, 27, "yellow led is on pin 27")
        assert.equal(gpio.yellow.digitalRead(), 0, "yellow gpio is in state 0");
        gpio.yellow.digitalWrite(1);
        assert.equal(gpio.yellow.digitalRead(), 1, "yellow gpio is in state 1");
        gpio.yellow.digitalWrite(0);
        assert.equal(gpio.yellow.digitalRead(), 0, "yellow gpio is in state 0");
      });
      it('red led works', function() {
        assert.equal(gpio.red.gpio, 22, "red led is on pin 22")
        assert.equal(gpio.red.digitalRead(), 0, "red gpio is in state 0");
        gpio.red.digitalWrite(1);
        assert.equal(gpio.red.digitalRead(), 1, "red gpio is in state 1");
        gpio.red.digitalWrite(0);
        assert.equal(gpio.red.digitalRead(), 0, "red gpio is in state 0");
      });

});
