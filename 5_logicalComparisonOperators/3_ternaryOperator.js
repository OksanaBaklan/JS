/*
    TERNARY OPERATOR
    is represented by the ?.
    It is called "ternary" because it comes with 3 operands

    USE: Generally we use a ternary operator when we want to set a value based on a condition

    Syntax: let result = condition ? value1 : value2 

    The condition is evaluated: if it is truthy then value 1 is returned, otherwise value2
*/

let age = 21;
let accessAllowed = ( age >= 18) ? "allowed" : "denied";
console.log( accessAllowed ); // allowed

// 2 --------
let weather = "rain";
let warning = ( weather === "sunny") ? "don't forget your sunglasses" : "take your umbrella";
console.log( warning );

// 3 -----------------------------------------------

// if firstVar is less than secondVar, print secondVar, otherwise print "Blah".
// store the output in a varibale called ternaryOp
let firstVar = 10;
let secondVar = 20;
(firstVar > secondVar) ? console.log( secondVar ) : console.log( "blah" ) ; // 20

// 4 -----------------------------------------------

// Check if the name of the company is Netscape. 
// If true, print 'Netscape created JavaScript'
// If false, print 'No contributions known'.
// Store the output in a variable called 'contribution'

let company = 'Netscape';
let language = 'JavaScript';

let contribution = ( company === "Netscape") ? `${company} created ${language}` : "No contributions known";
console.log( contribution ); // Netscape created JavaScript

// MULTIPLE CHECKS WITH TERNARY ( NOT RECOMMENDED -- very bad practice )
let age2 = 23;
let message = (age2 < 13) ? "Hi Kid":          // if
    (age2 < 18 ) ? "Hello" :                   // else if 
    (age2 > 18 && age2 < 100) ? "Greetings" :  // else if 
    "what an unusual age";                     // else 

console.log( message ); // greetings