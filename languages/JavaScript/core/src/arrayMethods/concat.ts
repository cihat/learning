import chalk from "chalk";

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

  const log = console.log;

  const array1 = ['a', 'b', 'c'];
  const array2 = ['d', 'e', 'f'];
  const array3 = array1.concat(array2);

  console.log(array3);
  // expected output: Array ["a", "b", "c", "d", "e", "f"]

  const num1 = [1, 2, 3];
  const num2 = [4, 5, 6];
  const num3 = [7, 8, 9];

  const numbers = num1.concat(num1, num2, num3);

  log(numbers);
  // results in [1, 2, 3, 4, 5, 6, 7, 8, 9]


  const array4: string[] = ['a', 'b', 'c'];
  const array5: (string | (string | (string | string[])[])[])[] = ["d", ["e", "f", ["g", "h", ["i", "j"]]]];

  const array6 = array4.concat(array5 as string[]);
  log(array6);
  array6.forEach((item) => {
    log(item);
  })
}
