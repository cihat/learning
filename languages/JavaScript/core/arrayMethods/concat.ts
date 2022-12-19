export default function concat() {
  // Array.prototype.concat()
  // The concat() method is used to merge two or more arrays. 
  // This method does not change the existing arrays, but instead returns a new array.


  // Syntax
  // array1.concat(array2, array3, ...)

  // Parameters
  // array2, array3, ...	Arrays and/or values to concatenate into a new array. If all arguments are empty, concat returns an empty array.

  // Return value
  // A new Array instance.

  const array1 = ['a', 'b', 'c'];
  const array2 = ['d', 'e', 'f'];
  const array3 = array1.concat(array2);

  console.log(array3);
  // expected output: Array ["a", "b", "c", "d", "e", "f"]

}