// ANY
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
// obj.foo();
// obj();
obj.bar = 100;
// console.log(obj)
obj = 'hello';
const n: number = obj;

// console.log(n, obj)

// object

type coordinate = {
  x: number,
  y: number
}

function printCoord(pt: coordinate) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

// printCoord({x: 3, y: 4})

// unknown

function f1(a: any) {
  a.b();
}

function f2(a: unknown) {
  // a.b();
}

// f1('test')

function error(message: string): never {
  throw new Error(message)
}

function fail() {
  return error("Something failed")
}

function infiniteLoop(): never {
  // while(true){
  //   console.log('test')
  // }
  const test = 12
  throw new Error()
}

// infiniteLoop()