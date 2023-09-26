
// 1. Create a variable that contains the string "Hello World". 
// Display the position of the first occurrence of "World" in the variable.

const str = "Hello World";
const wordPos = str.indexOf("World");
console.log( wordPos ); // 6

// 2. Using the variable from exercise 1, Use the replace() method to replace "World" with "Universe".
const str2 = str.replace("World", "Universe");
console.log( str2 ); // Hello Universe

// 3. Convert the value of the variable in exercise 1 to upper case.
const strUpper = str.toUpperCase();
console.log( strUpper );

// 4. Convert the value of the variable in exercise 1 to lower case.
const strLower = str.toLowerCase();
console.log( strLower );

// 5. Create a variable that contains the string "Hello" and another variable that contains the string "World". 
// Use the concat() method to join the two strings in these variables
const strVal1 = "Hello";
const strVal2 = "World";
const unite = strVal1.concat( " ", strVal2 , " balbla");
console.log( unite );

// 6. Create a variable that contains the string "Rome,Berlin,Paris". 
//    Now take out only the portion that says "Berlin"
//    Now take out only the portion that says "Berlin,Paris", add a space between the 2 cities and remove the comma (all in 1 go).
const cities = "Rome,Berlin,Paris";
// cities.slice( 5, 11 );
const chunk1 = cities.slice( cities.indexOf("Berlin"), cities.lastIndexOf(",") );
console.log( chunk1 ); // Berlin
const chunk2 = cities.slice( cities.indexOf("Berlin")).replace(",", " ");
console.log( chunk2 ); // Berlin Paris

// 7. Create a template string according to the following example: 

// `const a = "John";
// const b = "Joe";
// const c = "Jack";
// const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."`

const a = "John";
const b = "Joe";
const c = "Jack";

const template = `"your template string" ➞ "Their names were:  ${a},  ${b}  and  ${c}."`
console.log( template ); // "your template string" ➞ "Their names were:  John,  Joe  and  Jack."

// 8. Create a variable that contains the string "whatTheOMGnicCAGEtadahheHIDINGinHere". 
// Console log the index of where Nic Cage is hiding. 
const longStr = "whatTheOMGnicCAGEtadahheHIDINGinHere";
const strToFind = "Nic Cage";
const findNic = longStr.toLowerCase().indexOf( strToFind.toLowerCase().replace(" ", "") );
console.log( findNic ); // 10

// 10. Create a variable called planet and assign the value of 'earth'
//     Capitalize the first letter and print "Earth" to the console 
//     IMPORTANT: you should only use 2 variables (planet and nameCapitalized)

const planet = "earth";
const capitalized = planet[0].toUpperCase();
console.log( capitalized + planet.slice(1) ); // Earth

// 11. Create a variable called testString2 and assign the following value “  I love this stuff  ”
//     Now remove spaces at the start and at the end    

const testString2 = "  I love this stuff  ";
const trimStr = testString2.trim();
console.log( trimStr );