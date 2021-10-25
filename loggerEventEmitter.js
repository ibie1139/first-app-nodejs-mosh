const EventEmitter = require('events'); // class
// const emitter = new EventEmitter(); -- we don't need this anymoree

class LoggerEventEmitter extends EventEmitter {
  log(message) { // method in class without keyword 'function'
    // send an HTTP request
    console.log(message);

    // raise an event
    // emitter.emit('messageLogged', { id: 1, url: 'http://' });
    this.emit('messageLogged', { id: 1, url: 'http://' });
  };
}

module.exports = LoggerEventEmitter;

// LoggerEventEmitter is a subclass of EventEmitter, so it has all the properties of EventEmitter, puls its own fields and methods.
// The emitter that raises the events is not itself.
// We use 'it' to represent the class, `LoggerEventEmitter`, itself in JavaScript.