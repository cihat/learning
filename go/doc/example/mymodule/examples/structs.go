package examples

import "fmt"

type person struct {
	name string
	age  int
}

func newPerson(name string, age int) *person {
	p := person{name, age}

	return &p
}

func Struct() {
	fmt.Println(person{"Bob", 20})
	fmt.Println(person{name: "Alice", age: 30})
	fmt.Println(person{name: "Fred"})
	fmt.Println(&person{name: "Ann", age: 40})
	fmt.Println(newPerson("John", 34))

	s := person{name: "Sean", age: 50}
	fmt.Println(s.name)

	sp := &s

	fmt.Println("sp: ", sp)
	fmt.Println(sp.age)

	s.age = 51
	fmt.Println(sp.age)

	dog := struct {
		name   string
		isGood bool
	}{
		"Rex",
		true,
	}

	fmt.Println(dog)
}
