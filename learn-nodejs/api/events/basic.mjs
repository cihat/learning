import events from "node:events";

const eventEmitter = new events.EventEmitter();

function hi() {
  console.log("Hello World");
}

export default function main() {
  eventEmitter.on('hi', hi);
  eventEmitter.emit('hi');
}
