"use strict"
// MULTIPLE LINES --------------------------
const sumArrow = (num1, num2) => {
    return num1 + num2;
}
// Let's take a look at the returned value
// I am calling the function inside the console.log
// console.log( sumArrow( 1,2) );

// If I need to work with the returned value I will have to store it somewhere ( in a new variable )
let sumArrowVal = sumArrow(1,2);
// Now that I have stored it, I can print it to the terminal using console.log
console.log( sumArrowVal ); // 3

// SINGLE LINE
const sumArrow2 = (num1, num2) => num1 + num2;
/*
    NOTICE:
    we have no {}
    the code after "=>" gets evaluated and returned ( we don't need to explicitly write "return" )
*/

let sumResult = sumArrow2( 2, 4 );
console.log( sumResult ); // 6

// Arrow function 1 param ---------------------------------------
// If all you have is 1 param you can omit the ()
const double = number => number * 2;
let doubleResult = double( 3 );
console.log( doubleResult ); // 6

// Arrow function 0 params --------------------------------------
// If there are no param, parenthesis should still be present ( they are mandatory )
const sayHi = () => console.log("Hello");
sayHi(); // Hello