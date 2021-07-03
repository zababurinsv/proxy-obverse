var wstun = require("./wstun/index.js");
let app = require("./index.js")
let server = new wstun.server();
server.start(process.env.PORT || 2222)

// let client = new wstun.client();
// let wstunHost = `ws://localhost:2222`;
// client.start(process.env.PORT || 8888, wstunHost, 'localhost:6666');
let port = 6666;
app.listen(port ,() =>{
    console.log('port: ', port)
    console.log('listening on http://localhost:'+ port);
});
