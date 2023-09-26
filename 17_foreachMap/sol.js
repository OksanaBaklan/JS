// 1
/*
Declare the variables fruit, vegetable and food.
Assign the following values from an array to the variables respectively using restructuring assignment: ["banana", "cucumber", "bread", "cakes", "pizza"]
Assign "bread", "cakes" and "pizza" to food using the rest property of destructuring assignment.
*/

let fruit, vegetable, food;

[ fruit, vegetable, ...food ] = ["banana", "cucumber", "bread", "cakes", "pizza"];
console.log( fruit ); // banana
console.log( food ); // [ 'bread', 'cakes', 'pizza' ]


// 2
/*
Declare the variables fran, martina and camille
Assign the following values from an object to the variables respectively using destructurung assignment:
*/

let fran, martina, camille;

let myObj = {
    fran: "monster",
    martina: "ghost",
    camille: "witch"
  };

({ fran, martina, camille } = myObj);
console.log(fran, martina, camille);

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

const displayMusicianDetails = ( { firstName, lastName, nationality, greatestHit, genre, role } ) => {
    return `${firstName} ${lastName} is a ${nationality} ${role}. The musician sings ${genre} and their greatest hit is ${greatestHit}.`
}

let retInfo = displayMusicianDetails( musician );
console.log( retInfo ); // Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is Us.

