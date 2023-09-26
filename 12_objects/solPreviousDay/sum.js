// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...args) => {

    let result = 0;

    for( let i =0; i<args.length; i++ ){
        result += args[i];
    }

    return result

}

let returnedSum = sum(1,15, 3);
console.log( returnedSum ); // 16


