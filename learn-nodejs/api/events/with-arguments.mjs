import EventEmitter from "node:events";

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on('event', function (a, b) {
  console.log(a, b, this, this === myEmitter);
  console.log(this);
})

export default function main() {
  myEmitter.emit('event', 'a', 'b');
  console.log(myEmitter.eventNames());
}
