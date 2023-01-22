'use strict';

const message = document.querySelector('.message')
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const input = document.querySelector('.guess');
console.log(input.value);

const btn = document.querySelector('.check')
btn.addEventListener('click', function () {
    // save user value inputed and convert to Number
    const userValue = Number(input.value);
    console.log(input.value);

    //validation if falsy value is filled
    if (!userValue) {
        message.textContent = "NO NUMBER"
    }

});