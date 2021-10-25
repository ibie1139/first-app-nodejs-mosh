const EventEmitter = require('events'); // not 'event'
const emitter = new EventEmitter(); // object 1

function log(message) {
  // Send an HTTP request
  console.log(message);

  // raise an event
  emitter.emit('messageLogged', { id: 1, url: 'http://' });
}

module.exports.log = log; // create module
