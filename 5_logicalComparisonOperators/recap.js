// MATH.round()
// Rounds up or down depending on the decimal (from 5+ it will round up. Otherwise it will round down).
console.log( Math.round(1.4) ); // 1 
console.log( Math.round(1.5) ); // 2

// MATH.floor() 
// Rounds down regardless of the value of the decimal point
console.log( Math.floor(1.8) ); // 1

// MATH.ceil()
// Rounds up regardless of the value of the decimal point
console.log( Math.ceil(1.1) ); // 2 

console.clear();
// Print a random integer between 1 and 6.
let randNum = Math.random();
console.log(`STEP 1    ${randNum}`);
let wholeNum = Math.floor(( randNum ) * 6 +1 ); // this way 
// let wholeNum = Math.ceil(( randNum ) * 6 ); // this way
console.log( `STEP 2    ${wholeNum} `);

// All in 1 step
console.log( Math.floor( Math.random() * 6 ) + 1 );

console.clear();
let myArr = process.argv;
let grabValue = myArr[2];
console.log( `Good morning ${grabValue}` )