/*
    Boolean Expressions
    Check if a statement is true or false

    < ( less than )
    <= ( less or equal to )
    > ( greater )
    >= ( greater or equal )

    Equality operators
    == ( not preferred - only checks for value )
    === strict equality ( preferred - checks for value and type )


    Inequality operators
    !=  not equal ( not preferred )
    !== not equal ( preferred - checks for value and type)
*/

console.log( 1 < 2 ); // true
console.log( 2 <= 2 ); // true
console.log( 1 > 2 ); // false
console.log( "6" > 1 ); // true ( implicit type coercion)
console.clear();
/*
    Equality operators
    = This is only used to assign value to a variable
    == checks if variables have same values ( loose comparison )
    === checks value and type ( stric comparison )
*/

console.log( 1 == "1" ); // true
console.log( 1 === "1" ); // false  *** Always prefer this one ***
console.clear();
/*
    Inequality operators
    != ( loose comparison )
    !== ( strict comparison )
*/

console.log( 1 != "1" ); // false .. they are not different ( loose comparison )
console.log( 1 !== "1" ); // true.. they are different ( strict comparison )
