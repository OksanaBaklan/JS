// 1
const isDog = false;

isDog ? console.log("good dog") : console.log("Find me a dog to pat");

//2. Declare 2 variables named speedLimit and yourSpeed. speedLimit is 50km/h. 
// If yourSpeed is above that, print 'you're going too fast!'. 
// If speed is lower than speedLimit, print 'You're driving below the speed limit'.
const speedLimit = 50;
const yourSpeed = 51;

speedLimit < yourSpeed ? console.log("too fast") : console.log( "too slow");

//3. Declare a variable named age. 
// If age is below 16, print "serve butter beer". 
// Otherwise print "serve beer".
const age = 12;
age < 16 ? console.log("serve butter beer") : console.log(" serve beer");

//4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".
const isStudent = false;
isStudent ? console.log( "Ticket costs €5,00") : console.log( "Ticket costs €12,00");

//5. Declare a variable named okMarie. 
// Check if there is 'cake' - if so, print "Let them eat cake". 
// If not, print "Oh, bother". 

const okMarie = "bread";
okMarie === "cake" ? console.log("Let them eat cake") : console.log("oh, bother");

//6.  Check if the following numbers are even numbers. Use a ternary and if the number is even print e.g. `30 is even`, else print number is odd e.g. `939 is odd`
// * num1 = 30
// * num2 = 939
// * num3 = 40.9

let num1 = 30;
num1 % 2 === 0 ? console.log(`${num1} is even`) : console.log(`${num1} is odd`);

let num2 = 939;
num2 % 2 === 0 ? console.log(`${num2} is even`) : console.log(`${num2} is odd`);