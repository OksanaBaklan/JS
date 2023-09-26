# Destructuring

**Instructions**
- Work in the provided `index.js` file
#### 1. Array Destructuring
* Declare the variables `fruit`, `vegetable` and `food`.
* Assign the following values from an array to the variables respectively using restructuring assignment: `["banana", "cucumber", "bread", "cakes", "pizza"]`
* assign "bread", "cakes" and "pizza" to `food` using the rest property of destructuring assignment.

#### 2. Object Destructuring
* Declare the variables `fran`, `martina` and `camille`
* Assign the following values from an object to the variables respectively using destructurung assignment:
```javascript
{
  fran: "monster",
  martina: "ghost",
  camille: "witch"
}
```

#### 3. Parameters: Object Destructuring 
* Create an object named `musician` with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc. 
* Then, create a function named `displayMusicianDetails` that returns all of the band/musician's info as a string. 
* The passed object should be destructured into the function's parameters.
* Example
```javascript
displayMusicianDetails(musician) → "Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is 'Us'".
```