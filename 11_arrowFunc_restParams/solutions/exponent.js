// Complete the function below so that it still calculates the power of a number even if the `exp` argument is not passed to it. 
// The default `exp` should be set to 2.
//
// Example: Calling the function with 2 and 4 will return 16 (2 to the power of 4), If you call it with just 2, it should return 4 (2 to the power of 2).

const exponent = (num, exp = 2) => {
  let result = 1;

  // we need to multiply "num" by itself based on the "exp"
  // If "exp" is 3 we need to run the loop 2 times 
  // If "exp" is 3 we need to run the loop 3 times etc..
  
  for (let i = 0; i < exp; i++) { 
    result *= num;
  }

  // OR Simply 
  // result = Math.pow( num, exp );

  return result;
};

console.log( exponent(3, 3) ); // -> 27
console.log( exponent(3) ); // -> 9
