/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 18;
console.log(votingAge > 18);

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable
// (no function required)
let value1 = true;
let value2 = "42";
if (value2 == 42) value1 = false;

console.log(value1);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let value3 = "1999";

console.log(typeof Number(value3));

//Task d: Write a function to multiply a*b
const multiply = (a, b) => a * b;

console.log(multiply(34, 5));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years
const woofCalendar = (age) => `You are ${age * 7} Woofs.`;

console.log(woofCalendar(25));
/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal)
//  and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

const dogFeeder = (weight, age) => {
  let foodRequirements;
  if (age < 1) {
    if (age >= 0.167 && age < 0.333) {
      foodRequirements = weight * 0.1;
    } else if (age >= 0.333 && age < 0.583) {
      foodRequirements = weight * 0.05;
    } else if (age >= 0.583 && age < 1) {
      foodRequirements = weight * 0.04;
    } else {
      foodRequirements =
        "Please consult a physician for tips on caring for a newborn pupper.";
    }
  } else {
    if (weight > 15) {
      foodRequirements = weight * 0.02;
    } else if (weight <= 15 && weight >= 11) {
      foodRequirements = weight * 0.03;
    } else if (weight < 11 && weight >= 6) {
      foodRequirements = weight * 0.04;
    } else {
      foodRequirements = weight * 0.05;
    }
  }

  return foodRequirements;
};

console.log(dogFeeder(15, 1));

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number
const rockPaperScissors = (str) => {
  let player = str;
  let inputs = ["rock", "paper", "scissors"];
  let AI = inputs[Math.floor(Math.random() * 3)];
  //   console.log(player, AI);
  if (player === AI) {
    return "Tie Game";
  } else if (player === "rock" && AI === "paper") {
    return "You Lose";
  } else if (player === "scissors" && AI === "rock") {
    return "You Lose";
  } else if (player === "paper" && AI === "scissors") {
    return "You Lose";
  } else if (AI === "rock" && player === "paper") {
    return "You Win";
  } else if (AI === "scissors" && player === "rock") {
    return "You Win";
  } else if (AI === "paper" && player === "scissors") {
    return "You Win";
  }
};

console.log(rockPaperScissors("scissors"));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
const kilometersToMiles = (km) => km * 0.621371;
//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
const feetToCentimeters = (feet) => feet * 30.48;

console.log(kilometersToMiles(5));
console.log(feetToCentimeters(3));
/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down -
// at each iteration it should log (number) bottles of soda on the wall,
// (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

const annoyingSong = (num) => {
  let count = 1;
  for (let i = num - 1; i >= 0; i--) {
    console.log(
      `${count} bottles of soda on the wall\n${count} bottles of soda\ntake one down, pass it around ${i} bottles of soda on the wall`
    );
    count++;
  }
  return " ";
};

console.log(annoyingSong(3));

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F
const gradeCalc = (mark) => {
  if (mark >= 90) {
    return "A";
  } else if (mark >= 80) {
    return "B";
  } else if (mark >= 70) {
    return "C";
  } else if (mark >= 60) {
    return "D";
  } else {
    return "F";
  }
};

console.log(gradeCalc(61));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method
const numOfVowels = (str) => {
  let vowels = 0;
  let letters = str.toLowerCase().split("");
  letters.forEach((char, i) => {
    if (/^[aeiou]$/i.test(char)) {
      vowels++;
    }
  });
  return `${vowels} vowels in ${str}`;
};

console.log(numOfVowels("OrAnge"));

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
const rockPaperScissorsInteractive = () => {
  let player = prompt("Rock, Paper, Scissors, Shoot!").toLowerCase();
  let inputs = ["rock", "paper", "scissors"];
  let AI = inputs[Math.floor(Math.random() * 3)];
  //   console.log(player, AI);
  if (player === AI) {
    alert("Tie Game");
  } else if (player === "rock" && AI === "paper") {
    alert("You Lose");
  } else if (player === "scissors" && AI === "rock") {
    alert("You Lose");
  } else if (player === "paper" && AI === "scissors") {
    alert("You Lose");
  } else if (AI === "rock" && player === "paper") {
    alert("You Win");
  } else if (AI === "scissors" && player === "rock") {
    alert("You Win");
  } else if (AI === "paper" && player === "scissors") {
    alert("You Win");
  } else {
    alert("Invalid response");
  }
};

rockPaperScissorsInteractive();
