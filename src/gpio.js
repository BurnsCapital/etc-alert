console.time('GPIO module');
var Gpio = require('pigpio').Gpio;
var  green = new Gpio(17, {mode: Gpio.OUTPUT});
var  yellow = new Gpio(27, {mode: Gpio.OUTPUT});
var  red = new Gpio(22, {mode: Gpio.OUTPUT});


console.timeEnd('GPIO module');

module.exports = {
    green: green,
    yellow: yellow,
    red: red
};
