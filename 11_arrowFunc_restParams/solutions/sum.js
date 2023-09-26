// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...args) => {
  let result = 0;

  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }

  return result;
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70
