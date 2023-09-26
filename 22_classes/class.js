/*
    Classes are a template for creating objects
    Classes in js are just special functions.

    Basic syntax

    class MyClass {

        constructor() {....} you can only have 1 constructor

        method1() {....}        
        method2() {....}        
        method3() {....}        

    }

    In order to use classes (create new instances) we must use the "new" keyword
*/

class User {  // COMMON PRACTICE: class names are usually capitalized

    // The constructor will kick in as soon as we create a new instance
    // This is also the place where we hold our params
    constructor( name ){ 
        // Inside the constructor we place our class fields (aka instance properties)
        this.name = name; // COMMON PRACTICE: Naming instance props after the param 
        console.log("constructor");
    }

    // Adding a method
    // All instances will receive the methods from the class
    sayHi() {
        console.log(`Hi ${this.name}`);
    }

}

// An instance is an object containing data and behaviour described by the class 
const logUser = new User("Mara"); // Creating an instance
// How can we call the sayHi Method?
logUser.sayHi();

// We can create multiple instances.. 
const logJill = new User("Jill");
logJill.sayHi();


// -----------------------------
/* 
    STUDENTS create a class called Vehicle
    Its constructor will take type and speed 
    The class contains 2 methods.. move() and stop()

    Create an instance of the Vehicle and call both move() and stop()

    move() will log: " vehicle ( type ) is moving at a speed of ( speed )kh "
    stop() will log " vehicle ( type ) slowing down gently till it stops "
*/
console.clear();

class Vehicle {

    constructor(type, speed) {
        this.type = type;
        this.speed = speed;
    }

    move() {
        console.log(`Vehicle ${this.type} is moving at a speed of ${this.speed} kph`)
    }

    stop() {
        console.log(`Vehicle ${this.type} slowing down gently till it stops`)
    }

}

const rustyCar = new Vehicle("car", 10);
rustyCar.move();
rustyCar.stop();
console.log( rustyCar );

console.clear();
// ------------------------- EXTENDS and SUPER

class Person {

    constructor(name){
        this.name = name;
    }

    walk(){
        console.log(`${this.name} is walking`);
    }

    eat(){
        console.log(`${this.name} is eating`);
    }
}

// const person1 = new Person("Elisa");
// person1.walk();

class Teacher extends Person { // We are inheriting everything from Person because of "extends"

    teach() {
        console.log(`${this.name} is teaching`)
    }

}

const teacher1 = new Teacher("Jim");
teacher1.walk();
teacher1.eat();
teacher1.teach();

// ---------------------------  Extending Person and adding customization
// super() to call from parent constr
// super.method()

class Teacher2 extends Person {

    constructor( name, degree ){
        super( name); // "super" makes clear that we are receiving "name" property from Person class
        this.degree = degree; 
    }

    tutoring(){
        console.log(`${this.name} has a ${this.degree} and is tutoring`)
    }

    // using inherited method
    eating(){
        super.eat(); // this comes from class Person and we need to use "super"
        console.log(`${this.name} is done eating`);
    }
}

const maryTeacher = new Teacher2("Mary", "Phd");
maryTeacher.tutoring(); // Mary has a Phd and is tutoring
maryTeacher.eat(); // eat() is coming from Person 
console.log( maryTeacher ); // { name: 'Mary', degree: 'Phd' }
console.clear();
maryTeacher.eating();




