// 1.
let uppercase = ( str ) => {
  let array1 = str.split(' ');
  let newArr = [];

  let firstLetter = "";
  let remainingLetters = "";

  for(let el of array1){
      firstLetter = el.slice(0,1).toUpperCase();
      remainingLetters = el.slice(1);
      newArr.push( firstLetter + remainingLetters );
  }

  return newArr.toString();
}

let retStuff = uppercase("the quick brown fox");
console.log( retStuff );

// 2.
const findLongestWord = ( str ) => {
  let array1 = str.split(' ');
  let longest = array1[0];

  for( let el of array1 ){
      if( el.length > longest.length ) {
          longest = el
      }
  }

  return longest;

}
let retLongest = findLongestWord("Web Development Tutorial");
console.log( retLongest );

// 3.
function longestCountryName(countries) {
  let longest = countries[0];

  for( let el of countries ){
      longest = el.length > longest.length ? el : longest;
  }

  return longest;
}

let retLongCountry = longestCountryName(["France", "Germany", "Iran"]);
console.log( retLongCountry )



/*

4. Complete the function `countWovels` such that it accepts a string as a parameter and returns the number of 
vowels within the string. **Note! The letter 'y' can be regarded a vowel OR a consonant. We do not count 'y' as vowel here.**

```
Example input: 'The quick brown fox'
Expected output: 5
 */

let countVowels = ( str ) => {
  let arr = ["a","e","i","o","u"];
  let vowelsNum= 0;

  for( let char of str ){
    if( arr.includes(char)){
      vowelsNum++
    }
  }

  return vowelsNum;

}
let retVowelCount = countVowels( "The quick brown fox" );
console.log( retVowelCount )

// 5.


let makeRandomString = ( num ) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let str = ''
  for (let index = 0; index < num; index++) {
    str += chars[Math.floor(Math.random() * chars.length)]
  }
  return str
}
console.log( makeRandomString(4) )
