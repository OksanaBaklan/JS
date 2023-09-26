// Exercise solution
// 1
console.log("This is an exercise in console logging");
// 2
let exercise = "This is the value.";
console.log( exercise );
// 3
let firstName = "Jill";
let lastName = "Smith";
console.log( firstName, lastName );
// 4
firstName = "Luca";
lastName = "Kenneth";
let city = "NY";
let job = "Arbeitslos";
let age = 23;
console.log(firstName, lastName, age, city, job);
console.clear();
// 5
/*
Print a sentence using all the profile variables above, adding text for sentence flow in the following format: "John Smith is a 43-year-old teacher who lives in Berlin". Replace parts of this string with your variables. you can combine variables with text in the console by using the plus symbol (+) e.g. console.log("this is a " + variable);
*/
console.log( firstName, lastName + " is a " + age + "-year-old " + job + " who lives in " + city );
// Option 2 just using commas
console.log( firstName, lastName, "is a", age, "-year-old", job, "who lives in", city );

let firstNum = 3;
let secondNum = 2;
let sum = firstNum + secondNum;
console.log( sum ); // 5
