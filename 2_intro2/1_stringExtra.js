let myString = "Saturday";

/*
    Checking length using .notation
    We can access each letter using bracket notation [] ( 0 indexed )
*/

// length is a string property returning the length of a String ( spaces counts as well )
let myStringCount = myString.length;
console.log( myStringCount ); // 8

// Access individual letters ( bracket notation)
let firstLetter = myString[0];
console.log( firstLetter ); // S

let lastLetter = myString[7];
console.log( lastLetter ); // y

// In words                  myString[ 8 - 1 ]  
let lastLetter2 = myString[ myStringCount - 1 ];
console.log( lastLetter2 ); // y
console.clear();
// How can I tell what var type I am dealing with?
// typeof is an operator indicating the variable type
// It can be used with ALL variable types

let someNum = 2;
console.log( typeof someNum ); // number
let someBool = false;
console.log( typeof someBool ); // boolean







