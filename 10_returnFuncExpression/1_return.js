// A function can be called by another function

function second() {
    console.log("I am function second");
}

function first(){
    console.log("I am function first");
    second(); // Calling another function
}

// We are just calling function first() but func second() will be executed as well because it is called on line 9
first();

console.clear();
// RETURN
// The return statement determines the value returned by a function
// It stops function execution


function sum( num1, num2 ){
    // console.log( num1 + num2 );// if we log the value to the terminal we won't be able to reuse it
    // but if we return that value we can store it somewhere ( in a variable ) and reuse it
    return num1 + num2; 
}

const result = sum( 1, 2 );
console.log( result ); // 3



// Functions without a return statement return undefined
function doNothing(){
    // empty
}

let doNothingReturn = doNothing();
console.log( doNothingReturn ); // undefined

// A return keyword without a value will also return undefined

function doNothing2(){
    return;
}

console.log ( doNothing2() ); // undefined


// Return stops function execution and quits the function

function returnStop(){
    console.log("before return statement");
    return true;
    console.log("after return statement");
}

returnStop(); // line 54 will never run because of the return statement on line 53

// A function can contain multiple return statements but it will only return one of them

function checkAge( age ){

    if (age >= 18){
        return true;
    } else {
        return false;
    }

}
// The returned value should be saved in a variable in order to reuse it
let grabReturn = checkAge( 19 );
console.log( grabReturn ); // true

// Returning arrays

const myArr = [23, 42, 16, 32, 48, 87, 11, 92, 43, 56];
// Store values smaller than 50 into a new array

function extractNumbers( arr ) {
    let newArr = [];

    // We need to loop over each element of myArr
    for( let i = 0; i < arr.length; i++ ){
        // We need to check if each element < 50
        if( arr[i] < 50 ){
            // if that's the case we push the value to newArr
            newArr.push( arr[i] );
        }
    }
    // Once we are done we return newArr (make sure you don't return inside a loop!!)
    return newArr;

}

let retArray = extractNumbers( myArr );
console.log( retArray ); // [ 23, 42, 16, 32, 48, 11, 43 ] 