console.log("Question 4")

let interesting = 1; 

function doSomeStuff() { 
    interesting = 10; 
    return; 
    function interesting() {} 
} 

doSomeStuff(); 

console.log( interesting );
/*
EXPLANATION
The `interesting = 10` has no effect because the function "interesting"
actually gets hoisted BEFORE the "interesting=10" assignment. This actually
creates an "interesting" variable that is scoped to the "doSomeStuff"
function. That way "interesting=10" actually overrides the _function_, not 
the var as you might think.
*/

