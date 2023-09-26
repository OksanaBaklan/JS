"use strict";
// 1. Using a template literal print out the obj values
// E.g "David Rayy is enrolled in class VI and is rollNo 12"

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};


console.log( `${student.name} is enrolled in class ${student.sclass} and is rollNo ${student.rollno}`  )

// 2. Update the name to David Mustermann
// console log the object and make sure it has been updated 
student.name = "David Mustermann";
console.log( student );

// 3. Add the following property to the object:
// student age = 11 

student["student age"] = 11;
console.log( student );

// 4. Now check if the age is 11 and only in that case you should add the prop basicTest = "passed"
// log the object to check.
if( student["student age"] === 11 ) {
    student.basicTest = "passed"
}
console.log( student );

// 5. Use dot notation to add the following prop
// average = 2.4

student.average = 2.4;

// 6. Check if the average is between 1 and 2.5 and in that case add the prop gymnasium = true

if( student.average > 1 && student.average < 2.5 ){
    student.gymnasium = true;
}

console.log( student );

// 7. check if the prop gymnasium exists and in that case freeze the object
if( "gymnasium" in student ){
  //  Object.freeze( student );
}

// 8. Add "use strict" to the top of your file and try to delete prop sclass. 
// What happens when you run your file in the terminal?
delete student.sclass;


// 9. Create an empty object called myPet
let myPet = {

}

// 10. Add the following properties
// name ( contains pet name)
// details ( contains several details about your pet). Which data type could I use to hold multiple values?

myPet.name = "Figaro";
myPet.details = ["siberian forest cat", "white"];
console.log( myPet )






