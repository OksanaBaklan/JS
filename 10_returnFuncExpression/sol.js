/*
1. Print Exponential Values
write a function called printExponentialValues that accepts two numbers as parameters
If one or both of the passed arguments are not a number, the message "x or y is not a number" should be printed to the terminal
The function should print the resulting series of numbers to the terminal as a single string separated by space
For example if we have function(3, 5) The function should print 3 9 27 81 243 
(Prints 5 exponential values of 3)
*/

 // arguments
//2 4 8 

for( let i=0; i < 2; i++ ){
    console.log("hi");
}

/*
    let i gets initialized to 0 
    0 < 2 (yes)
    log( Hi )
    i++ (i = 1)

    1 < 2 (yes)
    log( Hi )
    i++ (i = 2 )

    2 < 2 (no)
    We quit the loop
*/

console.clear();


function printExponentialValues( num1, num2 ){
    if( typeof num1 !== "number" || typeof num2 !== "number"){
        console.log("num1 or num2 is not a number")
    } else {
        
        let exponentResult = 1;
        let values = "";

        for(let i=0; i < num2; i++ ){
            // exponentResult =  exponentResult * 2;
            exponentResult *= num1; 
            console.log( exponentResult );
            values += `${exponentResult} `;
        }
        console.log( values ); // 2 4 8
    }
}

printExponentialValues( 2, 3 );
// 2  first round
// 2 * 2 (4) second round
// 4 * 2 (8) third round

// ***************************************************
// 2 Create a function named printFavoriteFruit.
// Declare a variable called fruit outside of the function and store your favorite fruit as a value.
// Reassign the variable within the function and print "My favorite fruit is: x".
let fruit = "banana"; // global scoped

function printFavoriteFruit(){
    fruit = "watermelon";
    console.log(`My fav fruit is ${fruit}`)
}
console.log("line 67 " + fruit ); // banana
printFavoriteFruit(); // My fav fruit is watermelon
console.log("line 69 " + fruit ); // watermelon

// ***************************************************
// Multiply a Number by Itself
/*
Create a function named exponent that takes two numbers as parameters. 
The second parameter defines how many times the first number should be multiplied by itself. 
Save the output in a variable named result inside the function.

Then, try to access the variable result outside of the exponent function. 
Is this possible? Why/Why not? Comment your answer in the index.js file.
*/
// global
function exponent( num1,num2) {
    let result = Math.pow( num1, num2 ); // locally scoped
    console.log( result );
}
console.log( result );// result is not defined on the global scope
exponent(2, 3);// 2 * 2 * 2 = 8 

console.log( result );// result is not defined on the global scope