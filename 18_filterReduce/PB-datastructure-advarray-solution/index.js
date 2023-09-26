//  1
/*
    1. Get Total Amount of Orders
    Use an array method to calculate the total amount of the orders array, 
    store the resulting value(sum) 
    in a variable named totalAmount.
*/

const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];

const totalAmount = orders.reduce((sum, order) => {
    console.log("current values:", sum, order);
    return sum + order.amount; // return value gets assigned to the accumulator and passed into the next call
}, 0);

console.log(totalAmount);

//  2 
/*
    2. Increment by 1
    Use an array method to increment each element in the array below by 1. 
    Store the modified array in a variable named mappedArray.
*/
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const mappedArray = arrayOfNumbers.map(el => el + 1);
console.log(mappedArray);

// 3
/*
    3. Filter Evens
    Create a function named filterEvens that filters an array of numbers and only returns even numbers. 
    The function should take an array of numbers as an argument and should not use a loop.
*/
function filterEvens(array) {
    return array.filter(el => el % 2 === 0);
}
console.log(filterEvens([1, 2, 3, 4, 5, 6]));


// 4
/*
    Create a function named filterFriends which accepts two arguments: an array and a string. 
    It filters the array based on a search string and returns elements that contain the search string.
*/
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
function filterFriends(friendsArray, key) {
    return friendsArray.filter(el => el.includes(key));
}

console.log(filterItems(friends, 'ka')); // ["Rika"];

//  5
// Write a function named sumUp that uses the reduce method to sum up an array of numbers.
const sumUp = (arrayOfNumbers) => arrayOfNumbers.reduce((cur, acc) => cur + acc);
console.log(sumUp([1, 2, 3]))

// 6
/*
    Write a function named getSquareRoot which maps an array of numbers and 
    returns an array with the square root of each element from the passed array.
*/
const getSquareRoot = (arrayOfNumbers) => arrayOfNumbers.map(el => Math.sqrt(el));
console.log(getSquareRoot([1, 2, 3])) 