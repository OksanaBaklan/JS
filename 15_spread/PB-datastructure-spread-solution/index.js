
// 1. Combining Arrays 
/*
Create two arrays: euroCountries with strings "Germany" and "France" and asianCountries with strings "Japan" and "Korea".
Add asianCountries items to the end of the euroCountries array. Now, print euroCountries to the console.
Once again create two arrays. This time euroCities with "Berlin" and "Paris" and asiaCities with "Tokyo" and "Seoul".
Save all elements of both arrays to a new array variable named worldCities and print it to the console.
*/
let euroCountries = ['Germany', 'France']
let asiaCountries = ['Japan', 'Korea']
euroCountries = [...euroCountries, ...asiaCountries]
console.log(euroCountries)

let euroCities = ['Berlin', 'Paris']
let asiaCities = ['Tokyo', 'Seoul']
let worldCities = [...euroCities, ...asiaCities]
console.log(worldCities)

// 2. Copying Arrays
/*
Copy the array asiaCities by using the spread operator. Store the copied array in a new variable and print it to the console.
*/
let copied = [...asiaCities]
console.log(copied)

// 3. Find the Largest
/*
Create a function named findLargestNumber which accepts an array of numbers as an argument and returns the largest number from the array.
*/
function findLargestNumber(arr) {
    return Math.max(...arr)
}

// 4. Find the Smallest
function findSmallestNumber(arr) {
    return Math.min(...arr)
}

// 5. Clone and Merge
const person = {name: "John"}
const job = {role: "Teacher"}

//5.1
// Clone the person object and store it in a new variable. Print the variable to the console.
const copyPerson = {...person}
console.log(copyPerson);

//5.2
/*
Merge both objects person and job into a new object named employee. Use the spread operator to do so. Now, print employee to the console.
*/
const employee = {...person, ...job}
console.log(employee)

//5.3
/*
Change the value of role property in the job object to "Plumber". Now print both job and employee separately to the console.
*/
job.role = "Plumber"
console.log(job)
console.log(employee)

// 6.  Is the average a whole number?
/*
Create a function named isWhole that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
*/
function isWhole(int1,int2,int3,int4) {
    return Number.isInteger((int1+int2+int3+int4)/4) 
}
console.log(isWhole(...[1, 2, 3, 6]));
