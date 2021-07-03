var wstun = require("./wstun/index.js");
let app = require("./index.js")
let server = new wstun.server();
server.start(process.env.PORT || 5001)

// let client = new wstun.client();
// let wstunHost = `ws://localhost:2222`;
// client.start(process.env.PORT || 8888, wstunHost, 'localhost:6666');
