// Array.prototype.entries()
// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

export default function entries() {
  const array1 = ['a', 'b', 'c'];

  const iterator = array1.entries();

  for (const test of iterator) {
    console.log(test)
  }

  console.log("************************************************************")

  const a = ["a", "b", "c"];

  for (const [index, element] of a.entries()) {
    console.log(index, element);
  }

  console.log("************************************************************")

  const array = ["a", "b", "c"];
  const arrayEntries = array.entries();

  for (const element of arrayEntries) {
    console.log(element);
  }

  console.log("************************************************************")

  const arrayLike = {
    length: 3 as number,
    0: "a",
    1: "b",
    2: "c",
  };
  for (const entry of Array.prototype.entries.call(arrayLike)) {
    console.log(entry);
  }
}