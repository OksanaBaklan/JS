"use strict";

// What is scope?
// Place where our variables "live", where we can access them

// What is a code block?
// it is code written between the { } 


/*
    SCOPE

    global scope = can be accessed from anywhere
    local scope = can be accessed only locally ( from within th specific code block where the var lives )
*/

const globalScope = "Hello global scope"; // global variable

let age = 19; // global variable
if ( age > 18 ) {
    let messageLet = "admitted to the club (BLOCK SCOPED)";
    const messageConst = "I am ... (BLOCK SCOPED)";
    // Don't use VAR it's very BAD PRACTICE!!
    var messageVar = "I am always global"; // a variable declared with var will always end up in the global scope
    console.log( messageLet );
} 

// let's try to log messageLet OUTSIDE the {}
// console.log( messageLet ) // not defined ( because it was created in the {} )
console.log( messageVar );
console.clear();

let someGlobalVar = 3; // global variables can be accessed from anywhere

if( true ) {
    console.log( someGlobalVar ); // 3
}

// EXAMPLE 2

if( true ) {
    let blockScope = "Hello block scope"; // locally scoped
    console.log(`FIRST IF -  ${blockScope}`);

    if( true ) {
        console.log(`SECOND IF - ${blockScope}`);
        let scopedNested = "accessible only from nested IF";
        console.log( scopedNested ); // accessible only from nested IF
    }

    // LEt's try to access scopedNested from outside the nested IF
    console.log( scopedNested )
}




