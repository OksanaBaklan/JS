"use strict";
// Js will be executed in strict mode and will trigger more errors helping you write cleaner code

// The if else statement is used to perform specific steps based on a condition

// IF
// executes soemthing only when the condition is met
let newMember = true; // imagine this value comes from the BE
if (newMember) {
  // this block will run only if the condition above is TRUE
  console.log("As a new member you are entitled to 30% discount");
}
// As a new member you are entitled to 30% discount

// IF - ELSE
// Executes something if a condition is met.. and will execute something else if condition is not met

let someAge = 0;

if (someAge >= 18) {
  console.log(" You can enter the club");
} else {
  // What needs to be done if the condition is false
  console.log("kids not allowed");
}

// kids not allowed

// IF - ELSE IF - ELSE
// checking for multiple conditions

const myColor = "green";

if (myColor === "green") { // first condition
  console.log("you are very close to nature");
} else if (myColor === "red") { // else if is sued to specify a second condition to test
  console.log("You are very passionate and intense");
} else {
  console.log(`hmm... you seem to like the ${myColor} color`);
}

// IF - ELSE IF - ELSE IF - ELSE
const time = 10;
let greeting;

if ( time < 12 ) {
    greeting = "Good morning"
} else if ( (time > 12) && (time <= 17) ){
    greeting = "Good afternoon"
} else if ( (time >= 18) && (time <= 21)) {
    greeting = "Good evening"
} else {
    greeting = "Good night"
}

console.log( greeting ); //Good morning
