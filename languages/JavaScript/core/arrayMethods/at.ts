import chalk from "chalk";

export default function at() {
  // Array.prototype.at()
  // The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers.
  // Negative integers count back from the last item in the array.

  // Syntax
  // array.at(index)

  const array1 = [5, 12, 8, 130, 44];

  let index = 2;

  const log = console.log;

  log(chalk.green(`Using an index of ${index} the item returned is ${array1.at(index)}`));
  // expected output: "Using an index of 2 the item returned is 8"

  index = -4;

  log(`Using an index of ${index} item returned is ${array1.at(index)}`);
  // expected output: "Using an index of -2 item returned is 130"
}