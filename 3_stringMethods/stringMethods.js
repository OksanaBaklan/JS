/*
    A string - any text surrounded by double or single quotes.
    Strings are 0 based
*/

let myString = "abc";
let strFrstLtr = myString[0];
console.log( strFrstLtr ); // a

let stringCount = myString.length;
console.log( stringCount ); // 3

/*
    String methods 
    A string method is an action that can be run on strings
    All string methods return a new string. 
    String methods do not modify the original string.
*/

/*
    indexOf() METHOD --------------------------------------------
    returns the position of the first occurence of a specified substring
    0 based
    returns -1 is search was unsuccessful ( -1 is the only possible negative value )
    case sentive
*/

let myString2 = "please find me please";
let findPosition = myString2.indexOf( "please" );
console.log( findPosition ); // 0

// Case sensitive
let findPos2 = myString2.indexOf( "Please" );
console.log( findPos2 ); // -1 because of the uppercase P

// Empty spaces
let findPosWithSpace = myString2.indexOf( " please" );
console.log( findPosWithSpace ); // 14 ( counts chars and spaces )

// PASSING SECOND PARAM
// The index at which to begin searching the String. 
// If omitted, search starts at the beginning of the string.

let findPosFrom = myString2.indexOf( "ease", 3 );
console.log( findPosFrom ); // 17
console.clear();
/*
    lastIndexOf() METHOD --------------------------------------------
    returns last occurrence of the specified value
    0 based
    returns -1 if search was unsuccessful
    case sensitive
*/

let myString3 = "Mork & Mindy";
/*
    0 M
    1 0
    2 r
    3 k
    4 empty
    5 &
    6 empty
    7 M ( Mindy );
*/
let findLastPosition = myString3.lastIndexOf("M");
console.log( findLastPosition ); // 7

// second param
let findLastPosParam = myString3.lastIndexOf( "M", 4 );
// Search will be performed in a range (0 - 4);
console.log( findLastPosParam ); // 0

console.clear();
/*
    Includes() METHOD --------------------------------------------
    Very similar to indexOf but returns a boolean (true/false) 
*/

let sentence = "the fox jumps over the lazy 3 dog";
let check = sentence.includes( "fox" );
console.log( check ); // true

console.clear();
/*
    slice() METHOD --------------------------------------------
    Returns a section of a string.
*/

let fruits = "apple, banana, kiwi"; // banana start at pos 7
let sliceItUp =  fruits.slice( 7 );
console.log( `slice example 1:  ${sliceItUp}` ); // banana, kiwi

// Second param
// Defines a position where to stop searching ( the end pos is not included );
let sliceWithParams = fruits.slice(7, 13);
console.log( sliceWithParams ); // banana

// Example with negative param ( slicing from the end )
let slicedStringEnd = fruits.slice( -4 ); // count from the end ( doesnt start from 0 )
console.log( slicedStringEnd ); // kiwi

/*
    substring() METHOD --------------------------------------------
    Similar to slice but does NOT accept NEGATIVE values
*/
let subString3 = "apple, cherry, kiwi";
let getSubString = subString3.substring( 7 );
console.log( getSubString ); // cherry, kiwi
console.clear();

/*
    replace() METHOD --------------------------------------------
    replaces a specified value with another one
    @param searchValue — A string to search for.
    @param replaceValue — A string containing the text to replace for
*/

let stringToReplace = "It is lovely outside";
let replacedSentence = stringToReplace.replace("lovely outside", "cold");
console.log( replacedSentence ); // It is cold outside

/*
    toUpperCase() METHOD --------------------------------------------
    Converts all the alphabetic characters in a string to uppercase
*/

let text1 = "hello World";
let upper = text1.toUpperCase();
console.log( upper ); // HELLO WORLD

/*
    toLowerCase() METHOD --------------------------------------------
    Converts all the alphabetic characters in a string to lowercase
*/

let text2 = "HI THERE!";
let lower = text2.toLowerCase();
console.log( lower ); // hi there!

/* 
    trim() METHOD --------------------------------------------
    Removes the leading and trailing white space and line terminator characters from a string.
*/

let stringToTrim = "  Hello   ";
console.log( stringToTrim );
let trimMe = stringToTrim.trim();
console.log( trimMe ); // Hello ( with no spaces around )



