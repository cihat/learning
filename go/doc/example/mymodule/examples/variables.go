package examples

import (
	"fmt"
	"reflect"
)

func Variables() {
	var a = "initial"

	var b, c string

	var d = "hello"

	f := "short"

	fmt.Println(a, b, c, reflect.TypeOf(d), f)
}
