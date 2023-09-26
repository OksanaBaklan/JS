// How to iterate over arr and obj using:
// for/in ( OBJECTS )
// for/of ( ARRAYS )

/*
    FOR/IN statement ( OBJECTS ) ------------------------------------------
    loops throught the properties of an object
*/

let oldCar = {
    make: "toyota",
    model: "tercel",
    year: "1996",
}

// for( let variable in object)
for( let key in oldCar){ // "key" is a variable and can be called anything
    //console.log( key ); // this will print our the keys
    console.log( oldCar[key]); // this will print our values
}

// PRACTICE ----------
let person = {
    fname: "John", // key value pairs
    lname: "Doe",
    age: 25,
};

// We want to concatenate the prop values and then print out "John Doe 25".
let text = "";
for( let prop in person ){
    text += ` ${person[prop]}`
}

console.log( text ); // John Doe 25

// ------------------------------- ************* ----------------------------
// FOR/OF statement ( ARRAYS ) ------------------------------------------
// AVOID using the for/in for arrays!!!!

const myArray = ["a","b","c"];

for( let el of myArray ){
    console.log( el )
}


console.clear();

// BUILT IN OBJECT METHODS
// ----------------------------- Object.entries( obj )
// This method returns an array of [ [key, value] ] pairs of the object properties

const fruits = {
    apple: 28,
    orange: 17,
    pear: 54,
};

const myEntries = Object.entries( fruits );
console.log( myEntries ); // [ [ 'apple', 28 ], [ 'orange', 17 ], [ 'pear', 54 ] ]

console.clear()

// PRACTICE ------------------------------------
// Using a regular loop console log the keys

for( let i = 0; i < myEntries.length; i++ ){
    console.log( myEntries[i][0])
}

//-----------------------------------------------Object.keys( myObj )
// Returns an array containing the keys of an object

const myObj = {
    fname: "Vincent",
    lname: "Van Gogh",
    nationality: "Dutch",
    profession: "Painter",
};

const keys = Object.keys( myObj );
console.log( keys ); // [ 'fname', 'lname', 'nationality', 'profession' ]

// ---------------------------------------- Object.values( myObj )
// Returns an array containing the values of an obj

const values = Object.values( myObj );
console.log( values );// [ 'Vincent', 'Van Gogh', 'Dutch', 'Painter' ]



// PRACTICE
/* 
 Create an array ( animals ) containing the following values: "🐔", "🐷", "🐑", "🐰".
 Next create a new array ( names ) containing the following names 'Gertrude', 'Henry', 'Melvin', 'Billy'.
 Use the right loop to ** RANDOMLY ** assign the names to the animals ( do you remember how to get a random num between 0 and 3? )
 Note: the same name can be assigned to more than 1 animal

Possible result..
    Billy the hen
    Gertrude the pig
    Billy the sheep
    Melvin the bunny
*/

// declare array of animals
let animals = ["🐔", "🐷", "🐑", "🐰"];
// declare array of names
let names = ["Gertrude", "Henry", "Melvin", "Billy"];

for (let animal of animals) {
  //console.log( animal ) // hen, pig, sheep, bunny
  
  // Now we need to randomly pick a name for our animal
  // Let's grab a random number from 0 to 3 included
  let nameIdx = Math.floor( Math.random() * names.length );// number 0 to 3
  console.log(`${names[nameIdx]} the ${animal}`);
}

