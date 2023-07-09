package main

import "fmt"

func add(x, y int) int {
	return x + y
}

func swap(x, y string) (string, string, string) {
	return y, x, "test"
}

func main() {
	// fmt.Println(add(42, 13))
	a, b, c := swap("hello", "world")
	fmt.Println(a, b, c)
}
