package examples

import (
	"fmt"
	"math"
)

const s string = "constant"

func C() {
	fmt.Println(s)

	const n = 500000000

	const d = 3e20 / n

	fmt.Println(int64(d))

	fmt.Println(math.Sin(n))
}
