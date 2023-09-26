/*
    Coercion (turning a type into another one)
    There are 2 types of coercion:
    - implicit
    - explicit
*/

// Implicit
console.log( "2" * 2 ); // 4 the js interpreter treated the "2" a number

// On a side note.. coercion doesn't happen when using + symbol
console.log( "1" + 1 ); // 11 because the + symbol is used for concatenation 

console.clear();

// Explicit
// Convert a number into a string - String()

let myNum = 20; 
console.log( typeof myNum ); // number
// Using String() to turn the type of myNum to string
let numToString = String( myNum );
console.log( typeof numToString ); // String

console.clear();

// Converting a string into a number - Number()
let myString = "20"; // string
let stringToNum = Number( myString );
console.log( typeof stringToNum );
