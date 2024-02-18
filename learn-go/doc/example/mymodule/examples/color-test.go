package examples

import (
	"fmt"

	c "github.com/fatih/color"
)

func Color() {
	red := c.New(c.FgRed).SprintFunc()
	blue := c.New(c.FgBlue).SprintFunc()
	fmt.Printf("%s %s\n", red("Hello"), blue("World!"))
}
