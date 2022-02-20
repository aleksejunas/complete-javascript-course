'use strict';
/* 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

/* Defining the secret number on the outside of the addEventListener, or else we
will get a new secret number every time we click the button */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Set inital score
let score = 20;
// Set initial highscore
let highscore = 0;

// Refactored the code for displaying message to reuse it across the whole js file
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

// JavaScript will call the function when the event happens
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    // The first scenario is usually that there is no input
    // Converting with ! because it defaults to true
    if (!guess) {
       // document.querySelector('.message').textContent = '🛑 No number!';
       displayMessage('🛑 No number!');

        // When the player wins
    } else if (guess === secretNumber) {
       // document.querySelector('.message').textContent = '🥳 Correct Number!';
        displayMessage('🥳 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.score').textContent = score;

        // ----- HIGHSCORE -----
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // When guess is wrong
    } else if (guess != secretNumber) {
        if (score > 1) {
            // Conditional Ternary Operator (Sjekker for true or false) (mellom guess og secretNumber)
           // document.querySelector('.message').textContent = guess > secretNumber ? '📈 To High!' : '📉 To Low!';
           displayMessage(guess > secretNumber ? '📈 To High!' : '📉 To Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            //document.querySelector('.message').textContent = '💥 You lost the game!';
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});
/*      // When guess is to high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 To Low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }

        // When guess is to low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 To Low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }

*/


// ----- AGAIN BUTTON -----

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
   // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');    
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = null;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});