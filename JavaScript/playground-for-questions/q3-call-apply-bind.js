var employee1 = { firstName: "John", lastName: "Rodson" }
var employee2 = { firstName: "Jimmy", lastName: "Baily" }

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  )
}

// call
invite.call(employee1, "Hello", "How are you?") // Hello John Rodson, How are you?
invite.call(employee2, "Hello", "How are you?") // Hello Jimmy Baily, How are you?

// apply
invite.apply(employee1, ["Hello", "How are you?"]) // Hello John Rodson, How are you?
invite.apply(employee2, ["Hello", "How are you?"]) // Hello John Rodson, How are you?

// bind
var inviteEmployee1 = invite.bind(employee1)
var inviteEmployee2 = invite.bind(employee2)
inviteEmployee1("Hello", "How are you?") // Hello John Rodson, How are you?
inviteEmployee2("Hello", "How are you?") // Hello Jimmy Baily, How are you?
