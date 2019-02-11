const EventEmitter = require('events');
const uuid = require('uuid');

console.log(uuid.v4());

class Logger extends EventEmitter {
  log(msg) {
    //call event
    this.emit('message', { id: uuid.v4(), msg });
  }
}

const logger = new Logger();

logger.on('message', data => console.log('Called Listener: ', data));

logger.log('Hello yo');
logger.log('Hi');

// module.exports = Logger;
