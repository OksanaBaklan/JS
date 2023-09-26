"use strict"

/*
    A js object is a comma separated list of properties wrapped in curly braces
    Properties are key-value pairs
*/

let user = {
    firstName: "Ciro",
    age: 25,
    isAdmin: false,
}

// Accessing values -------------------------
console.log( user.firstName );

// Adding properties . notation
user.nationality = "Italian";
console.log( user ); // { firstName: 'Ciro', age: 25, isAdmin: false, nationality: 'Italian' }

// Adding properties [] notation
user["language"] = "english";
console.log( user );

// Modifying properties -----------------------

let user2 = {
    name: "John",
    age: 30,
    "likes birds": true, // property names containing spaces need to be wrapped in quotation marks
}

user2["likes birds"] = false; // Since the prop name contains spaces we can only use [] notation
user2.name = "Bill";
console.log( user2 ); // { name: 'Bill', age: 30, 'likes birds': false }


// Computed properties -------------------------------------------
// Setting property name based on a variable

let fruit = "kiwi"; // Imagine this var comes from somewhere else

let fruitBucket = {
    // We are setting the prop name based on the variable "fruit"
    // kiwi: 5, instead of this
   [fruit] : 5
}
console.log( fruitBucket); // { kiwi: 5 }


// Deleting properties ------------------------------------------
// Delete operator removes a prop from an obj

console.log( user2 ); // { name: 'Bill', age: 30, 'likes birds': false }
delete user2["likes birds"];
console.log( user2 )  // { name: 'Bill', age: 30 }


// Comparing objects
let obj1 = { name: "Miriam"};
let obj2 = { name: "Miriam"};

// check if they are same

console.log( obj1 === obj2 ); // false

// why false?
// When we create an object, a space in memory gets reseved and that's the one we are checking against
// since each obj has a different location they will never be same
// unless.....
let obj3 = {name: "whatever"};
let obj3Plus = obj3;

console.log( obj3 === obj3Plus ); // true


// Testing if a property exists -----------------------
let user3 = { 
    name: "Mimmo", 
    chef: true, 
};

console.log( user3.nationality === undefined ); // true.. so the prop is not there
// There is also a special operator "in" 
// It returns a boolean
// The syntax is: "key" in object

console.log("name" in user3); // true
console.log("ABC" in user3); // false

console.clear();
// Preventing object modifications
// Object.seal() prevents deleting existing properties and adding new ones but cannot prevent them from external change
// Object.freeze() avoids all modifications

const objFinal = {
    value: 10
};

Object.seal( objFinal );
// allows editing
objFinal.value = 20;
// does not allow deleting 
// delete objFinal.value ( this will not work)

objFinal.nation = "Mexico";
console.log( objFinal );

Object.freeze( objFinal ); // object has been frozen.. I cannot delete or modify anything
objFinal.value = 30; // does not work
console.log( objFinal );

// Make sure you have "use strict" on your file in order to see more errors/warnings
