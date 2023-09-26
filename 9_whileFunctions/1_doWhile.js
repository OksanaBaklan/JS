/*
    The do while loop runs as far as the condition is met 
    It executes at least once.

    Syntax:

    do {
        // code block 
        // increment
    } while ( condition );
    ** IT RUNS AT LEAST ONCE **
*/

let j = 1;

do {
    console.log( j );
    j++;
} while ( j < 1 );

console.clear();
/* 
 While loop
 similar to the above but the condition is checked before running the code block
*/

let text = "";
let i = 0;

while ( i < 5 ){
    text += `The number is ${i} `;
    console.log( text );
    i++; // don't forget to increment or you will end up in an infinite loop. 
}
