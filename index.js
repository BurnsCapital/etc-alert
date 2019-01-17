require('dotenv').config();
var iot = require('./src/gpio');
var web3 = require('./src/blockchain');
var log = require('./src/logger');

var sleep = require('sleep');
const EventEmitter = require('events');

//set initial state
var alertState = {
    green:  0,
    yellow: 0,
    red:    0
}

function exit() {
  log.info('[index.js] shutting down');
  zeroize();
  setLights(alertState);
  process.exit();
}

async function localtime(time){
 	var timezone = 3600 * 5 *-1;
        var lt = new Date(time*1000+timezone);
	return lt;
}

//reset relay before starting
function zeroize(){
    log.debug('[index.js#zeroize] zeroizing')
    alertState = {
        green : 0,
        yellow : 0,
        red : 0 
    }
}

function setLights(alertState){
    log.debug('[index.js#setlights] setting lights to: ' + JSON.stringify(alertState));
    iot.green.digitalWrite(alertState.green);
    iot.yellow.digitalWrite(alertState.yellow);
    iot.red.digitalWrite(alertState.red);
    return true;
}


/*
 *
 * main functions (testing)
 * 
 */


const mainEmitter = new EventEmitter();

mainEmitter.on('alert', (payload) => {
    log.debug('[index.js#alert] received alert: '+ JSON.stringify(payload));
    alertState = payload;
    setLights(alertState);
})


// test functions
async function main(){
 switch(process.env.NODEENV){
 case "dev":
  log.info('[index#setenv] dev mode');
  setInterval(function(){
    let x = Math.floor(Math.random() * 2);    
    let y = Math.floor(Math.random() * 2);  
    let z = Math.floor(Math.random() * 2);
  
       mainEmitter.emit('alert', {
          green:  x,
          yellow: y,
          red:    z
       });
     },3000);
  break;
   
  case "whisper" :
    log.info('[index#setenv] whisper mode')

   // check if the node is listening
  // log.debug(web3.shh.net.isListening());
//  var web3Check = await web3.shh.net.isListening();
 // web3Check.catch(function(error){
//	log.error(error);
//	}); 
 // if (!web3.shh.net.isListening()){
 //     log.error('[index#whisper] node is not listening');
 //     sleep.sleep(5);
 //     main();
 //  };
   
    web3.shh.subscribe('messages', {topics:['0x657463416c657274']})
    .on('data', (payload) => { 
      log.debug('[index#whisper] message '+ json.stringify(payload) ) 
      mainEmitter.emit( 'alert', payload );
     });
  break;

  default :
    log.error('[index#setenv] no env set');
    exit();
  break;
 }

};

main();
//handle process functions
process.on('SIGINT', exit);
