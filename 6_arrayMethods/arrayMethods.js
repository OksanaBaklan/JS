// Arrays
// An array is a special type of variable that can hold more than 1 value. All values are comma separated
// Arrays are 0 indexed

let someArray = [1,2,3];
let firstNum = someArray[0];
console.log( firstNum ); // 1


// How to create an array option 1
let arr = new Array(); // new Array() will create an empty array 
console.log( arr ); // []

// How to create an array option 2 (Most common one)
let arr2 = [];
console.log( arr2 ); // []

// What's the type of an array?
console.log( typeof arr2 ); // object


// ----------------------------------------------------
let fruits = [];
fruits = ["apple","orange","banana","melon","lemon"];
console.log( fruits );

// let's grab some apples
console.log( fruits[0] );//apple
// Check how many items in array
console.log( fruits.length ); //5

// How can I replace the first element?
fruits[0] = "cherry";
console.log( fruits ); // [ 'cherry', 'orange', 'banana', 'melon', 'lemon' ]

// Adding new element to the array (manually)
fruits[5] = "Grapes";
console.log( fruits ); // [ 'cherry', 'orange', 'banana', 'melon', 'lemon', 'Grapes' ]

// Deleting values from specific position
let myArray = ["a","b","c"];
delete myArray[1];
console.log( myArray ); // [ 'a', <1 empty item>, 'c' ]



// ---------------------------------------------------
/*
    quick recap about objects
    An object is a container of key:value pairs
    An object is different from an array becayse it's more structured..the info comes with a "label"
*/

let myObj = { 
    name: "Paola",
    lastName: "Pastore"
}

// Retrieving values from objects
console.log( myObj.name ); // Paola


// Arrays can contain a mix of values
let mixData = ["Apple",{ name: "John"}, true, [1,2], 6];
console.log( mixData ); // [ 'Apple', { name: 'John' }, true, [ 1, 2 ], 6 ]
 // TASK print John to the console
 console.log( mixData[1].name ); // John
 // TASK print number 2 from the array 
 console.log( mixData[3][1] ); // 2
console.clear();
// ------------------ ARRAY METHODS
let fruits2 = [
    'Apple', 
    'Orange', 
    'Banana', 
    'Melon', 
    'Lemon'
];

// pop() METHOD ---------------------------------------------------------------------------- 
// Removes last element of an array and returns it.

fruits2.pop();
console.log( fruits2 ); // [ 'Apple', 'Orange', 'Banana', 'Melon' ]

// Grabbing returned value
let extractedFruit = fruits2.pop();
console.log( fruits2 ); // [ 'Apple', 'Orange', 'Banana' ]
console.log( extractedFruit );// Melon

// push() METHOD ---------------------------------------------------------------------------- 
// Appens new elements to the end of an array, and returns the new length (of the array);
// @param - New elements to add to the array

fruits2.push("grapes");
console.log( fruits2 ); // [ 'Apple', 'Orange', 'Banana', 'grapes' ]

// We can add more than 1 element at a time
fruits2.push("papaya","Kumquat"); // [ 'Apple', 'Orange', 'Banana', 'grapes', 'papaya', 'Kumquat' ]
console.log( fruits2 );

// shift() METHOD ---------------------------------------------------------------------------- 
// Removes first element from an array and returns it
let shiftedItem = fruits2.shift();
console.log( shiftedItem ); // Apple
console.log( fruits2 ); // [ 'Orange', 'Banana', 'grapes', 'papaya', 'Kumquat' ]

// unshift() METHOD ---------------------------------------------------------------------------- 
// Inserts new elements at the start of an array and returns its length

fruits2.unshift("lemon","kiwi");
console.log( fruits2 );// ['lemon','kiwi','Orange','Banana','grapes','papaya','Kumquat']
console.clear();
// splice() METHOD ---------------------------------------------------------------------------- 
// Removes elements from an array and, if necessary, inserts new elements in their place. 
// It also returns the deleted elements
// @param1 - the zero based location from which to start removing elements
// @param2 - The number of elements to remove
// IT WILL MODIFY THE ORIGINAL ARRAY

// SPLICE 1 PARAM
let myFish = ["angel", "clown", "manadarin", "sturgeon"];
let removed = myFish.splice( 2 ); // removes everything starting from pos 2 (included)
console.log( myFish ); // [ 'angel', 'clown' ]
console.log( removed ); // [ 'manadarin', 'sturgeon' ]

// SPLICE 2 PARAMS
let greeting = ["Have","a","nice","day"];
greeting.splice( 0, 1 ); // ( starts removing from pos 0, removes 1 element (not position 1) )
console.log( greeting ); // [ 'a', 'nice', 'day' ]

// SPLICE MORE THAN 2 PARAMS
let greeting2 = ["Have","a","nice","day"];
// let's remove the first 3 els and replace them with others
greeting2.splice( 0, 3, "It is", "a", "beautiful" ); // ( from pos 0, remove 3 els, and add the remaining params )
console.log( greeting2 ); // [ 'It is', 'a', 'beautiful', 'day' ]

// SPLICE also allows you to insert an element anywhere you want 
// For that we need to set the second param to 0

let statement1 = [ "We", "are", "learning", "the", "language", "JavaScript" ];
// we want to see - we are learning the PROGRAMMING language Javascript
statement1.splice(4, 0, "programming" ); // from pos 4, remove nothing, add "programming"
console.log( statement1 ); // [  'We','are','learning','the','programming','language','JavaScript'];

// slice() METHOD -----------------------------------------------------
// Returns a portion of an array as a new array
// Selects from a given start, up to a given end ( not inclusive )
// @param start The beginning index of the specified portion of the array.
// @param end The end index of the specified portion of the array.
// DOES NOT MODIFY THE ORIGINAL ARRAY

let numbersArr2 = [0,1,2,3,4,5,6];
let slicedElemens = numbersArr2.slice( 1, 3 ); // start from pos 0 and end ( but not include ) pos 3
console.log( slicedElemens ); // [ 0, 1, 2 ]
console.log( numbersArr2 ); // [0,1,2,3,4,5,6]

// concat() METHOD ----------------------------------------
// Combines 2 or more array and returns a new array
// It accepts any nymber of arguments
// Does not modify original array

let numbersArr3 = [1,2]; 
let numbersArr4 = [3,4]; 

let concatNumber = numbersArr3.concat( numbersArr4 );
console.log( concatNumber ); // [ 1, 2, 3, 4 ]
// Does not modify original array 
console.log( numbersArr3 ); // [ 1, 2 ]

// We can also concatenate more than 2 arrays
let concatMulti = numbersArr3.concat( [3,4], [5,6] );
console.log( concatMulti ); // [ 1, 2, 3, 4, 5, 6 ]


// reverse() METHOD ------------------------------------
// Reverses the elements in an array
// This method mutates the array

const aNewArray = [1,2,3,4,5];
let test = aNewArray.reverse(); 
console.log( test ); // [ 5, 4, 3, 2, 1 ]
console.log( aNewArray ); // [ 5, 4, 3, 2, 1 ]

// indexOf() METHOd ---------------------------------------
// Returns the index of the first occurrence of a value in an array

let anotherArray = ["hello","world"];
console.log( anotherArray.indexOf("hello") ); // 0
console.log( anotherArray.indexOf("pax") ); // -1

// includes() METHOD ------------------------------------
// Determines wheather an array includes a certain element, returning true or false
// @param searchElement — The element to search for.
// @param fromIndex — The position in this array at which to begin searching for searchElement

let includArray = ["ciao", "blah"];
console.log( includArray.includes("ciao")); // true
console.log( includArray.includes("ciao", 1)); // false

// join() METHOD ------------------------------------------
// Turns an array into a string
// Adds all the elements of an array into a string, separated by the specified separator string.
// @param separator — A string used to separate one element of the array from the next. If omitted, the array elements are separated with a comma.

let joinArr = ["web","dev"];
let newVariable = joinArr.join("-");
console.log( newVariable ); // web-dev
 

