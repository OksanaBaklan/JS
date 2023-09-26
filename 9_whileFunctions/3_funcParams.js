// We can pass values to a function/method using parameters ( arguments );

function squareNoParam() {
  console.log(3 * 3);
}

squareNoParam(); // 9

// How can I make this dynamic?

function square(num) {
  // num is a parameter and can be called anything. It will receive the value passed on function call
  console.log(num * num);
}

square(2); // 2 is an argument
square(5);

function showMessage(name, message) {
  console.log(`${name}: ${message}`);
}

showMessage("Anna", "Hello!"); // The order in which we pass the arguments has to match what the function is expecting
showMessage("July"); // July: undefined
showMessage(); // undefined: undefined

// The default value of a param is undefined. If you don't pass an argument the value of the corresponding param will be undefined

// checking if a param is undefined
function checkMessage( text ) {
  if (text === undefined) {
    text = "Empty message.. please send me something";
  }
  console.log( text );
}

checkMessage( "Hello world" );
checkMessage();


// Setting default params
function multiply( a , b = 2){
    console.log( a * b );
}

multiply( 5 ); // 10 (if I don't pass a second attrib the default value kicks in )
multiply(2, 3 ); // 6 (if I pass a second attrib as well the value of the attrib will be honored)
