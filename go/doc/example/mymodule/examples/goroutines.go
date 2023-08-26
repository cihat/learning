package examples

import (
	"fmt"
	"time"
)

func loopFunc(from string) {
	for i := 0; i < 3; i++ {
		fmt.Println(from, ":", i)
	}
}

func Goroutines() {
	loopFunc("direct")

	// Our two function calls are running asynchronously in separate goroutines now. Wait for them to finish (for a more robust approach, use a WaitGroup).
	go func(msg string) {
		fmt.Println(msg)
	}("going")

	go loopFunc("goroutine")

	time.Sleep(time.Second)
	time.Sleep(time.Second)
	fmt.Println("done")
}
