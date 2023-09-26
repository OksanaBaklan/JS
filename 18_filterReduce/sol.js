"use strict"
// # forEach and map
// **1.** Write a function called `doubleValues` which accepts an array 
// and returns a new array with all the values in the array passed to the function doubled

// Examples:
// ```
// doubleValues([1,2,3]) // [2,4,6]

function doubleValues( arr ) {
    console.log( arr) // [2, 3, 4]

   return arr.map(element => element * 2);

//    Same as line 12 just using an extra ( unnecessary) variable   
//    const currentArray = array.map(element => element * 2);
//    return currentArray;
    
}
console.log( doubleValues( [2, 3, 4] ) ); // [ 4, 6, 8 ]
console.clear()

// Doing the same using forEach
function doubleValues2( array ) {

    const currentArray = [];

    array.forEach(element => {
        currentArray.push(element * 2);
    });

    return currentArray;

} 

console.log( doubleValues2( [2, 3, 4] ) );

console.clear();

// **2.** Write a function called `onlyEvenValues` which accepts an array and 
// returns a new array with only the even values in the array passed to the function


// Examples:
// ```
// onlyEvenValues([1,2,3]) // [2]

function onlyEvenValues(array) {

    const currentArray = [];

    array.forEach(element => {
        if (element % 2 === 0) {
            currentArray.push(element);
        }
    });

    return currentArray;
}

let returnEven = onlyEvenValues([1, 2, 3]); // [2])
console.log( returnEven );

console.clear();
// **3.** Write a function called `showFirstAndLast` which accepts an array of strings and returns a new array with only the first and last character of each string

// Examples:
// ```
// showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
// showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
// ```

function showFirstAndLast(array) {
    const currentArray = array.map(element => element.substring(0, 1) + element.substring(element.length - 1));
    return currentArray;

    // Or alternatively we can ditch currentArray variable and return right away
    // return array.map(element => element.substring(0, 1) + element.substring(element.length - 1));
}
console.log(showFirstAndLast(['colt', 'matt', 'tim', 'udemy']));

let myString = "catp";
console.log( myString.substring(2)); // tp
console.log( myString.substring( myString.length - 1)) //  we always get the last char

console.clear();


// **4.** Write a function called `addKeyAndValue` which accepts an array of objects, a key, and a value and then returns the array passed to the function with the new key and value added for each object 

// Examples:
// ```
// addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 

// // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
// ```

function addKeyAndValue( array, key, value ) {

    let newArr = array.map(element => {
        element[key] = value; // we add "title" = "instructor" as a new prop to each individual object
        // key is not wrapped in double quotes because it is a variable
        return element;
    });

    return newArr;
}
console.log(addKeyAndValue( [ { name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' } ], 'title', 'instructor') );
/*
    First iteration
    element is { name: "elie"}
    element["title"] = "instructor"
    return element
*/


console.clear()
// **5.** Write a function called `vowelCount` which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so that both lowercase and uppercase letters should be counted

// Examples:
// ```
// vowelCount('Elie') // {e:2,i:1};
// vowelCount('Tim') // {i:1};
// vowelCount('Matt') // {a:1})
// vowelCount('hmmm') // {};
// vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
// ``

function vowelCount( string ) {

    const vowelArray = ["a", "e", "i", "o", "u"];
    const countObject = {};
    const strLower = string.toLowerCase(); // elie
    const currentArray = [...strLower]; // [ 'e', 'l', 'i', 'e' ]

    
    currentArray.forEach((letter) => { // We start looping over our array of chars
        // using includes() check if the current char is a vowel
        if (vowelArray.includes(letter)) { 
            !countObject[letter] ? countObject[letter] = 1 : countObject[letter]++
        } 
    });

    return countObject;
}

console.log(vowelCount( 'Elie' )); // {e:2,i:1};