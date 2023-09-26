// MULTILINE LOGS
/*
    Guests:
    - John
    - Peter
    - Dan
*/

// Newline character "\n"
let guestList = "Guest: \n John \n Peter \n Dan";
console.log( guestList );

// Excape character
let weather = 'it\'s a sunny day';
console.log( weather );
console.clear();

// TEMPLATE LITERALS ( modern way )
// Make sure you use the back-tick symbol ` and not this one '
let guestList2 = `Guests: 
John 
Peter 
Dan`;
console.log( guestList2);

console.log(`it's a sunny day`);
console.clear();

// Printing variables and strings
let user = 3;
console.log("The user number is " + user); // Old fashioned
console.log(`The user number is ${user}`); // Modern 
console.log( typeof user ); // number

let num1 = 3;
let num2 = 2;
let total = `The result of ${num1} * ${num2} is: ${ num1 * num2 }`;
console.log( total ); // The result of 3 * 2 is: 6
