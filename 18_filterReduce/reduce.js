/*
    It loops over each array element
    It returns a single value (it could also be an obj contaning multiple value )
    It has an accumulator

    array.reduce( function( accumulator, value, index, array ){
        // body
    }, initAccumulator)
*/

let arr = [5,3,2];

let result =  arr.reduce( function( acc, element ){
    // if we don't specify an inital value for the accumulator, its value is going to be the first val of the array
    // Future iterations will be the sum of first val + second arr element ..etc..
    console.log( acc );
    return acc + element // you need to use return in oder for the accumulator to get updated
})

// We don't see the last value of the accumulator because once the last value of the accumulator
// is returned we stop looping and can't access the console.log

console.log( result ); //10


// --------------------- ARRAY 2

let arr2 = [1,2,3]; 

let sum = arr2.reduce( function( acc, currentVal ){
    return acc + currentVal
},10 );

console.log( sum ); // 16

console.clear()

// ------------------- Array of objects
const orders = [
    { id:1, article:"lamp", amount: 250},
    { id:2, article:"pencil case", amount: 150},
    { id:3, article:"mug", amount: 50},
]

let totalAmount = orders.reduce( function( acc, item){
    //console.log(acc)
    return acc + item.amount
},0);

console.log( totalAmount ); //450
console.clear()
// ---------------------------------- CHAINING

const arrTeams = [
    {"name": "Pasquale", "team": "tigers", "score": 15},
    {"name": "Gertrude", "team": "tigers", "score": 25},
    {"name": "Gennaro", "team": "Gorilla", "score": 10},
    {"name": "Genoveffa", "team": "Gorilla", "score": 55},
]; 

// We want to find out the total score of the tigers team

// We will chain filter, map and reduce

// First thing we need to do is grab all objs from team tigers

let tigerScore = arrTeams.filter( item =>{
    return item.team === "tigers"
    /*
        [
            { name: 'Pasquale', team: 'tigers', score: 15 },
            { name: 'Gertrude', team: 'tigers', score: 25 }
        ]
    */
   // Now we move on to grab the score using map
}).map( tigerObj => {
    return tigerObj.score; // [15,25]
    // now we can pass the returned array to reduce to sum the values
}).reduce( function( acc, currentVal ){
    return acc + currentVal
},0);

console.log( tigerScore ); // 40





// TASK ----------------- find out the total score of the tigers team using only the reduce method

const arrStuff = [
    {"name": "Pasquale", "team": "tiger", "score": 15},
    {"name": "Gertrude", "team": "tiger", "score": 25},
    {"name": "Gennaro", "team": "Gorilla", "score": 10},
    {"name": "Genoveffa", "team": "Gorilla", "score": 55},
];

let tigerScore2 = arrStuff.reduce( ( acc, currentVal ) => {
    // currentVal is the obj of that specific iteration
    if( currentVal.team === "tiger" ){
        acc += currentVal.score // we need += cos we are not returning right away
    }

    return acc; // For the accumulator to work properly, each iteration should return something.. 
                // if we put it in the IF it will not work cos it only gets in there twice and returns only twice !

},0 ); // we need to set it to 0 or the first val will be the first obj of the array

console.log( tigerScore2 ) // 40