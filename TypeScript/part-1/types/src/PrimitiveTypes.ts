// boolean, number, string
let isTrue: boolean = false
const isFalse = !false as boolean
// console.log(isFalse)

const nameCihat: string = 'cihat'
// console.log(nameCihat)


// void

function testFunction(): void {
}

// console.log(testFunction())

// strictNullChecking
function doSomething(x: string | null) {
  console.log(typeof x)
  if (x === null) {
    console.log("x is null")
  }
  else {
    console.log(`Hello ${x.toUpperCase()}`)
  }
}

doSomething("test")