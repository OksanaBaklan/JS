// EX 1 UPVOTES DOWNVOTES
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
// Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

let myObj = {

    getVoteCount: function( passedObj ) {
        // console.log( passedObj );
        // console.log( passedObj.upvotes);
        // console.log( passedObj.upvotes - passedObj.downvotes);
        return passedObj.upvotes - passedObj.downvotes
    }

}

let returnedVal = myObj.getVoteCount( { upvotes: 13, downvotes: 3 } );
console.log( returnedVal )

/*
EX 2 VOLUME OF A BOX --------------------------------------------------------------------

Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

Examples
volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
*/

function volumeOfBox( obj ) {
    return obj.width * obj.length * obj.height
}

let returnedVolume = volumeOfBox( { width: 4, length: 2, height: 2 } );
console.log( returnedVolume );

/*
EX 3 LUKE I AM YOUR... --------------------------------------------------------------------

Luke Skywalker has family and friends. 
Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

| Person |	Relation |
| --- | ----------- |
| Darth Vader |	father |
| Leia |	sister |
| Han |	brother in law |
| R2D2	| droid |

Examples

relationToLuke("Darth Vader") ➞ "Luke, I am your father."
relationToLuke("Leia") ➞ "Luke, I am your sister."
relationToLuke("Han") ➞ "Luke, I am your brother in law."
*/

function relationToLuke( str ) {

    let relObj = {
        "Darth Vader": "father",
        Leia: "sister",
        Han: "brother",
        R2D2: "droid",

        getRelation: function(){
            console.log( this[str] ); // We are using [] cos "str" is a variable. If we don't, Js will think "str" is a property key and we will get undefined
        }
    }

    relObj.getRelation();
}

relationToLuke("Leia");



let relObj = {
    "Darth Vader": "father",
    Leia: "sister",
}

console.log( relObj.Leia);
console.log( relObj["Leia"]);


/*
EX 4 SPORTS PLAYER --------------------------------------------------------------------

Create an obj containing the following properties for a particular football player and assign some values to them.
age
height
weight

Also, create three methods that returns the following strings:

getAge("Luke") returns "Luke is age 25" 
getHeight("Luke") returns "Luke is 175 cm" 
getWeight("Luke") returns "Luke weighs 75 kg" 

Notes
- name will be passed in as a string 
*/


let sportObj = {
    age: 18,
    height: 180,
    weight: 80,

    getAge: function( name ){
        return `${name} is ${this.age}`
    },
    getHeight: function( name ){
        return `${name} is ${this.height} cm`
    },
    getWeight: function( name ){
        return `${name} weights ${this.weight} kg`
    }
}

console.log( sportObj.getWeight("Mia") );
console.clear();

/*
Ex 5
Create an object called "myDay" that contains 2 properties:
    - arrDays (an array containing the days of the week in word)
    - arrActivities (an empty array)

    and 2 methods:
    dayOfTheWeek - (using the date object you will have to extract the current day of the week in words! Tip: Use the arrDays as well!)
                    You will have to RETURN the day of the week. 
    addActivities - this method takes an array as an argument and will print the following 
                    "Today is Monday and these are my activities 😴,👕 "

Once you are done, call the addActivities method (outside the obj) and pass an array with some emojis.. you can find them here https://getemoji.com/
Make sure you wrap the emojis in quotes.       
Example             
myDay.addActivities( ['😴','👕'] );
*/


const myDay = {
    arrDays : ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    arrActivities: [],

    dayOfTheWeek: function(){
        let today = new Date();
        let dayNumber = today.getDay(); // this will give us a number from 0 - 6 ( 0 Sunday)
        return this.arrDays[ dayNumber ];
    },
    addActivities: function( arr ){
        for(let i = 0; i < arr.length; i++ ){
            this.arrActivities.push( arr[i] )
        }
        let myDay = this.dayOfTheWeek();
        console.log( `Today is ${myDay} and these are my activities ${this.arrActivities}` )
    }

}

myDay.addActivities( ['😴','👕'] );