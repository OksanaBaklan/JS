// Q1 Sum of Numbers
/*
Create a program that adds up the numbers in an array (of at least 3 numbers)
It prints the result to the Terminal in the following format: "The sum of the array is [sum]; the product of the array is [product].".
Bonus: Print to screen both the sum and the product of these numbers.
*/
const numArr = [4, 3, 13, 2];
let sum = 0;
let product = 1;

for (let i = 0; i < numArr.length; i ++) {
   sum += numArr[i];
   product *= numArr[i];
}
console.log(`The sum of the array is ${sum}; the product of the array is ${product}.`);

// Q2 Hello Friend
/*
Create an array filled with your friends' and family's names.
Loop over the array and greet each friend in the format:"Hello [friend]!"
Print the index of each item in the array.
*/

const friendsArr = ["Becky", "Dan", "Rika", "Maria", "Kevin"];
for (let i = 0; i < friendsArr.length; i++) {
   console.log(`Hello ${friendsArr[i]}!`);
   console.log(`${friendsArr[i]} is at index ${i} of my friends array!`);
}

// Q3 City Names

const cityArr = ["Berlin", "Paris", "Prague", "Rome"];

function cityNames(arr) {
    // create empty string that will hold values 
    let str = "";
    for (i = 0; i < arr.length; i++) {
        // Adding values to string
       str += `${arr[i]},`;
    }

    // removing last comma and logging to terminal
    console.log( str.slice(0, str.length - 1) );
}

cityNames( cityArr );

// Q4 Odds and Evens
/*
Write a function named oddsEvens that changes a given array 
by adding 1 to each odd integer and 
subtracting 1 from each even integer.
*/

const intArr = [3, 5, 2, 4];

function oddsEvens( arr ) {
    // Create new arr to hold new values
    const oddsEvens = []; 

    for (let i = 0; i < arr.length; i++ ){

        // we check if value is even
        if ( arr[i] % 2 === 0){
            // if even we subtract 1
            oddsEvens.push( arr[i] - 1);
        } else {
            // if odd we add 1
            oddsEvens.push( arr[i] + 1);
        }
    }
    console.log( oddsEvens ) ;
}
 
// we call the function and pass the array 
oddsEvens( intArr );


// Q5 capiTALize
/*
Create a function named capitalize that capitalizes the first letter of each element in an array of names.
*/
const nameArr = ["matt", "sara", "lara"];

function capitalize( arr ) {

    for (i = 0; i < arr.length; i++) {
        // matt = "m".toUpperCase() + "att".toLowerCase
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase();
    }

    console.log( arr );

}

capitalize( nameArr );

// Q6 No Duplicates
// Write a function named noDuplicates which transforms an array into a set of unique values.
// noDuplicates([1, 4, 4, 7, 7, 7]) ➞ [1, 4, 7]

const numArr1 = [3,3,4,5,6,6];

function noDuplicates( arr ) {
    // we loop over arr
    for (i = 0; i < arr.length; i++) {
    
        // check if value is equal to the next one
        if (arr[i] === arr[i + 1]) {
                // we remove the value 
                arr.splice(i, 1);
                // since we removed an item, a new one will now take its place
                // this new value needs to be check as well.. 
                //so we decrease the val of i to perform a new check on the same index  
                i--; 
        }

    }
    console.log( arr );
}

noDuplicates( numArr1 ); // [ 1, 4, 7 ]

// Q7 Repeat It

function repeatItem( item, times ) {
    // Create empty array
    let repArray = [];

    // loop over array X times 
    for (let i = 0; i < times; i++) {
        // push item to new repArray
        repArray.push( item );
    }
    console.log( repArray );
}

repeatItem("oi", 3); // [ 'oi', 'oi', 'oi' ]

// Bonuses

// Factors WRONG
// Write a function named isFactorChain that determines whether or not a given array is a factor chain
const arr1 = [3, 6, 12, 36];

const arr4 = [10, 1];

function isFactorChain( arr ) {
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            console.log( true );
          
        } else if (arr[i + 1] % arr[i] !== 0) {
            console.log( false );
        }
    }
}

isFactorChain( arr1 ); 