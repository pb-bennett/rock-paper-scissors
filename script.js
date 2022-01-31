"use strict";

const computerPlay = function () {
  const rps = ["rock", "paper", "scissors"];

  const selectPlay = rps[Math.floor(Math.random() * 3)];
  return selectPlay;
};

// console.log(computerPlay());

const play = function () {
  let humanMove = prompt(`Round ${roundNumber} - Rock, Paper or Scissors?`);
  let computerMove = computerPlay();
  let result;
  // console.log(humanMove, computerMove);
  if (!humanMove) {
    console.log("Not a valid input, try again.");
    return play();
  } else if (
    humanMove.toLowerCase() !== "rock" &&
    humanMove.toLowerCase() !== "paper" &&
    humanMove.toLowerCase() !== "scissors"
  ) {
    console.log(
      `${humanMove} is not a valid input.  Try 'rock', 'paper' or 'scissors'.`
    );
    return play();
  } else {
    humanMove = humanMove.toLowerCase();
  }

  if (humanMove === "rock") {
    if (computerMove === "paper") {
      result = "lose";
    } else if (computerMove === "scissors") {
      result = "win";
    } else {
      result = "draw";
    }
  } else if (humanMove === "paper") {
    if (computerMove === "paper") {
      result = "draw";
    } else if (computerMove === "scissors") {
      result = "lose";
    } else {
      result = "win";
    }
  } else if (humanMove === "scissors") {
    if (computerMove === "paper") {
      result = "win";
    } else if (computerMove === "scissors") {
      result = "draw";
    } else {
      result = "lose";
    }
  }
  // } else {
  //   console.log(
  //     `${humanMove} is not a valid input.  Try 'rock', 'paper' or 'scissors'.`
  //   );
  //   return play();
  // }
  return [result, humanMove, computerMove];
};

let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;
let drawCount = 0;

while (humanScore < 5 && computerScore < 5) {
  roundNumber++;
  let result = play();
  if (result[0] === "win") {
    humanScore++;
  } else if (result[0] === "lose") {
    computerScore++;
  } else {
    drawCount++;
  }
  console.log(`Round ${roundNumber} - You launched with ${result[1]} and the computer replied with ${result[2]}.  You ${result[0]} this round!
The scores are ${humanScore} to you and ${computerScore} to the computer. `);
}

humanScore === 5
  ? console.log(
      `You win the match after ${roundNumber} rounds! The final score is ${humanScore} to you and ${computerScore} to the computer. ${drawCount} rounds were drawn. Well done!`
    )
  : console.log(
      `Oh dear, after ${roundNumber} rounds you lost the match! The final score is ${humanScore} to you and ${computerScore} to the computer. ${drawCount} rounds were drawn. Try again...`
    );

// play();

// console.log(play());

// console.log(humanMove, computerMove);

// Checking the computerPlay fuction is working and is random(ish)ly:

// let rock = 0;
// let paper = 0;
// let scissors = 0;

// for (let i = 1; i <= 10000; i++) {
//   let winner = computerPlay();
//   // console.log(winner);
//   if (winner === "rock") {
//     rock++;
//   } else if (winner === "paper") {
//     paper++;
//   } else {
//     scissors++;
//   }
// }

// console.log(rock, paper, scissors)
