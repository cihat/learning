package examples

import (
	"fmt"
	"reflect"
)

func main() {
	var a = "initial"

	var b, c string

	var d = "hello"

	f := "short"

	fmt.Println(a, b, c, reflect.TypeOf(d), f)
}
