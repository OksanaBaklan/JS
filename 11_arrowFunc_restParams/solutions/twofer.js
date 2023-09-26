// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed
// and "Two for me and one for Fran" if Fran is passed as a param.

// In this case I need to use a default param 
const twofer = (who = "you") => {
  return `Two for me and one for ${who}`;
};

console.log( twofer("Fran") ); // -> "Two for me and one for Fran"
console.log( twofer() ); // -> "Two for me and one for you"
