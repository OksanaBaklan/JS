/*
    Recursion happens when a function calls itself untill it doesn't anymore because a certain condition has been met
    If there is not condition we are going to end up in a neverending loop
    When used properly recursion is a more elegant solution to solving a problem
*/

// TASK: Lets create a function countDown that takes a number and counts down to 0 
function countDown( number ){
    for(let i = number; i >= 0; i--){
        console.log( i )
    }
}

//countDown(3);
// 3
// 2
// 1
// 0

// ----------------- with recursion

function countDownRec( number ){
    // condition that will stop the recursive call
    if( number < 0 ){ // BASE CASE CONDITION
        return;
    }

    console.log( number );
    // RECURSIVE CALL 
    countDownRec( number - 1);
}

countDownRec(3);

/*
countDownRec(3)

number is 3
FALSE
log(3)
countDownRec( 3 - 1) 2

number is 2
FALSE
log(2)
countDownRec( 2 - 1 ) 1

number is 1
FALSE
log(1)
countDownRec( 1 - 1 ) 0

number is 0 
FALSE
log(0)
countDownRec( 0 - 1 ) - 1

number is -1
TRUE
STOP RECURSION

*/

// TASK Create a function called "add" that takes a number as a parameter and sums it up with its preceeding nums and returns it
// 4 = 4 + 3 + 2 + 1 + 0
function add( num ){
    let sum = 0;

    for( let i = num; i >=0; i --){
        sum = sum + i
    }
    return sum 
}

let retSum = add( 4 ); 
//console.log( retSum ); //10



// ---------------------- with recursion
function addRec( num ){
    // Condition that will stop recursion
    if( num === 0 ){
        return 0;
    }

    return num + addRec( num - 1)
}

console.log( addRec(3) ); // 6

/*
num 3 
check FALSE
3 + addRec(2)

num 2
check FALSE
3 + 2 + addRec(1)

num 1
check FALSE
3 + 2 + 1 + addRec(0)

num 0 
check TRUE
3 + 2 + 1 + 0

bubbles up 
return  0 + 1 + 2 + 3 = 6
*/


// TASK create a function that takes a number and returns the factorial 
// 4 * 3 * 2 * 1
let factor = function( number ){
    let result = 1;

    for(let count = number; count >=1; count--){
        result = result * count
    }
    return result
}

console.log( factor( 4 ) ); // 24

// ----------------- using refactoring

let factorialRec  = function( number ){
    //BASE CONDITION
    if( number === 0 ){
        return 1
    }
    // RECURSION
    return number * factorialRec( number - 1 )
}

console.log( factorialRec(3) ); // 6 