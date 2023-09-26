function greetMessage(name){
    console.log(`Good Morning, ${name}`)
}
// print "Good Morning, John"


function greetUsers(array,callback){
    array.forEach(user=>{
        callback(user)
    })
}


greetUsers(["John","Peter","Mark"], greetMessage)


//----------------------------------------

function squareNumber(number){
    return number*number
}

function square(array,callback){
    return array.map(num=> callback(num))
}

let res = square( [1,2,3,4,5],squareNumber );
console.log( res ) //[ 1, 4, 9, 16, 25 ]