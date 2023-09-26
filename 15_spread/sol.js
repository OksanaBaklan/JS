// Programming Basics: Objects
/*
Create an object called myRecipe that holds information on your favorite recipe. 
It should have the properties title (a string), servings (a number), and ingredients (an array of strings).
*/

const myRecipe = {
    "title": "Mole",
    "servings": 2,
    "ingredients": ["cumin", "cinnamon", "cocoa"]
};

console.log( `Title: ${myRecipe["title"]}`);
console.log( `Servings: ${myRecipe.servings}`);
console.log( `Ingredients: ${myRecipe.ingredients}`);

// Using variables
let someVar = "servings";
console.log( `Servings: ${myRecipe[someVar]}`); // someVar is a variable and we do not have to wrap it in quotation marks!!

console.clear();
// Task 2
/*
Create an array of objects named myBooks, where each object describes a book and has the properties title (a string), author (a string), and alreadyRead (a boolean indicating if you've already read it).
*/

const myBooks = [
    {
        title: 'The design of everyday things',
        author: 'Don Norman',
        alreadyRead: false
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    }
]

/*
Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
*/

for ( let obj of myBooks ) {
    console.log(`${obj.title} by ${obj.author}`)
}

/*
Iterate through the array of books and this time, log messages depending on the boolean value of alreadyRead: 
Use an if/else statement to change the output depending on whether you read it yet or not. 
If you've read it, log a string like 'You have already read "The Hobbit" by J.R.R. Tolkien'. 
And if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
*/

let bookInfo = "";

for ( let obj of myBooks ) {
    // Let's collect book infos in a variable
    bookInfo = `${obj.title} by ${obj.author}`;

    // check if book has been read or not
    if( obj.alreadyRead ){
        console.log(`You already read ${bookInfo}`);
    } else {
        console.log(`You still need to read ${bookInfo}`);
    }

}