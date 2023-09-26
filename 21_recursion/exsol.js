function personalDice(name){
    return function(){
        // generate random number between 1 and 6
      const newRoll = Math.floor(Math.random() * 6);
      console.log(`${name} rolled a ${newRoll}`)
    }
  }
  
  const dansRoll = personalDice("Dan");
  const zoesRoll = personalDice("Zoe");
  
  dansRoll();
  dansRoll();

  // Write a function named createBase that would allow you to do the following using a closure:
/*
    var addSix = createBase(6);
    console.log(addSix(10))
    console.log(addSix(21))
*/

const createBase = function(x) {
    return function( y ){
        return x + y
    }
}

let addSix = createBase(6);
console.log( addSix(10) ); // 16
console.log( createBase(1)(2)); // 3
