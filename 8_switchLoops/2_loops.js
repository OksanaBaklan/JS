/*
    Loops
    A loop is a sequence of instructions that is repeated untill a condition is met

    Syntax :

    for( statement1; statement2; statement3){
        // code block to be executed
    }

    statement1 is executed only once.. before the execution of the code block 
    statement2 condition that needs to be met for the code block to run
    statement3 executed "after" the code block has been executed
*/

// 1
let i;
for (i = 0; i <= 3; i++) {
  console.log(i);
}

/*
    0
    1
    2
    3
*/

console.log("************************");

// We can also initialize and assign the counter (i) directly in the FOR statement
for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.log("************************");

// i doesnt necessarily have to start from 0
// It could be any number
for (let i = 1; i <= 4; i++) {
  console.log(i);
}
console.log("************************");
// i could be called anything

let counter;
for (counter = 1; counter <= 5; counter++) {
  console.log(counter);
}
console.log("************************");
// Adding values from 1 to 5
// 1+2+3+4+5 = 15

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i; // OR sum += i
  console.log(sum);
}

console.clear();

// looping over strings
let myString = "digital";
let specificChar = myString[0];
console.log(specificChar);

for (let i = 0; i < myString.length; i++) {
  console.log(myString[i]);
}

/*
d
i
g
i
t
a
l
*/

console.clear();

// looping over arrays
let fruits = ["apple", "banana", "orange", "melon"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Other ways to increment the loop
for (let i = 0; i <= 9; i += 3) {
  console.log(i);
}

// 0
// 3
// 6
// 9
console.clear();

// NESTED LOOPS
// we want to print 2 sets of number from 1 to 5

for (let i = 0; i < 2; i++) {
  console.log(`outer loop ${i} `);

  for (let j = 1; j <= 5; j++) {
    console.log(j);
  }
  console.log("*****");
}
console.clear();

// EXTRA 1 Breaking the loop
// You can prematurely exit a loop by using a break statemnt
// The break will just terminate the loop

for( let i=0; i<10;  i++ ) {
    console.log( i );

    if( i === 2 ){
        console.log("stop");
        break;
    }
}


// EXTRA 2
// Skipping a round
// You can skip an iteration using "continue"
for (let i = 0; i <= 5; i++ ){
    if (i === 3){
        continue;
    }
    console.log(i)
}