package examples

import "fmt"

func vals() (int, int) {
	return 3, 8
}

func MultipleReturnValues() {
	a, b := vals()
	fmt.Println(a)
	fmt.Println(b)

	_, c := vals()
	fmt.Println(c)
}
