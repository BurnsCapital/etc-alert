#### Work in Progress

#### Not functional

🚨 🚨 🚨 Emergeny alert system for network mining anomalies 🚨 🚨 🚨 

This system is designed to run on a raspberry pi zero w with a whisper client onboard and light leds that correspond with etc network alert systems. 

## Use

```
npm run start
```
Runs the node tests and begins the monitoring service. Any whisper messages received with the topic of etcalert `0x657463416c657274` will set the state of the leds on the pi

## To do

add approved defcon list to a contract and have signature matching to enter defcon1 (what ever that means (bells, Air raid horns, etc)



## .env options
NODEENV [dev, whisper]
LOGLEVEL [debug, error, info]
WEB3_URL [whisper provider]
