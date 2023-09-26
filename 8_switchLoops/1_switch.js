/*
    Switch statement
    Checks whether the value of an expression matches one of the cases.
    When a match is found the case is executed untill a break statement is found.
*/

/*
 month 1 = january
 2 = february
 3 = march
*/

const monthSwitch = 3; // imagine this is an input coming from the user

switch (monthSwitch) {
  case 1:
    console.log("January");
    break; // break keyword breaks out of a switch block (Good practice to have it on each case.. can be omitted on the default)
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("Its April");
    break;
  case 5:
    console.log("Its May");
    break;
  case 6:
    console.log("Its June!");
    break;
  case 7:
    console.log("Its July");
    break;
  case 8:
    console.log("Its August");
    break;
  case 9:
    console.log("Its September");
    break;
  case 10:
    console.log("Its October");
    break;
  case 11:
    console.log("Its November");
    break;
  case 12:
    console.log("Its December");
    break;
  default:
    console.log("An error has occurred");
  // The default is a standard case and should always be there.
  // Doesnt need a break statement because it is the last one
}

// EXAMPLE 2  - GROUPING CASES
let myColor = "green";
let text;

switch (myColor) {
  case "red":
  case "orange":
    text = "you like warm colors";
    break;
  case "blue":
  case "green":
    text = "you like cool colors";
    break;
  default:
    text = `You like ${myColor}`;
}

console.log(text);

// FORGOT A BREAK? ---------------------------

let foo = 0;

switch (foo) {
  case 0:
    console.log(0);
  // NOTE let's not put a break and see what happens
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
