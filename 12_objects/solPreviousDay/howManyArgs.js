// Create a function howManyArgs which returns the total amount of arguments passed to it.
// Example: passing 3 arguments when calling the function should return the number 3, passing 15 arguments should return the umber 15

const howManyArgs = (...args) => {
    console.log( args ); // [ 'a', 'b' ]
    return args.length;
}

let valNum = howManyArgs("a","b");
console.log( valNum ); // 2