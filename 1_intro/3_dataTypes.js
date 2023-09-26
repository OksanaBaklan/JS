/*
    Js divides values in 2 groups:
    Primitives (string, number, boolean, undefined, null and few more )
    Objects ( objects, arrays, functions )
*/

// String
// A string is any value surrounded by "" ''
let stringExample = "Text char value";
console.log( stringExample );

// Number
/*
    Number can be:
    Integer -  a whole number ( 90 )
    Float - a number with a decimal point ( 90.2 )
    NaN - "Not a number" is an error and we should be aware of it 
*/

let myNum = 50;
console.log( "test" - myNum ); // NaN logical erros is triggered coz we are subtracting a number from a string
console.log( "90" - myNum ); // Works because js performs type coercion - not good practice


// Booleans
// Booleans can only be true or false 
let myBool = false;

// Undefined
// The default value of a variable is undefined unless we specify something different
let profile;
console.log( profile ); // undefined
// Undefined will not break the js file so the next message will be console logged.
console.log("here I am ")

// Null
/*
    Represents the absence of something ( usually an object )
    Usually if null is being returned it means that an obj was expected
    but could not be created or returned
*/



// Array []
/*
    A container for multiple values
*/

let myArr = ["dog", "cat" , 2, 5];

// Object
/*
    A container for comma separated key-value pairs
*/

let person = {
    name: "dave",
    age: 15
}