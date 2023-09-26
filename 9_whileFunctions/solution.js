"use strict";

//Q1 Addition
// Write a program to add up the numbers from 1 up until 20.

let sum = 0;
for( let i=1; i <= 20; i++ ){
    sum += i;
}
console.log( sum ); // 210

//Q2 Bottles of Beer
// Write a program that will output, "There is 1 bottle of beer on the wall." 
// "There are 2 bottles of beer on the wall" up until there are five bottles.

for ( let i = 1; i <= 5; i++ ){
    if( i > 1 ){
        console.log(`There are ${i} bottles of beer on the wall.`)
    } else {
        console.log(`There is ${i} bottle of beer on the wall.`)
    }
}

//Q3 Odd/Even
// Write a program that will iterate from 0 to 20. 
// For each iteration, it will check if the current number is even or odd. 
// The result of the check should be output to the console (e.g. "2 is even").

for ( let i = 0; i <= 20; i++ ) {
    if ( i % 2 === 0 ) {
        console.log( `${i} is even`);
    } else {
        console.log( `${i} is odd`);
    }
}

//Q4 Multi tables
// Write a program that will iterate from 0 to 10. 
// For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

for ( let i = 0; i <= 10; i++ ){
    console.log( `${i} * 9 = ${i * 9}`);
}

console.clear();

//Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
let multiplier;
for( let i=1; i <= 10; i++ ){

    for ( let y=1; y <= 10; y++ ) {
        multiplier = i * y;
        console.log(`${i} * ${y}= ${multiplier}`);
    }
    console.log("");
}

console.clear();
//Q5 FizzBuzz
// Write a program which iterates the integers from 1 to 100. 
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".
for (let i = 1; i <= 50;  i++) {
    if ( i % 3 === 0 && i % 5 === 0 ){
        console.log("FizzBuzz")
    } else if ( i % 3 === 0 ) {
        console.log("Fizz")
    } else if ( i % 5 === 0 ){
        console.log("Buzzzz")
    } else {
        console.log(i)
    }
}
console.clear();
//Q6 Sum of Multiples
// Write a program to add the multiples of 3 and 5 under 1000.

let multy = 0;
for (let i = 1; i <= 100; i++ ) {
    if ( i % 3 === 0 && i % 5 === 0  ) {
        multy += i;
        //console.log( multy );
    }
}
console.log( multy );
console.clear();

//7
// 100, 200... 1000
for (let i = 100; i <= 1000; i += 100) {
    console.log( i );
}

// 0, 2, 4... 10
for (let i = 0; i <= 10; ) {
    console.log(i);
    i += 2; 
}

// 

// 3, 6, 9 ... 15

for (let i = 3; i <= 15; ) {
    console.log( i );
    i += 3;
}

// 9, 8, 7... 0

for (let i = 9; i >= 0; i-- ){
    console.log(i);
}
console.clear();

// 1 1 1  2 2 2  3 3 3  4 4 4
for ( let i = 1; i <= 4; i++ ){

    for ( let j = 1; j <= 3; j++ ){
        console.log( i )
    }

}
console.clear();
// 0 1 2 3 4  0 1 2 3 4  0 1 2 3 4

for ( let i = 1; i <= 3; i++ ){

    for ( let j = 0; j <= 4; j++ ){
        console.log( j )
    }
    console.log("");

}