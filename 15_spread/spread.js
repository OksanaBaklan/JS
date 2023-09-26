"use strict"

// REST
// We use the rest to allow a function to receive any amount of arguments
// It packs arguments in an array 
function sum( ...args ){
    console.log( args )
}

sum(1,2); // [ 1, 2 ]
sum(1,2,3); // [ 1, 2, 3 ]

// SPREAD
// Looks very similar to the rest parameter (also using "...") but does quite the opposite
// When SPREAD it "expands" an iterable into a list or arguments

console.log( Math.max(1,3,5) );

let arr1 = [3,7,4];
console.log( Math.max( arr1 ) ); // this will not work cos .max expects type number and we are passing an array
console.log( Math.max(...arr1) ); // 7

// Using ... multiple times ----------------------------------
let arr2 = [1, -2, 3, 4];
let arr3 = [8, 3, -8, 1];

console.log( Math.max( ...arr2, ...arr3 ) ); // 8
console.log( Math.max( ...arr2, 45, ...arr3, 35 ) ); // 45


// Merging arrays using SPREAD
let arr6 = [15, 5, 1];
let arr7 = [8, 9, 15];

let mergedArray = [ ...arr6, ...arr7 ];
console.log( mergedArray )


// MERGING objects
let obj1 = {name: "John", age: 33}
let obj2 = {city: "Berlin", job: "developer"}

let obj3 = { ...obj1, ...obj2 };
console.log( obj3 ); // { name: 'John', age: 33, city: 'Berlin', job: 'developer' }

// Make sure the property keys from the objs you are trying to merge are different otherwise they will be overwritten