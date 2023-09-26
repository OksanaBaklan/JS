/*
    The filter() method loops over an array
    Returns a new array with all elements matching a specific condition
    Only the elements matching that condition will be returned

    array.filter( function( value, index, array ){
        return condition (Only the elements matching that condition will be returned)
    })
*/

// ------------- ARRAY 1
let arr = [1,2,3,4,5];

// let's grab even numbers
let evenArr = arr.filter( function( value ){ // you can call value anything.. it represents an array element (depending on iteration)
    return value % 2 === 0 // % checked the remainder
})

console.log( evenArr ); // [ 2, 4 ]

// TASK -------------- ARRAY 2
// given the array below, use filter() and return ages older or equal to 18
let ages = [1, 3, 32, 33, 16, 40];

let adult = ages.filter( function( el ){
    return el >= 18 // I am not returning the check! I am only returning the elements passing the check.
})
console.log( adult ); // [ 32, 33, 40 ]

// --------------------- Passing named function to adv array methods
// Imagine we already have a function performing our check

function checkAdult( age ){
    return age >= 18
}

const ages2 = [1, 3, 32, 33, 16, 40];
// this time instead of passing an anonymous function we pass our "checkAdult" function 
const isAllowed = ages2.filter( checkAdult );
console.log( isAllowed ); // [ 32, 33, 40 ]

console.clear()
// TASK ------------------- Array of objects
const jobVacancies = [
    {id:1, position:"FEDev", isActive:"open"},
    {id:2, position:"BEDev", isActive:"open"},
    {id:3, position:"REACTDev", isActive:"closed"},
]

// We want to retrieve the objects containing open positions and return them in an array 
let activeArr = jobVacancies.filter( function(el){
        //console.log( el )// each iteration will give me an individual object 
        return el.isActive === "open" // only the elements (entire object) matching this condition will be returned and stored in a new array 
})

console.log( activeArr )


/*
    [
        { id: 1, position: 'FEDev', isActive: 'open' },
        { id: 2, position: 'BEDev', isActive: 'open' }
    ]
*/