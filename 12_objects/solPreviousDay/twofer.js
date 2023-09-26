// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed
// and "Two for me and one for Fran" if Fran is passed as a param.

const twofer = ( who = "you") => {
    return `Two for me and one for ${who}`
}

const twoResult = twofer();
console.log( twoResult );

console.log( twofer("Fran") );
