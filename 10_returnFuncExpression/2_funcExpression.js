// function declaration

function test() {

}

// function expression ( a function is created an assigned to a variable )
 const sayHi = function(){ // notice - we are using an anonymous function 
     console.log("hello");
 }

 // how do I run it?
 sayHi();

 // I can also pass the function sayHi further along.. 
 let useSay = sayHi;
 useSay();

 // Let's write a function that calculates the square of a number (4 * 4)

const square = function( num ){
    return num * num ;
}

const returnedVal = square( 4 ); 
console.log( returnedVal ); // 16

console.clear();


// Difference between func declaration and expression

// FUNCTION DECLARATION ********************
logStuff(); // I can call the function BEFORE its declared (hoisting)

function logStuff() {
    console.log("logging some text");
}


// FUNCTION EXPRESSION ********************
// not hoisted 
// myExpression(); // Cannot access 'myExpression' before initialization

let myExpression = function() {
    console.log("expression");
}

myExpression(); // this will work.





 