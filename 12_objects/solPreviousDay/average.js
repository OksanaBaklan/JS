// Bonus: Create a function average which accepts any amount of numbers and returns their mean average.

// The mean average of a set of numbers is calculated by adding them all up and dividing the result of the addition by the amount of numbers in the set
// Example: To calculate the average of 12, 14 and 16 -
// 12 + 14 + 16 = 42
// 42 / 3 = 14

const average = (...args) => {
    console.log( args ); // [ 1, 2 ]

    // First thing I should do is create a variable to hold the sum
    let sum = 0; 

    // "args" is an array containing the els we want to sum
    // In order to access all els I need to loop over it

    for (let i = 0; i < args.length; i++ ){
        //console.log( args[i]); making sure I can access the elems
        sum += args[i];
    }

    console.log( sum );
    return sum / args.length;

}
// The returned value will be stored in a variable
let returnedAverage = average(1,2);
console.log( returnedAverage ); // 1.5