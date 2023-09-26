// 1
/*
Declare the variables fruit, vegetable and food.
Assign the following values from an array to the variables respectively using restructuring assignment: ["banana", "cucumber", "bread", "cakes", "pizza"]
Assign "bread", "cakes" and "pizza" to food using the rest property of destructuring assignment.
*/


let fruit, vegetable, food;
[fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];
console.log(fruit, vegetable, food);

// 2
/*
Declare the variables fran, martina and camille
Assign the following values from an object to the variables respectively using destructurung assignment:
*/
let fran, martina, camille;
let obj = {
  fran: "monster",
  martina: "ghost",
  camille: "witch"
}

// {} usually are interpreted as a code block
// When surounded by parentheses it's considered an object literal
({ fran, martina, camille } = obj);
console.log(fran, martina, camille);

// 3

/*
Create an object named musician with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.
*/
const musician = {
  firstName: "Regina",
  lastName: "Spektor",
  nationality: "American-Russian",
  greatestHit: "Us",
  genre: "indie-pop",
  role: "singer/songwriter and pianist"
};

/*
Then, create a function named displayMusicianDetails that returns all of the band/musician's info as a string.
The passed object should be destructured into the function's parameters.
*/
const displayMusicianDetails = ( {firstName,lastName,nationality,greatestHit,genre,role} ) => {
    return `${firstName} ${lastName} is a ${nationality} ${role}. The musician sings ${genre} and their greatest hit is "${greatestHit}". ${firstName} ${lastName} is also the greatest.`;
};

console.log( displayMusicianDetails( musician ) );
