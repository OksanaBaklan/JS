// The destructuring assignment allows us to unpack specific values from arrays or objs into variables
// (BINDING PATTERN )
// ----------- ARRAY 1

let arr = ["Pam","Jim"];
let firstName = arr[0];
console.log( firstName )// Pam


// Destructuring
let [ name1, name2 ] = arr;
console.log( name1 )// Pam

// ---------- ARRAY 2 skipping in between values
let arr2 = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
let [ firstName2, , title ] = arr2;
console.log( firstName2 ); // Julius
console.log( title );// Consul // We skipped a value by not create a variable for it
console.clear();

// ----------- OBJ 1
let hero = {
    heroName: "Batman",
    realName: "Bruce Wayne",
};

/*
let heroName = hero.heroName;
console.log( heroName ); // Batman
*/

// -----------Using destructuring
let { heroName, realName } = hero;
console.log(`${heroName} ${realName}`); // Batman Bruce Wayne
// Make sure the variable name matches the property key or you will get undefined !!!!!!!!

// ------------- OBJ 2 ALIAS
// if you want to use a variable different from property key you need to use an alias. To do that follow the syntax on line 44 ( notice ":" )

let hero2 = {
    heroName: "Batman",
    realName: "Bruce Wayne",
};

let { heroName:superHero, realName:realPerson } = hero2;
console.log( superHero, realPerson ); // Batman Bruce Wayne

// ------------------------- OBJ 3 accessing values from nested objects

let finalObj = {
    fname: "Mary",
    lname: "Smith",
    address: {
        city: "Berlin",
        street: "Kaastanienallee 34",
    },
}

console.log( finalObj.address.city ); // Berlin

// Doing the above with destructuring

let {fname,lname, address:{ city, street} } = finalObj // you could also use an ALIAS here if you wanted to
console.log( city, street ); // Berlin Kaastanienallee 34


function easyFunc( arr ){
    console.log( arr )
    let num1 = arr[0];
    let num2 = arr[1];
    let num3 = arr[2];
    console.log( num1 + num2 + num3);
}

easyFunc( [1,2,3] );// 6

// TASK do the same using destructuring!!

function destrFunc( arr ) {
    let [num1,num2,num3] = arr;
    console.log( num1 + num2 + num3);
}

destrFunc( [1,2,3] );// 6


// TASK destructuring an obj passed to a function

let someObj = {
    name: "Jim",
    age: 35
}

// We want to pass the above obj to a function and we want to destructure the obj

function someFunc( obj ){
    let { name, age} = obj;
    console.log( name, age);
}

someFunc( someObj ); // Jim 35


// We can also destructure as we receive the obj

function someFunc2( {name,age} ) {
    console.log( name, age )
}

someFunc2( someObj ); // Jim 35



// ---------------- NESTED ARRAY
let nestedArr = [ [1,2], [3,4] ];
// Let's grab the value 1
console.log( nestedArr[0][0]); // 1

//  Let's check the nestedArr length
console.log( nestedArr.length ); // 2


for( let [key,value] of nestedArr ){ // key and value can be named anything 
    console.log( key );// 1 3 
}

console.clear();

// Flattening a nested array using flat()
console.log( nestedArr.flat() ); // [ 1, 2, 3, 4 ]



// DESTRUCTURING - ASSIGNMENT PATTERN
/*
The destructuring assignment syntax is a JavaScript expression that makes it possible 
to unpack values from arrays, or properties from objects, into distinct variables.
*/
// ----------------- ARRAY
let a, b, rest;
[a, b] = [10, 20];
console.log(a) ; // 10

// ----------------- OBJECT

let dog, cat, bird;

({ dog, cat, bird} = { dog: "Max", cat:"Kitty", bird: "Birdie"})
// Note: The parentheses ( ... ) around the assignment statement are required 
// when using object literal destructuring assignment without a declaration.
console.log( bird ); // Birdie


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment