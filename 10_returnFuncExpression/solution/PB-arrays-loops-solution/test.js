const arr1 = [2, 4, 8];

function isFactorChain( arr ) {
    // Calculator the factor by dividing the val at pos 1 by val at pos 0
    let factor = arr1[1] / arr1[0];
    // Create value that will hold final value (bool)
    let isFactor;

    // We loop over arr
    for (let i = 0; i < arr.length -1; i++) {
        // if 1 * 3 === 3 
        if( arr[i] * factor === arr[ i + 1 ] ){
            isFactor = true;
        } else {
            isFactor = false;
        }
    }

    console.log( isFactor );
}

isFactorChain( arr1 ); // true