/*
    What is an integer?
    An integer is an number without decimal point. (e.g 3)

    What is a float?
    a float is a floating point number, ( a number with a decimal place) (3.6)

*/

let val = 3;
let valString = String( val );
console.log(`The value of val is -> ${valString} and the type is -> ${typeof valString}`);

// toFixed() METHOD ----------------------------------------
// converts a number into a string, rounding to a specified number of decimals
// Used to format numbers for display purposes
// @param Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.

let num = 5.567859;
let numFixed = num.toFixed( 3 ); // We only want 3 decimals
console.log( numFixed ); // 5.568 
// If the number being passed is higher than the decimal points, zeros will be added
console.log( num.toFixed(10) ); // 5.5678590000
console.clear();

// parseInt() FUNCTION ----------------------------------------
// Parses a string and returns an integer
// @param - A string to convert into a number

let unitNumber = "100px";
console.log( typeof unitNumber ); // string
let fullNumber = parseInt( unitNumber );
console.log( fullNumber ); // 100
console.log( typeof fullNumber ); // number

// parseFloat() FUNCTION ----------------------------------------
// parses a string and returns a floating point number
// @param - A string that contains a floating point num

let floatVal = "12.5rem";
let extractNum = parseFloat( floatVal );
console.log( extractNum ); // 12.5

console.log( parseInt( "a123") ); // NaN

// isNan() FUNCTION ----------------------------------------
// Returns a boolean that indicates whether a value is the reserved value NaN
// @param - A numeric value

console.log( isNaN("strasdfas") ); // true
console.log( isNaN( 5 ) ); // false

console.clear();
// ---------------------------- MATH --------------------------------
// Math is a built-in object that has properties and methods for mathematical operations

// - Rounding up with Math.ceil()
// - Rounding down with Math.floor()
// - Getting random numbers with Math.random()
// - finding the max and min with Math.max() Math.min()



// Math.random() METHOD ----------------------------------------------------------
// Returns a random number ( floating point ) between 0 (inclusive) and 1 (exclusive)
console.log( Math.random() );


// We want to return an INTEGER between 0 and 9
// 1) generate a random number
let generateRandom = Math.random();
console.log(`STEP 1    ${generateRandom}`);
// 2) multiply by 10 (10 will be excluded.. that way we get a random num up to 9);
let randNum = generateRandom * 10;
console.log(`STEP 2    ${randNum}`);
// 3) use Math.floor to round down the number
let intRandNum = Math.floor( randNum ); // round down 
console.log(`STEP 3     ${intRandNum}`); 

// Math.max() METHOD ----------------------------------------------------------
// Returns the number with the highest value

console.log( Math.max(10, 30, 20) ); //30
console.log( Math.max(-10, -20) );  // -10

// Math.min() METHOD ----------------------------------------------------------
// Returns the number with the lowest value

console.log( Math.min(2,3,4) ); // 2
console.log( Math.min(-2,-3,-4) ); // -4










// Math.ceil() METHOD  ----------------------------------------------------------
// Returns the smallest integer greater than or equal to its numeric argument.
// @param x — A numeric expression.
console.log( Math.ceil( 0.95 ) ); // 1
console.log( Math.ceil( 4 ) ); // 4 stays that way because it is already an integer
console.log( Math.ceil( 7.2 ) ); // 8
console.log( Math.ceil( -0.95 ) ); // -0
console.log( Math.ceil( -4 ) ); // -4
console.log( Math.ceil( 45.95 ) ); // 46

// Math.floor() METHOD ----------------------------------------------------------
// Rounds a number down to the closest integer
console.log( Math.floor( 45.95 ) ); // 45
console.log( Math.floor( 4 ) ); // 4
console.log( Math.floor( -45.95 ) ); // -46
console.clear();

// PASSING VALUES FROM COMMAND LINE
/*
    All values passed to the terminal are given to a process called argv ("argument values")
    Node exposes an array containing those values
    The first 2 values will always be present along with the values you passed.
*/

const myArgs = process.argv.slice(2);
console.log( myArgs );
