const express = require("express");
const path = require('path');
let cors = require('cors')
const Enqueue = require('express-enqueue')
let compression = require('compression')
let bodyParser = require('body-parser')
let whitelist = require('./whitelist/whitelist.cjs')


const highWaterMark =  20;
let app = express();
app.use(compression())
app.use(bodyParser.json())
app.disable('x-powered-by');
app.use(cors({ credentials: true }));
const queue = new Enqueue({
    concurrentWorkers: 4,
    maxSize: 200,
    timeout: 30000
});

app.use(queue.getMiddleware());
let corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}


app.use( express.static('docs'));

app.get('/test', async (req, res) => {
    console.log('~~~~~~~~~~~ TEST !!! ~~~~~~~~~~~')
    res.send({testSSh:'ok'});
})

app.options('/index', cors(corsOptions))
app.post('/index', async (req, res) => {
    res.send({test:'ok'});
})

console.log('init---------------------------------->>>>')
app.options('/*', cors(corsOptions))
app.get('/*', async (req, res) => {
    console.log('init---------------------------------->>>>2')
    res.status(200).send({test:'test'});
})

app.use(queue.getErrorMiddleware())
module.exports = app

