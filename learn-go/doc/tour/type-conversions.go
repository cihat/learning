package main

import (
	"fmt"
	"math"
	"reflect"
)

func main() {
	var x, y int = 3, 4
	var f float64 = math.Sqrt(float64(x*x + y*y))
	var z uint = uint(f)
	fmt.Println(reflect.TypeOf(x), reflect.TypeOf(y), reflect.TypeOf(z), reflect.TypeOf(f))
}
