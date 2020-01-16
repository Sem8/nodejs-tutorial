var events = require('events');

var eventEmitter = new events.EventEmitter();

// create an event handler:
let myEventHandler = () => {
    console.log('I hear a scream');
};

// Assign event handler to event
eventEmitter.on('scream', myEventHandler);

// Fire the scream event
eventEmitter.emit('scream');