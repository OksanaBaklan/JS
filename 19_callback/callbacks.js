/*
A callback is a function passed to another function ( as an argument)
A callback is necessary in order to make sure that a function is called immediately after the previous function is done executing
*/

let arr = [1,2,3];
arr.forEach( function(val){ // this anonymous function is a callback
//    console.log( val );
})

// Another example of higher order function is setTimout
// setTimeout is a built in function that executes some code once the times expires

// setTimeout( function(){
//     console.log("2 secs have elapsed")
// }, 2000)


// Why do we need a callback?
// to make sure a function is executed immediately after the previous one

function first(){
    console.log( "first")
}

function second (){
    console.log( "second" )
}

// first();
// second();



// Unexpected things may happen...


function firstFunc() {

    setTimeout( function(){
      //  console.log("firstFunc")
    },2000) // 2 millisecs

}


function secondFunc(){
    console.log("secondFunc")
}

firstFunc();
secondFunc();


console.clear();



// In order to avoid these situations we use a callback function

// Callback in action -----------------------

function callback(){ // this will be passed to another function as an argument
    console.log("I am a callback function")
}


function caller( cbFunc ){ // function caller will receive another function
    setTimeout( function(){
       // console.log("I am the main function");
      //  cbFunc(); // calling the callback function
    },2000) // 2 millisecs
}

caller( callback ); // here we pass the callback to "caller" ( the main function )
console.clear();


// Example using params ---------------------

function secondaryFunc( name ){ // Our callback expects a param ( the param will come from line 87)
    console.log(`I was called by ${name} **** `)
}

function mainFunc( cb ) {
    console.log( "I am main func");
    cb("mainFunc"); // here is where we call the callback and pass an argument
}

mainFunc( secondaryFunc ); // here I am just calling the mainFunc and passing the callback (no argument is passed at this point to the callback!!)


console.clear()

/* Practice
    Write a function called doHomeWork.
    The function accepts a param (e.g. "math") and a callback function and prints out something along these lines:
    
    "Starting my math homework."" (Hint: this line comes from the main function and "math" comes from a param)
    "Finished my homework." (Hint: This line comes from the callback)

    Here is how to execute the function: 
    doHomework( 'math', alertFinished );
*/

function alertFinished(){
    console.log(`Finished my homework`);
}

function doHomeWork( subject, callback ){
    console.log(`Starting my ${subject} homework`); // Starting my math homework
    callback();
}

doHomeWork( 'science', alertFinished );
