"use strict";

let prompt = require("prompt-sync")();

// function to get a random integer
const getRandomInt = function (max, min) {
  max = Math.ceil(max);
  min = Math.floor(min);
  return Math.floor((Math.random()*(max-min) + min));
}

let randomNumber;
let maxInput;
let minInput;

// while loop to set the range for the random integer 
while (true) {
  console.log("lets set up our random number range!")
  maxInput = prompt("Please enter the maximum range integer: ")

  if (isNaN(Number(maxInput))) {
    console.log('Not a number! Try again');
    continue;
  }
  
  minInput = prompt("Please enter the minimum range integer: ");

  if (isNaN(Number(minInput))) {
    console.log('Not a number! Try again');
    continue;
  }
  randomNumber = getRandomInt(maxInput, minInput);
  console.log(randomNumber);
  break;
}
  
let guessCounter = 0;
let prevAnswer = [];

// while loop to execute our guessing game
while (true) {
  let answer = prompt("Guess a number (press q to quit): ");
  
  // Add a quit command. Also reject non numbered values
  if (answer === 'q') {
    break;
  } else if (isNaN(Number(answer))) {
    console.log('Not a number! Try again');
    continue;
  }

  answer = Number(answer);

  // check if a number has already been guessed. Ignore turn if it has
  let prevAnswerFlag = false;
  for (let i = 0; i < prevAnswer.length; i++) {
    if (answer === prevAnswer[i]) {
      prevAnswerFlag = true;
      break;
    }
  }

  if (prevAnswerFlag === true) {
    console.log("Already Guessed!")
    continue;
  } else {
    guessCounter++;
    prevAnswer.push(answer);
  }
  
  //output after a guess
  if (answer === randomNumber) {
    console.log("You got it! You took " + guessCounter + " attempts!");
    break;
  } else if (answer < randomNumber) {
    console.log("Too Low!");
  } else if (answer > randomNumber) {
    console.log("Too High!");
  }
}
