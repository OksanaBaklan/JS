/*
    forEach () runs a provided function (callback function) once for each array element.
    It is used to iterate over an array
    Returns undefined

    array.forEach( function (element,index, array){
        // code
    });

*/

const array1 = ["a","b","c"];

array1.forEach( function( el ){ // we can call "el" anything
    console.log( el ) 
})

/*
    a
    b
    c
*/

console.clear();
// --------------------- Array 2
const arr2 = ["Jim", "Luca", "Mary", "Jill"];

// Using forEach print out the following lines 
// index 0: jim
// index 1 : luca
// index 2 : Mary
// index 3: jill
// Once you are done, do the same using arrow function syntax

arr2.forEach( function( el, idx, arr ) { // remember to respect the param order (element,index, array)
    console.log( `index ${idx}: ${el}` );
})

console.clear()

// Same but using arrow function
arr2.forEach( (el, index) => console.log( `index ${index}: ${el}` ) );


// TASK ------------------------------- ARRAY 3
// Let's create an array of prices
const arr3 = [20.99, 35.99, 42.99];
const currSymbol = "$";
// we need to print out prices followed by their currency symbol
// USE ARROW FUNCTION!!!!!

arr3.forEach( (el) => console.log( `${el}${currSymbol}`));

console.log( arr3 ); // the original array was not modified