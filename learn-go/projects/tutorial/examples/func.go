package examples

import (
	"fmt"

	"golang.org/x/example/hello/reverse"
)

func Example(a, b int) int {
	fmt.Println(a + b)

	return a + b
}

func Reverse(s string) string {
	return reverse.String(s)
}
