"use strict";
/*
    Fucntions are the main building block of a program.
    The allow us to run large block of codes and avoid repetition

    Syntax:

    function name() {
        code block 
    }

    Calling a function
    name();
*/

function printMessage() {
    console.log("This is a function");
}

// Now we need to call our function in order to trigger it
printMessage();

// 2 FUNCTION SCOPE
/*
    Scope - location where our variables can be accessed
    block scope - when a variable is created inside {} it can only be accessed from that specific code block 
    global scope - variables created outside of {} can be accessed from everywhere
    "let" and "const" are block scoped. 
    That means you can have 2 identical variables living in different scopes ( very bad practice)
*/

console.log("*********************");

let userName = "John"; // global scoped

function showMessage2(){
    userName = "Bob"; // block scoped
    let message = `Hello ${userName}`; // block scoped cannot be accessed from the global scope
    console.log( message );
}
console.log( `log line 41 ${userName}` ); // John 
showMessage2();
console.log( `log line 43 ${userName}` ); // Bob ( cos at this point the function got trigger and the value of userName got updated)
// console.log( message); This would trigger an error because we are trying to access a variable defined in another scope



