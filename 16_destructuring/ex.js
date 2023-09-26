// 1. Combining Arrays 
/*
Create two arrays: euroCountries with strings "Germany" and "France" and asianCountries with strings "Japan" and "Korea".
Add asianCountries items to the end of the euroCountries array. Now, print euroCountries to the console.
*/

let euroCountries = ['Germany', 'France']
let asiaCountries = ['Japan', 'Korea']
euroCountries = [...euroCountries, ...asiaCountries]
console.log(euroCountries); // [ 'Germany', 'France', 'Japan', 'Korea' ]

/*
Once again create two arrays. This time euroCities with "Berlin" and "Paris" and asiaCities with "Tokyo" and "Seoul".
Save all elements of both arrays to a new array variable named worldCities and print it to the console.
*/

let euroCities = ['Berlin', 'Paris']
let asiaCities = ['Tokyo', 'Seoul']
let worldCities = [...euroCities, ...asiaCities]
console.log( worldCities ); // [ 'Berlin', 'Paris', 'Tokyo', 'Seoul' ]

// 2. Copying Arrays
/*
Copy the array asiaCities by using the spread operator. Store the copied array in a new variable and print it to the console.
*/

let copied = [...asiaCities];
console.log( copied ); // [ 'Tokyo', 'Seoul' ]

// 3. Find the Largest
/*
Create a function named findLargestNumber which accepts an array of numbers as an argument and returns the largest number from the array.
*/

function findLargestNumber( arr ){
    return Math.max(...arr)
}

const retMax = findLargestNumber( [1,2,3] ); 
console.log( retMax ); // 3

// 4. Find the Smallest

function findSmallestNum( arr ){
    return Math.min( ...arr)
}

const retMin = findSmallestNum([1,2,3]);
console.log(retMin); // 1

// 5. Clone and Merge
const person = {name: "John"}
const job = {role: "Teacher"}

//5.1
// Clone the person object and store it in a new variable. Print the variable to the console.
const copyPerson = {...person};
console.log( copyPerson);// { name: 'John' }

//5.2
/*
Merge both objects person and job into a new object named employee. Use the spread operator to do so. Now, print employee to the console.
*/

const employee = {...person,...job}
console.log( employee); // { name: 'John', role: 'Teacher' }

//5.3
/*
Change the value of role property in the job object to "Plumber". Now print both job and employee separately to the console.
*/
job.role = "Plumber";
console.log( employee);// { name: 'John', role: 'Teacher' } this happens cos employee is a totally different object

// 6.  Is the average a whole number?
/*
Create a function named isWhole that takes 4 integers as parameters and returns true or false depending on whether the average 
of all the arguments is a whole number or not.
*/

function isWhole( val1,val2,val3,val4) {
    return Number.isInteger( (val1+val2+val3+val4)/4 )
}

const retInt = isWhole( ...[2,2,2,3] );
console.log( retInt )