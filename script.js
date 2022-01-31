"use strict";

const computerPlay = function () {
  const rps = ["rock", "paper", "scissors"];

  const selectPlay = rps[Math.floor(Math.random() * 3)];
  return selectPlay;
};

// console.log(computerPlay());

const play = function () {
  let humanMove = prompt("Rock, Paper of Scissors:").toLowerCase();
  let computerMove = computerPlay();
  let result;
  console.log(humanMove, computerMove);

  if (humanMove === "rock") {
    if (computerMove === "paper") {
      result = "lose";
    } else if (computerMove === "scissors") {
      result = "win";
    } else {
      result = "draw";
    }
  }
  if (humanMove === "paper") {
    if (computerMove === "paper") {
      result = "draw";
    } else if (computerMove === "scissors") {
      result = "lose";
    } else {
      result = "win";
    }
  }
  if (humanMove === "scissors") {
    if (computerMove === "paper") {
      result = "win";
    } else if (computerMove === "scissors") {
      result = "draw";
    } else {
      result = "lose";
    }
  }
  return result;
};
// play();

console.log(play());

// console.log(humanMove, computerMove);

// Checking the computerPlay fuction is working and is random(ish):
// let rock = 0;
// let paper = 0;
// let scissors = 0;

// for (let i = 1; i <= 1000; i++) {
//   let winner = computerPlay();
//   if (winner === "rock") {
//     rock = rock + 1;
//   } else if (winner === "paper") {
//     paper = paper + 1;
//   } else {
//     scissors = scissors + 1;
//   }
// }

// console.log(rock, paper, scissors);
