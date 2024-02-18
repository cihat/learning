package main

import (
	"examples"
	"fmt"
	"test"
)

func main() {
	fmt.Println("Hello World!")

	a := examples.Example(1, 34523)

	fmt.Println(a)

	b := test.Test(1, 123)
	fmt.Print(b)

	c := examples.Reverse("Hello World!")
	fmt.Println(c)
}
