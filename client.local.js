var wstun = require("./wstun/index.js");

client = new wstun.client();
wstunHost = `ws://web3-tunnel.herokuapp.com/`;
client.start(process.env.PORT || 4444, wstunHost, 'localhost:6666');