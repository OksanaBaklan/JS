function greetMessage( name ){
    console.log( `Good morning ${name}`)
}

function greetUsers( array, callback ){

    array.forEach( element => {
        callback( element )
    });

}

greetUsers( ["John","Peter","Mark"], greetMessage )
console.clear();
// -----------------

let arr = [1,2,3,4,5];


function square( array, callback) {
    return array.map( num => callback(num));
}

function squareNumber( number ){
    return number * number ;
}

let res = square( arr,squareNumber );
console.log( res ); // [ 1, 4, 9, 16, 25 ]
