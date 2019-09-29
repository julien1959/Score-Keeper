"use strict";

const h1 = document.querySelector("h1");
const input = document.querySelector("input");
const scorePlayer1 = document.querySelectorAll("span")[0];
const scorePlayer2 = document.querySelectorAll("span")[1];
const scoreWinner = document.querySelectorAll("span")[2];
const buttonPlayer1 = document.querySelectorAll("button")[0];
const buttonPlayer2 = document.querySelectorAll("button")[1];
const buttonReset = document.querySelectorAll("button")[2];

let scoreP1 = 0;
let scoreP2 = 0;
let scoreMax = null;

//  PLAYER 1

function insertScoreP1IntoSpan0() {
    scorePlayer1.append(document.createTextNode(scoreP1));
}

function changeScorePlayer1() {
    if (scoreP1 < scoreMax && scoreP2 < scoreMax) {
        scoreP1++
        scorePlayer1.textContent = scoreP1;
    }    
    if (scoreP1 == scoreMax) {
        scorePlayer1.classList.add("winner");
        scoreMax = null;
    }
}

// PLAYER 2

function insertScoreP2IntoSpan1() {
    scorePlayer2.append(document.createTextNode(scoreP2));
}

function changeScorePlayer2() {
    if (scoreP2 < scoreMax && scoreP1 < scoreMax) {
        scoreP2++
        scorePlayer2.textContent = scoreP2;
    }
    if (scoreP2 == scoreMax) {
        scorePlayer2.classList.add("winner");
        scoreMax = null;
    }
}

// RESET

function scoreReset() {
    scorePlayer1.textContent = (scoreP1 = 0);
    scorePlayer2.textContent = (scoreP2 = 0);
    input.value = null;
    scoreMax = null;     
    scoreWinner.textContent = 0;
    scorePlayer1.classList.remove("winner"); 
    scorePlayer2.classList.remove("winner"); 
}

// SCORE WINNER

function insertValueInputIntoSpan2() {    
    scoreWinner.append(document.createTextNode(scoreMax));
}

function changeScoreWinner() {
    scoreWinner.textContent = input.value;
    scoreMax = input.value;   
}

// LOADING

function loading() {
    input.value = 5;
    scoreMax = 5; 
    scoreWinner.textContent = 5;   
}

buttonPlayer1.addEventListener("click", changeScorePlayer1);
buttonPlayer2.addEventListener("click", changeScorePlayer2);
buttonReset.addEventListener("click", scoreReset);
input.addEventListener("click", changeScoreWinner);
window.addEventListener("load", loading);