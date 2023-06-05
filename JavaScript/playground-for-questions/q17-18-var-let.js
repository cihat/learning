// function userDetails(username) {
//   // console.log(age)
//   if (username) {
//     console.log(salary) // undefined due to hoisting
//     console.log(age) // ReferenceError: Cannot access 'age' before initialization
//     var age = 30
//     var salary = 10000
//   }
//   console.log(salary) //10000 (accessible to due function scope)
//   console.log(age) //error: age is not defined(due to block scope)
// }
// userDetails("John")

let counter = 1
let x = 0
switch (x) {
  case 0: {
    let name
    break
  }

  case 1: {
    let name // SyntaxError for redeclaration.
    break
  }
}

function somemethod() {
  //! Temporal Dead Zone
  console.log(counter1) // undefined
  console.log(counter2) // ReferenceError
  var counter1 = 1
  let counter2 = 2
}

somemethod()