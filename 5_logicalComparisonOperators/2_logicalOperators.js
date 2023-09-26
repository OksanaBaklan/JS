/*
    Logical operators are used to determine the logic between variables
    && - and ( true when all conditions are true )
    || - or ( true when at least 1 condition is true )
    ! - not ( turns a truthy value into a falsey and vice versa )
*/

let firstVar = 10;
let secondVar = 20;
let thirdVar = 20;
let fourthVar = 20;

// basic
console.log( firstVar < secondVar ); // true

// Let's test multiple conditions using && and ||

console.log( (firstVar < secondVar) && (firstVar === secondVar) ); // False 
console.log( (firstVar < secondVar) || (firstVar === secondVar) ); // True 

console.clear();

// You can use || to assign a fallback value to a variable
let setting;
console.log( setting ); // undefined 
let user = setting || "new user"; // if the variable is not initialized ( or falsey ) the value will be "new user" 
/*
    Falsey values:
        undefined
        null
        NaN
        0
        "" (empty string)
        false
*/

console.log( user )
console.clear();

// Logical not
console.log( !( 10 < 20 ) ); // false 

console.log( (10 < 20) || ( 10 === 20  && 20 === 20) ); // true









