// 1. Add up

function sumIntFrom1ToN(int) {
    let sum = 0;
    for (let i = 0; i <= int; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumIntFrom1ToN(25));

// 2. Cubed

function sumOfCubes(a, b, c) {
    return a ** 3 + b ** 3 + c ** 3;
}

console.log(sumOfCubes(1, 5, 9))
console.log(sumOfCubes(2,8))
console.log(sumOfCubes())

// 3. String Check

function isStrStartOfWord(str, word) {
    const INDEX_END = str.length; //substring() prep: calculates the index of the first character to exclude from the returned substring check
    const LOWER_CASE_STR = str.toLowerCase();
    const LOWER_CASE_WORD = word.toLowerCase();
    return LOWER_CASE_WORD.substring(0, INDEX_END) === LOWER_CASE_STR; // note that the first parameter in substring() is included in the result string while the second parameter is excluded, which is why str.length is sufficient even though it does not represent the correct index of the last letter. 
};

console.log(isStrStartOfWord("hicc", "hiccough"));
console.log(isStrStartOfWord("spices", "German food uses spices"));
console.log(isStrStartOfWord("hello", "Hello, World"));

// 4. Less than or Equal to Zero?

function isLEQZero(number) {
    return number <= 0;
}

console.log(isLEQZero(-10));

// 5. Count Occurrences

function countOccurrences(str, letter) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            counter++;
        }
    }
    return counter;
}

console.log(countOccurrences("this is a string", "i"));


//6. X To The Power of X

function calcBaseToExponent(base, exponent) {
    return base ** exponent; // exponentiation operator
}

console.log(calcBaseToExponent(3, 3));

// 7. Dog Years

function dogAge(AgeInHumanYears) {
    const DOGGO_YEARS = AgeInHumanYears * 7;
    return `Your doggo is ${DOGGO_YEARS} years old in dog years!`;
}

console.log(dogAge(9));

// 8. Lifetime Supply

function calcLifetimeSupply(currentAge, amountPerDay) { //Bonus: maxAge can be added here as a parameter. Snack was also added here for show
    const MAX_AGE = 100;
    const AVERAGE_YEAR = 365.25; //simplified calc for leap years
    const SUPPLY_CALC = Math.ceil((MAX_AGE - currentAge) * AVERAGE_YEAR * amountPerDay); // Bonus: MAX_AGE could also be taken from a parameter here, Math.ceil() rounds the result of floating values here
    return `The snack company should provide you with ${SUPPLY_CALC} units, until you are a ripe old age of ${MAX_AGE}. Happy snacking!`; 
}

console.log(calcLifetimeSupply(25, 2));
console.log(calcLifetimeSupply(40, 3));
console.log(calcLifetimeSupply(32, 0.58));


//9. Where's Waldo?

function isWaldoHere(str) {
    const LOWER_CASE_STR = str.toLowerCase(); // prep: includes() is case-sensitive 
    return LOWER_CASE_STR.includes("waldo");
}

console.log(isWaldoHere("where is Wally?"));
console.log(isWaldoHere("is there wal here ?"));
console.log(isWaldoHere("I found you Waldo!"));
console.log(isWaldoHere("is wally here?"));

// 10. Pie

function isEqualSlices(totalSlices, numOfRecipients, slicesPP) {
    const NEEDED_SLICES = numOfRecipients * slicesPP;
    return totalSlices >= NEEDED_SLICES;
}
console.log(isEqualSlices(4, 2, 3));
console.log(isEqualSlices(4, 2, 2));
console.log(isEqualSlices(4, 3, 1));

// 11. XO

function isEqualNumXandOs(str) {
    const LOWER_CASE_STR = str.toLowerCase();
    let countX = 0;
    let countO = 0;
    for (let i = 0; i < str.length; i++) {
        if (LOWER_CASE_STR[i] === "x") {
            countX++;
        } else if (LOWER_CASE_STR[i] === "o") {
            countO++;
        }
    }
    if ((countX === 0) && (countO === 0)) {
        return true;
    } else if (countX === countO) {
        return true;
    } else if (countX !== countO) {
        return false;
    }
}

console.log(isEqualNumXandOs("ooxx"));
console.log(isEqualNumXandOs("xooxx"));
console.log(isEqualNumXandOs("ooxXm"));
console.log(isEqualNumXandOs("zpzpzpp"));
console.log(isEqualNumXandOs("zzoo"));

// 12. isPrime?

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;  
}

console.log(isPrime(7)); // ➞ true
console.log(isPrime(9)); // ➞ false
console.log(isPrime(10)); // ➞ false

// console.log(isPrime(212));
