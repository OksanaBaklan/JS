/*

In js we have:
- primitive values ( string num, boolean etc..)
- objects ( array, obj, func )


primitives are copied by their value
objects are copied by reference 

*/

let x = "initial value";

let y = x;

console.log( y ); // initial value

// Now let's change the value of x

x = "reassigned value";

console.log( x ); // reassigned value
console.log( y ); // initial value
console.clear();
// Let's see what happens when dealing with objects *************************************

let firstObj = {
    value: "initial value"
}

let secondObj = firstObj;
console.log( secondObj); // { value: 'initial value' }

firstObj.value = "reassigned";
console.log( firstObj ); // { value: 'reassigned' }

console.log( secondObj ); // { value: 'reassigned' }


/*
primitives are copied by value ( the value is stored in a variable )
objects are copied by reference ( the value is stored in a location in memory and the variables are simply pointing to that location )
*/