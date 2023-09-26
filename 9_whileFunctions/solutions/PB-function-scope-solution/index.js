/*
1. Print Exponential Values
write a function called printExponentialValues that accepts two numbers as parameters
If one or both of the passed arguments are not a number, the message "x or y is not a number" should be printed to the terminal
The function should print the resulting series of numbers to the terminal as a single string separated by space
For example if we have function(3, 5) The function should print 3 9 27 81 243 
(Prints 5 exponential values of 3)
*/

function printExponentialValues(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    console.log("x or y is not a number");
  }
  let exponentResult = 1;
  let values = "";
  for (let i = 0; i < y; i++) {
    exponentResult *= x;
    values += `${exponentResult} `;
  }
  console.log(values);
}

printExponentialValues(3, 5);

// ***************************************************
// 2 Create a function named printFavoriteFruit.
// Declare a variable called fruit outside of the function and store your favorite fruit as a value.
// Reassign the variable within the function and print "My favorite fruit is: x".

let fruit = "banana";

function printFavoriteFruit() {
  fruit = "watermelon";
  console.log("My favorite fruit is: " + fruit);
}

printFavoriteFruit();

// ***************************************************
// Multiply a Number by Itself
/*
Create a function named exponent that takes two numbers as parameters. 
The second parameter defines how many times the first number should be multiplied by itself. 
Save the output in a variable named result inside the function.

Then, try to access the variable result outside of the exponent function. 
Is this possible? Why/Why not? Comment your answer in the index.js file.
*/


function exponent(num1, num2) {
    let result = Math.pow(num1, num2);
    console.log( result );
}
//console.log(result);

exponent(2, 3); // 2 * 2 * 2 = 8
