const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events'); // a class, camel case
const http = require('http');

var pathObj = path.parse(__filename);
console.log(pathObj);

var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);

const files = fs.readdirSync('./'); // synchronous method -- not recommend
console.log(files);

fs.readdir('./', (err, files) => { // this `file` has nothing to do with the upper `file` variable
    if (err) {console.log('Err: ', err);}
    if (files) {console.log('Files are ', files);}
});

const logger = require('./logger');
console.log(logger);
logger.log('message'); // see: 'message', but no 'Listener called'
// because the EMITTER OBJECT USED HERE is NOT the one 'logger.js' file.

const emitter = new EventEmitter(); // emitter: object 2 - comparing the `emitter` in file 'logger.js'
// register an event listener
emitter.on('messageLogged', function(arg) {
    console.log('Listener called', arg);
});

// raise an event
// emitter.emit('messageLogged', { id: 1, url: 'http://' });
// emitter.emit('messageLogged', id: 1, url: 'http://');

// How to fix it:
const LoggerEventEmitter = require('./loggerEventEmitter'); // class
const loggerEventEmitter = new LoggerEventEmitter(); // object

// Register for the specif logger object
loggerEventEmitter.on('messageLogged', (arg) => {
  console.log('Listerner called.', arg);
});

loggerEventEmitter.log('message for loggerEventEmitter');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello World');
    res.end();
  }

  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3, 4]));
    res.end();
  }
});

server.listen(3000);
console.log('New connection ...');
