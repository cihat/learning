// Interface

interface Person {
  name: string;
  age: number;
}

function greet(person: Person): Person {
  console.log(person.age)
  console.log(person.name)
  return person
}

// new greet({
//   name: "Cihat",
//   age: 23
// })

// Class

class Car {
  make: string;
  model: string;
  year: string;

  constructor(make: string, model: string, year: string) {
    this.make = make;
    this.model = model;
    this.year = year
  }

  drive() {
    console.log(`Driving my ${this.year} ${this.make} ${this.model}`)
  }
}

// const passat = new Car("tet", "2010", "2020")
// passat.drive()

// enum

enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

// console.log(Direction.Right)

// interface http {}

// function aykut<T, K extends keyof T>(project: T, dick: K) {
//   console.log(dick)

//   return project
// }

// aykut({jsonCrack: "jsoncrack", age: 23}, "age").jsonCrack

const numbers: number[] = [1, 2, 3];
// console.log(numbers)

// Tuple
type StringNumberPair = [string, number, obj];

type obj = {
  name: string,
  surname: string
}

const pair: StringNumberPair = ['hello', 42, {name: "test", surname: 'test'}];

const first = pair[0];
const second = pair[1]

const third = pair[2]
console.log(first, second, third)