const apples = 20;
const oranges = 30;

// 1 
console.log( apples === oranges );// always use stric equality

//2
console.log( apples !== oranges );

//3
console.log( apples > oranges );

//4
console.log( apples <= oranges );

//5
console.log( oranges > apples );

//6
const mangoes = 5;
console.log( ( mangoes * apples ) > ( mangoes + oranges ) ); // true

//7
console.log( ( mangoes - apples ) < ( oranges / mangoes ) ); // true

//8
console.log( apples === oranges ? apples === mangoes : false ); // false

let a = 3;
let b = 3;
let c = 3;

console.log( (a == b) && (b == c)  );

//9
console.log( (apples % mangoes) === (oranges % mangoes) ); // true

//10
console.log( (mangoes + apples) > (oranges - mangoes) ); // false 
console.log( (mangoes + apples) >= (oranges - mangoes) ); // true

console.log("EXERCISE 10");
console.log( !((mangoes + apples) > (oranges - mangoes)) ); // true

