// Adding methods to objs -----------------------------
// A method is basically a function inside an obj .. ( a function stored as a property)

const newObj = {
    hello: "world",
    123: 456,

    myMethod : function() { // This is a method
        console.log("Hello world")
    }
}

// Calling a method --------------------------
newObj.myMethod();

// Adding an obj as a prefix to a function call should look familiar
// We have already seen this syntax in action while dealing with the Math obj
Math.max( 1,2,3);

// An object can contain more than 1 method ---------------------------

const marcelsLibrary = {
    sayHello : function() {
        console.log("Hello Marcel")
    },

    sayGbye : function() {
        console.log("Gbye Marcel")
    }

}

marcelsLibrary.sayHello();
marcelsLibrary.sayGbye();

// Another way of adding methods ------------------------
// Just a different syntax

const newObj2 = {
    hello: "World",
    123: 456,

    myFunction() {
        console.log("hi there");
    }

}

newObj2.myFunction(); // hi there

console.clear();
// Method with params

const personOne = {
    name: "Gennaro",

    age( currentAge ){
    // We can now treat age() as a regular function and add variables and perform all sort of calculations
        console.log( currentAge );
        const today = new Date(); // need to create a date object ( const today is now a date object )
        const currentYear = today.getFullYear(); // getFullYear() is a built in method of the Date object
        console.log( currentYear); // 2023
        const yearOfBirth = currentYear - currentAge;
        console.log( yearOfBirth ); // 2003
    }
}

personOne.age( 20 );



/* PRACTICE TIME ------------------------------------------------------------
 Create an obj called "mathStuff" containing a function that accepts any number of params ( numbers ) and returns their sum
*/


const mathStuff = {

    sum(...args){
        console.log( args )
        let res = 0;

        for( let i=0; i<args.length; i++  ) {
            res += args[i]
        }

        return res;
    }

}

let returnedSum = mathStuff.sum( 1, 2, 4, 5); // 12
console.log(`The final sum is ${returnedSum}`);


// Using object props inside a method -------------------------

const personOneBis = {
    name: "Mary",
    currentAge: 10,
    
    findYOB() { // Finds year of birth based on current age 
        const today = new Date();
        const currentYear = today.getFullYear();
        // console.log( currentAge); // will give me an error
        console.log( this.currentAge ); // "this" is a keyword poing to the object itself ( In other situations it behaves a bit differently)
        const yearBirth = currentYear - this.currentAge;
        console.log( `the year of birth is ${yearBirth}` );

    }
}

personOneBis.findYOB();



/* PRACTICE TIME ------------------------------------------------------------
 You have the following obj and you need to create a method "fullName" that will return a template literal made up of firstName and lastName
*/

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
};

console.log( person.fullName() ); // John Doe


// Calling a method from another method

const calling = {

    func1: function() {
        console.log("func1");
        this.func2();
    },
    func2: function() {
        console.log("func2");
    }
}

calling.func1();