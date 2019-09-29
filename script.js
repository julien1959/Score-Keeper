"use strict";

const h1 = document.querySelector("h1");
const input = document.querySelector("input");
const scorePlayer1 = document.querySelectorAll("span")[0];
const scorePlayer2 = document.querySelectorAll("span")[1];
const scoreWinner = document.querySelectorAll("span")[2];
const buttonPlayer1 = document.querySelectorAll("button")[0];
const buttonPlayer2 = document.querySelectorAll("button")[1];
const buttonReset = document.querySelectorAll("button")[2];

let scoreP1 = 0
let scoreP2 = 0
let scoreMax = 5

//  PLAYER 1

function insertScoreP1IntoSpan0() {
    scorePlayer1.insertAdjacentText("afterbegin", scoreP1);
}

function displayScorePlayer1() {
    if (scoreP1 < scoreMax) {
        scoreP1++
        scorePlayer1.textContent = scoreP1;
    }
}

// PLAYER 2

function insertScoreP2IntoSpan1() {
    scorePlayer2.insertAdjacentText("afterbegin", scoreP2);
}

function displayScorePlayer2() {
    if (scoreP2 < scoreMax) {
        scoreP2++
        scorePlayer2.textContent = scoreP2;
    }
}

// RESET

function scoreReset() {
    scorePlayer1.textContent = (scoreP1 = 0);
    scorePlayer2.textContent = (scoreP2 = 0);
}

buttonPlayer1.addEventListener("click", displayScorePlayer1);
buttonPlayer2.addEventListener("click", displayScorePlayer2);
buttonReset.addEventListener("click", scoreReset);
