'use strict';

//define variables
const message = document.querySelector('.message')
const numberDisplay = document.querySelector('.number');
const score = document.querySelector('.score');
let scoreValue = 20;
const input = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const randomNumber = Math.floor(Math.random() * 20) + 1;

//display random number 

numberDisplay.textContent = randomNumber;

//handler logic and compare numbers

btnCheck.addEventListener('click', function () {
    // save user value inputed and convert to Number
    const userValue = Number(input.value);
    console.log(input.value);

    //validation if falsy value is filled
    if (!userValue) {
        message.textContent = "NO NUMBER";
        // compare scenarios     
    } else if (userValue === randomNumber) {
        message.textContent = "CORRECT";
    } else if (userValue < randomNumber) {
        //validation for 0 score
        if (scoreValue > 1) {
            message.textContent = "TO LOW";
            //adjust the score if miss
            scoreValue--
            score.textContent = scoreValue;
        } else {
            message.textContent = "YOU LOST";
            score.textContent = 0;
        }
    } else if (userValue > randomNumber) {
        if (scoreValue > 1) {
            message.textContent = "TO HIGH";
            scoreValue--
            score.textContent = scoreValue;
        } else {
            message.textContent = "YOU LOST";
            score.textContent = 0;
        }
    }

});