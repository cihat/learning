package main

import (
	"fmt"
	"mymodule/examples"
	"mymodule/testpackage"
)

func main() {
	fmt.Println("Hello, Modules! This is mypackage speaking!")

	examples.C()
	testpackage.PrintHello()
}
