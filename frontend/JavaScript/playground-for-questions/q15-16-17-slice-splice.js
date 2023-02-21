// Shallow copy of an array
// In JavaScript, all standard built-in object-copy operations 
//! (spread syntax,
//!   Array.prototype.concat(),
//!   Array.prototype.slice(),
//!   Array.from(),
//!   Object.assign(),
//!   Object.create()
//!   ) create shallow copies rather than deep copies.

// Slice: returns a shallow copy of a portion of an array into a new array object
// selected from start to end (end not included) where start and end represent the index of items in that array.
// The original array will not be modified.
//

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var arr2 = arr.slice(2, 5)
console.log(arr2)


// Splice: changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// The original array will be modified.
//

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var arr2 = arr.splice(2, 5)
console.log(arr2)