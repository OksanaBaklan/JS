/*
    Calls a function for each element of the array
    Returns an array...so if you don't need a returned array.. don't use map
*/

let arr = [1,2,3];

const newArr = arr.map( function( val ) { // value, index, array 
    return val * 2
});

console.log( newArr); // [ 2, 4, 6 ]

// first round
// val  = 1
// return val * 2 ( 2 )

// second round
// val = 2
// return val * 2 ( 4 )

// third round
// val = 3
// return val * 2 ( 3 )

// the new array populated with 2 4 and 6 gets returned to the variable newArr


// ************************************************************************
// EXAMPLE USING RETURN WITH FOREACH - will give you undefined
// If you need something ( an array ) being returned do not use forEach()
let array1 = ["a","b","c"];

const test = array1.forEach( function( el ){ // we can call "el" anything
    return el 
})

console.log( test ); // undefined
// ************************************************************************




// TASK ------------------------------------ MAP 2
// Given an array of prices, use map to add currency symbol
// console log the returned array 

let numArr2 = [ 1.59, 4.99, 9.99 ];

let pricesArr = numArr2.map( function(el){
    return `${el }€`
});

console.log( pricesArr );// [ '1.59€', '4.99€', '9.99€' ]


// TASK------------------------------------ MAP 3

let arrLOTR = ["Bilbo", "Gandalf", "Nazgul"];

// Let's run map on it and return a new array containing the length of each word and use arrow function
let lengthArray = arrLOTR.map(item => item.length);
console.log(lengthArray ); // [ 5, 7, 6 ]


// TASK ------------------------------------ MAP 4
// Given an array of strings, generate an array containing list items using map
let listEls = [ "apples", "bread", "milk", "sugar" ];
let liArray = listEls.map( ( el ) => `<li> ${el}</li>`); // When using the 1 line arrow func the RETURN is implicit
console.log( liArray );

/*
    [
        '<li> apples </li>',
        '<li> bread </li>',
        '<li> milk </li>',
        '<li> sugar </li>'
    ]
*/

// TASK ------------------------------------ MAP 5
let animals = [
    {name:'fluffy', species:'dog'},
    {name:'pluto', species:'dog'},
    {name:'jinxy', species:'cat'},
    {name:'tweety', species:'bird'},
]

// based on the array above, return an array of species only


let speciesArr = animals.map( function( animal ){
    return animal.species
})

console.log( speciesArr ); //[ 'dog', 'dog', 'cat', 'bird' ]