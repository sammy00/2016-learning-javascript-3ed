const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
  constructor(seconds, superstitious) {
    super();
    this.seconds = seconds;
    this.superstitious = !!superstitious;
  }
  go() {
    const countdown = this; // this prevents changing of this in callbacks 
    const timeoutIds = [];
    return new Promise(function (resolve, reject) {
      for (let i = countdown.seconds; i >= 0; i--) {
        timeoutIds.push(setTimeout(() => {
          if (countdown.superstitious && i === 13) {
            // clear all pending timeouts 
            timeoutIds.forEach(clearTimeout);
            return reject(new Error("DEFINITELY NOT COUNTING THAT"));
          }
          countdown.emit('tick', i);
          if (i === 0) resolve();
        }, (countdown.seconds - i) * 1000));
      }
    });
  }
}

const c = new Countdown(15, true)
  .on('tick', i => {
    if (i > 0) {
      console.log(`${i}...`);
    }
  });
c.go().then(() => console.log('GO!'))
  .catch(err => console.error(err.message));