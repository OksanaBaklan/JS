/*
    A closure is a function that has access to the parent scope even after the parent
    is done executing
*/

// Step 1 ---- We can have functions inside other functions
function init(){
    let name = "Mozilla"; // this is a local variable. Cannot be access from global scope

    // We can have a function inside another function 
    function displayName(){
        console.log( name );
    }

    displayName();
}

//init(); // Mozilla

// Step 2 -------- we can return functions 

function myTest(){

    // We can create functions inside another function and return them

    return function special(){
        console.log("blah");
    }

}

let retTest = myTest(); // let retTest = function special(){console.log("blah");}
console.log( retTest ); // [Function: special]
console.log( typeof retTest ); // function
// if retTest is a function it means I can call it by adding ()
retTest(); // blah

console.clear()


/////

function main(){
    return function(){
        console.log("blah stuff")
    };
}

let returnedMain = main(); // let returnedMain = anonymous function 
returnedMain();


console.clear()

// A closure --------------------

function makeAdder( x ){ // PARENT FUNCTION

    // A closure is a function that remembers the environment in which it was created

    return function add( y ){ // CHILD FUNCTION - It will remember the value of x once makeAdded is done executing
        return x + y ;
    }

}

let sum = makeAdder(2); // function add(y) {return 2 + y}
console.log( sum(1) )


// Another example --------------

function makeTitle( x ){ // OUTER FUNCTION 

    return function( y ){ // INNER FUNCTION
        return `${x} ${y}`
    }

}

let mrTitle = makeTitle("Mr"); 
// mrTitle is now the returned inner function
// passing the value of y 
console.log( mrTitle("David") ); // Mr David

// passing values in 1 go
console.log( makeTitle("Prof.")("Smith") ); // Prof. Smith
console.clear();


// IIFE immediately invoked function expression -------------

(function(){
    console.log("hey there");
})(); // the parenthesis are the reason why we can trigger the function right away 

console.clear();

// IIFE 2 ----------------------------------
const add  = ( function(){ 
    console.log(`******* immediately invoked*******`)

    let counter = 0; // this will only happen 1 time (once the iife runs)
    console.log(`Counter has been initialized to ${counter}`)

    return function(){ // INNER FUNCTION
        // immediately returned but not executed
        console.log( ++counter );
    }

})();

add() ; // 1
add() ; // 2

/*
    the iife is immediately executed
    let counter get immediately set to 0
    the inner function is not executed but gets returned to const add
    that means "const add" is now a function ( the inner function!)
    so now we can keep on calling function add and the value of counter will keep on increasing
*/