// Bonus: Create a function average which accepts any amount of numbers and returns their mean average.

// The mean average of a set of numbers is calculated by adding them all up and dividing the result of the addition by the amount of numbers in the set
// Example: To calculate the average of 12, 14 and 16 -
// 12 + 14 + 16 = 42
// 42 / 3 = 14

const average = (...args) => {
  // First thing I should do is set up a variable to hold the sum
  let sum = 0;

  // "args" is an array containing the els I need to sum
  // in order to reach all els I need to loop over it.
  for (let i = 0; i < args.length; i++) {
    // inside the loop I can start adding the els while saving them in "sum" variable
    sum += args[i];
  }

  // Once the loop is over I could create another variable to hold the average or I could just return it right away
  return sum / args.length;
};

console.log(average(0)); // -> 0
console.log(average(1, 2)); // -> 1.5
console.log(average(1, 3, 6, 10)); // -> 5
console.log(average(12, 14, 16)); // -> 14
