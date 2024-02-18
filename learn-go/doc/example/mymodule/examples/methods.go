package examples

import "fmt"

type rect struct {
	width, height int
}

func (r *rect) area(test int) int {
	fmt.Println("test:", test)
	return r.width * r.height
}

func (r rect) perim() int {
	return 2*r.width + 2*r.height
}

func Methods() {
	r := rect{width: 10, height: 5}

	fmt.Println("area: ", r.area(10))
	fmt.Println("perim:", r.perim())

	rp := &r
	fmt.Println("area: ", rp.area(10))
	fmt.Println("perim:", rp.perim())
}
