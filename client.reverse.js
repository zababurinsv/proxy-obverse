let wstun = require("./wstun/index.js");

reverse_client = new wstun.client_reverse();
wstunHost = `ws://web3-tunnel.herokuapp.com/`;
reverse_client.start(process.env.PORT || 6666, wstunHost, 'localhost:4114');