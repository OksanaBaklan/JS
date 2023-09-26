// Basketball teams

//1a

let aleezaGame1 = 89;

let aleezaGame2 = 120;

let aleezaGame3 = 103;

const laraGame1 = 116;

const laraGame2 = 94;

const laraGame3 = 123;

let aleezaTeamAve = Math.round((aleezaGame1 + aleezaGame2 + aleezaGame3) / 3);

console.log(`Aleeza's team scored an average ${aleezaTeamAve}`);

let laraTeamAve = Math.round((laraGame1 + laraGame2 + laraGame3) / 3);

console.log(`Lara's team scored an average ${laraTeamAve}`);

//1b

if (laraTeamAve > aleezaTeamAve) {
  console.log(
    `Lara's team is the winner with an average score of ${laraTeamAve}`
  );
} else if (aleezaTeamAve > laraTeamAve) {
  console.log(
    `Aleeza's team is the winner with an average score of ${aleezaTeamAve}`
  );
} else if (aleezaTeamAve == laraTeamAve) {
  console.log(`It's a tie with an average score of ${aleezaTeamAve}`);
}

//1c

aleezaGame1 = 200;

aleezaGame2 = 120;

aleezaGame3 = 103;

const aleezaTeamAve2 = Math.round(
  (aleezaGame1 + aleezaGame2 + aleezaGame3) / 3
);

if (laraTeamAve > aleezaTeamAve2) {
  console.log(`Lara's team is the winner with an average score of ${laraTeamAve}`);
} else if (aleezaTeamAve2 > laraTeamAve) {
  console.log(
    `Aleeza's team is the winner with an average score of ${aleezaTeamAve2}`
  );
} else if (aleezaTeamAve2 == laraTeamAve) {
  console.log(`It's a tie with an average score of ${aleezaTeamAve2}`);
}

//1d

let maryGame1 = 200;

const maryGame2 = 134;

const maryGame3 = 105;

const maryTeamAve = Math.round((maryGame1 + maryGame2 + maryGame3) / 3);
console.log(maryTeamAve)
if (laraTeamAve > aleezaTeamAve2 && laraTeamAve > maryTeamAve) {
  console.log(`Lara's team is the winner with an average score of ${laraTeamAve}`);
} else if (aleezaTeamAve2 > laraTeamAve && aleezaTeamAve2 > maryTeamAve) {
  console.log(
    `Aleeza's team is the winner with an average score of ${aleezaTeamAve2}`
  );
} else if (maryTeamAve > laraTeamAve && maryTeamAve > aleezaTeamAve2) {
  console.log(`Mary's team is the winner with an average score of ${maryTeamAve}`);
} else if (aleezaTeamAve2 == laraTeamAve && aleezaTeamAve2 !== maryTeamAve) {
  console.log(
    `Aleeza's team and Lara's team are tied for first place with an average score of ${aleezaTeamAve2}, Mary's team coming in at third, I guess.`
  );
} else if (aleezaTeamAve2 == maryTeamAve && aleezaTeamAve2 !== laraTeamAve) {
  console.log(
    `Aleeza's team and Mary's team are tied for first place with an average score of ${aleezaTeamAve2}, lara' team coming in at third, I guess.`
  );
} else if (laraTeamAve == maryTeamAve && aleezaTeamAve2 !== laraTeamAve) {
  console.log(
    `Lara's team and Mary's team are tied for first place with an average score of ${aleezaTeamAve2}, Aleeza's team coming in at third, I guess.`
  );
} else if ((aleezaTeamAve2 == laraTeamAve) == maryTeamAve) {
  console.log(
    `All three teams are tide with an average score of ${aleezaTeamAve2}`
  );
}

//1e

maryGame1 = 184;

const maryTeamAve2 = Math.round((maryGame1 + maryGame2 + maryGame3) / 3);

if (laraTeamAve > aleezaTeamAve2 && laraTeamAve > maryTeamAve2) {
  console.log(`Lara's team is the winner with an average score of ${laraTeamAve}`);
} else if (aleezaTeamAve2 > laraTeamAve && aleezaTeamAve2 > maryTeamAve2) {
  console.log(
    `Aleeza's team is the winner with an average score of ${aleezaTeamAve2}`
  );
} else if (maryTeamAve2 > laraTeamAve && maryTeamAve2 > aleezaTeamAve2) {
  console.log(`Mary's team is the winner with an average score of ${maryTeamAve2}`);
} else if (aleezaTeamAve2 == laraTeamAve && aleezaTeamAve2 !== maryTeamAve2) {
  console.log(
    `Aleeza's team and Lara's team are tied for first place with an average score of ${aleezaTeamAve2}`
  );
} else if (aleezaTeamAve2 == maryTeamAve2 && aleezaTeamAve2 !== laraTeamAve) {
  console.log(
    `Aleeza's team and Mary's team are tied for first place with an average score of ${aleezaTeamAve2}`
  );
} else if (laraTeamAve == maryTeamAve2 && aleezaTeamAve2 !== laraTeamAve) {
  console.log(
    `Lara's team and Mary's teams are tied for first with ${aleezaTeamAve2}, Aleeza's team coming in at third, I guess.`
  );
} else if ((aleezaTeamAve2 == laraTeamAve) == maryTeamAve2) {
  console.log(
    `All three teams are tide with an average score of ${aleezaTeamAve2}`
  );
}
