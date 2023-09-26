/*
    Naming variables
    - camel case: customerName
    - snake case: customer_name
    you should not have spaces in your variable names 
*/

// How to declare a variable

// Old fashion way - ( you will find this in old tutorials and old codebase )
var myName = "John";
/*
    var myName ( Declaration )
    = "John" ( Assign )
*/

//console.log( "This is some string" ); // we use "" when dealing with strings
console.log( myName ); // Make sure no "" when dealing with variables

// A variable value can change over time
var myName = "Lisa";
console.log( myName );

/* Declare and assign in 2 separate steps */
var myName2; // I can declare a variable without immediately assigning a value
myName2 = "Kera"; // I can assign the value later on

console.clear(); // console.clear() clears out the previous logs ( doesn't show them in the terminal )

/*
    The modern way to create variables is by using "let" and "const"
*/

// LET - variable can be reassigned but not redeclared

let firstName = "Jenna";
console.log( firstName ); // Jenna

/*
let firstName = "Luca";
console.log( firstName ); // Identifier 'firstName' has already been declared
*/

// Proper way to reassign value using let
firstName = "Henry"; // Here we are not creating a new variable - The variable already exist and we are just assigning a new value
console.log( firstName ); // Henry

console.clear();

// CONST  - variable cannot be redeclared or reassigned

const LASTNAME = "Smith";
console.log( LASTNAME ); // Smith

// const LASTNAME = "Test";
// console.log( LASTNAME );  Identifier 'LASTNAME' has already been declared

// LASTNAME = "Something"; // Error: Assignment to constant variable.

// How to print multiple variables in console log
let fName = "Lucy";
let lName = "Ross";

// In order to print more than a variable at a time we need to comma separate the variable names
console.log( fName, lName );

// How to print string and variables using the + symbol 
console.log( "My name is " + fName + " and my lastname is " + lName );
console.log( "My full name is " + fName, lName );

