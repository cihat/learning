package examples

import "fmt"

func intSeq() func() int {
	i := 0

	return func() int {
		i++
		return i
	}
}

func Closures() {
	nextInt := intSeq()

	fmt.Println(nextInt())
	fmt.Println(nextInt())

	fmt.Println("&&&&&&&")
	newInts := intSeq()
	fmt.Println(newInts())
	fmt.Println(newInts())
	fmt.Println(newInts())
	fmt.Println(newInts())
	fmt.Println(newInts())
}
