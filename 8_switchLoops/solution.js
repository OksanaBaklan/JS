//1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). 
// Print true if either of them are in the said range.

let int1 = 1;
let int2 = 50;

if( (int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99) ){
    console.log( true );
} else {
    console.log( false );
}

//2. Check if three given integer values are in the range 50 to 99 (inclusive). 
// Return true if one or more of them are in the said range.

let int3 = 100;

if( (int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99) || (int3 >= 50 && int3 <= 99) ){
    console.log( true );
} else {
    console.log( false );
}

//3. Declare the variables a, b and c - give them number values. 
// Check which one out of the three variables has the largest value. 
// Then change the values of the variables to see if your conditional still works. 

let a = 99; 
let b = 1; 
let c = 49; 
console.log( Math.max( a, b, c ) );

//4. Create a new string adding "Py" in front of a given string. 
// If the given string begins with "Py" then return the original string.

const strPrefix = "Py";
const str = "thon";

if( str.substring(0,2) === "Py") { 
    console.log( str );
} else {
    console.log(`${strPrefix}${str}`);
}

//5. Calculate the sum of the two integers. If the sum is in the range 50..80 return 65 
// otherwise return 80. 

let sumTwoIntegers = 1 + 50;
if ( sumTwoIntegers >= 50 && sumTwoIntegers <= 80) {
    console.log( 65 );
} else {
    console.log( 80 );
}

//6. Check whether the sum of two integers is 8 or whether their difference is 8. 

let int4 = 6;
let int5 = 2;

if ( ( int4 + int5 === 8) || ( Math.abs( int4 - int5) === 8 ) ){
    console.log( true );
} else  {
    console.log( false );
}

//7. Check whether one of two integers is 15 or if their sum is 15. 
// If one of these is the case, return true. 

if ( (int4 === 15 ) || ( int5 === 15 ) || ( int4 + int5 === 15 ) ) {
    console.log( true );
} else {
    console.log( false );
}

//8. Check whether one of two integers is a multiple of 7 or 11. 
// in order to be a multiple of a number it means that 
// if we divide it by 7 or 11 we must have 0 as remainder

int4 = 6;
int5 = 2;

if ( ( int4 % 11 === 0  ||  int4 % 7 === 0 ) || ( int5 % 11 === 0  ||  int5 % 7 === 0 ) ){
    console.log( true )
} else {
    console.log( false )
}

//9. Calculate the sum of the two given integers. 
// If the two values are same, then return triple their sum. 

sumTwoIntegers = int4 + int5;

if ( int4 === int5 ) {
    const tripleSum = sumTwoIntegers * 3;
    console.log( tripleSum )
} else {
    console.log( sumTwoIntegers )
}

//10. Calculate the difference between a specified number and 19. 
// Return double the difference if the specified number is greater than 19.


int5 = 2;
let diffFrom19 = Math.abs( int5 - 19 );

if( int5 > 19 ){
    const diffDouble = 2 * diffFrom19;
    console.log( diffDouble );
} else {
    console.log( diffFrom19 );
}

//11. Bonus: Age/Life-stage
/*
    BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. 
    Create an if/else statement to check whether the person's age is less than 13. 
    If so, print "firstName is a child". 
    If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". 

    If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". 
    If none of these conditions apply, print "firstName is a adult".
*/

const firstName = "Bill";
const age = 22;

if (age < 13) {
    console.log(`${firstName} is a child`);
} else if (age < 20) {
    console.log(`${firstName} is a teenager`);
} else if (age < 30) {
    console.log(`${firstName} is a young adult`);
} else {
    console.log(`${firstName} is an adult`);
}

// More complete ( but not exactly what was requested in the solution)
/*
    if (age < 13) {
        console.log(`${firstName} is a child`);
    } else if (age < 20) {
        console.log(`${firstName} is a teenager`);
    } else if (age < 30) {
        console.log(`${firstName} is a young adult`);
    } else if (age >= 30) {
        console.log(`${firstName} is an adult`);
    } else {
        console.log("Oi, put in a valid numeric age!");
    }

*/
