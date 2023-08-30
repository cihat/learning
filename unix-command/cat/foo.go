// Copyright 2017 Bill. All rights reserved.
// created by bill on 10 Oct, 2017

package foo

import (
    "github.com/go-foo/foo/internal/log"
)

const VERSION = "1.0.1"

// Foo is a name, just for fun.
type Foo struct {}
func (f *Foo) Bar() {
    log.Println("bar!", VERSION)
}

// NewFoo returns an instance of Foo.
func NewFoo() *Foo {
    return &Foo{}
}
