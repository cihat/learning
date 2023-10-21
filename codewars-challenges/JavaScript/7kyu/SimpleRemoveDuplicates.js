function solve(arr) {
  const newArr = arr.slice().filter((n, i) => arr.indexOf(n) !== i)

  for (let i = 0; i < newArr.length; i++) {
    arr.splice(arr.indexOf(newArr[i]), 1)
  }

  return arr
}

solve([3, 4, 4, 3, 6, 3]);
// [4, 6, 3]


//Explanation
/*
First I made a new array so I could get the repeated numbers, for this I sliced the arr var, so it makes a new array, then I filtered that new array using the condition that will filter if the index of the current number in the original array isn't the same as the one that is currently getting mapped, because remember that .indexOf() only takes the index of the first number in the array

After that I used a for loop that will execute for every element that is repeated, after that I spliced the original array, locating the elimination direction in the index of the repeated element in the original array.

After that I just returned arr
*/

// other solution
// return arr.filter((val,i) => arr.lastIndexOf(val) == i);