import EventEmitter from "node:events";

function main() {
  const customEmitter = new EventEmitter();
  customEmitter.once('event1', (data) => console.log(data));
  customEmitter.once('event1', (data) => console.log(data));
  // customEmitter.on('event1', (data) => console.log(data));

  customEmitter.emit('event1', 'event 1 emitted');
  customEmitter.emit('event1', 'event 1 emitted');
  customEmitter.emit('event1', 'event 1 emitted');
  customEmitter.emit('event1', 'event 1 emitted');
  customEmitter.emit('event1', 'event 1 emitted');
  customEmitter.emit('event1', 'event 1 emitted');
  // just one time run when we using once

}

main();
