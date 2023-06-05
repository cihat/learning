// As Const

const colors = ['red', 'green', 'blue'] as const;

const animals = <const>['donkey', "monkey", ]

// console.log(colors, animals)

const test = { 
  red: 'kirmizi',
  blue: 'mavi',
  purple: "mor"
} as const

// test.blue = "blue" // it will fail message because `as const` working

// let a = (Math.random() < 0.5 ? 0 : 1) as const // error
// let b = (60 * 60 * 1000) as const // error

let c = Math.random() < 0.5 ? (0 as const) : (1 as const);
let d = 3_600_000_000_000_000 as const;


console.log(c, d)
