/*
* web3 stuff
*/
console.time('web3');
const Web3 = require('web3');
console.timeEnd('web3');
module.exports = new Web3(new Web3.providers.WebsocketProvider(process.env.WEB3_URL));
