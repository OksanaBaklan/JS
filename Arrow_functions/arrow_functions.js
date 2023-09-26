// Arrow functions - another way for creating functions (very convenient for one-line simple actions)

// Same functions with different syntax:
function sum(a,b){
    return a+b
}
console.log(sum(5,10)); //15

let sum2 = (a,b) => a+b;

console.log(sum2(5,10)); //15

/*Arrow function can be written in two ways:
1. Without curly braces (...args) => expression - the right side is an expression: the function evaluates it and returns the result;
2.With curly braces (...args) => {body} - brackets allow us to write multiple statements inside the function, but we need an explicit return to return something 
 */

let sum3 =(a,b) =>{
    a+b
}

console.log(sum3(5,10)); //undefined

let sum4 =(a,b) =>{
    return a+b  //arrow function with {body} needs an explicit return statement 
}

console.log(sum4(5,10)); //15

let greet= (name)=> {
    return `Hello ${name}`
}
console.log(greet("John"));

/*If we have only on argument, then parentheses can be omitted*/

let double = number => number*2;

console.log(double(3)); // 6

/*If there is no argument, parentheses should be empty, but they should be present*/

const greet2 = () => console.log("Hello");

greet2(); //Hello

/*Multi-line arrow functions*/

const newSum =(a,b) => { // curly brace opens a multi-line function
    let result = a+b;
    return result;
}

console.log(newSum(1,2)); //3