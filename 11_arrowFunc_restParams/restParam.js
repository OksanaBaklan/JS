function sum( val1, val2 ) {
    return val1 + val2;
}

// A function can be called by passing any number of arguments (no matter how the func is defined)
// There will not be an error due to "excessive" arguments. The "extra" args will be ignored.

let sumRes = sum( 1, 2, 3, 4, 5 );// The func is expecting only 2 values but I am passing 5 values
console.log( sumRes ); // 3

/*
 What if we want to keep those extra arguments that we are passing
 In that case we can use the REST param identified by 3 dots "..." followed by the name of the identifier
*/

function allArgs( ...args ) { // args can be called anything
    console.log( args ) // it collects all args being passed in an array 
}

allArgs(1, 2, 3); // [ 1, 2, 3 ]
console.clear();
// to sum things up
// The REST param allows a function to accept an indefinite number of arguments as an array

// Example (we need a function that will sum all arguments being passed - we don't know how many they will be) 
function sumAll( ...args ){
    console.log( args ); // [ 2, 3, 1, 7, 3, 5 ]
    let sum = 0;

    for( let i = 0; i < args.length; i++ ){
        sum += args[i]
    }

    return sum; 
}

let add = sumAll( 2, 3, 1, 7, 3, 5 ); // 21 
console.log( add );

// We can pass other params BEFORE the rest syntax
// IMPORTANT The rest param must be the last param!!!!!

function showName( firstName, lastName, ...titles ){
    console.log( firstName, lastName );
    console.log(titles);
    console.log( titles[0]);
}

showName( "Julius", "Caesar", "Consul", "Imperator");





// Let's turn a func declaration into an arrow function


// function sumAll2( ...args ){
const sumAll2 = ( ...args ) => {
    console.log( args ); // [ 2, 3, 1, 7, 3, 5 ]
    let sum = 0;

    for( let i = 0; i < args.length; i++ ){
        sum += args[i]
    }

    return sum; 
}

let add2 = sumAll2( 2, 3, 1, 7, 3, 5 ); // 21 
console.log( add2 );
