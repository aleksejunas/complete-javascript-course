'use strict';

/* ----- SELECTING ELEMENTS ----- */

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// ----- END OF SELECTING ELEMENTS -----


/* ----- STARTING CONDITIONS */

// JavaScript automaticly converts the numbers to strings to display them on the page
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); // Hides the dice

let currentScore = 0;

// ----- END OF STARTING CONDITIONS -----

/* ----- ROLLING DICE FUNCTIONALITY */

btnRoll.addEventListener('click', function() {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
        // Add dice to the current score
        // Option 1: currentScore = currentScore + dice;
        currentScore += dice; // Option 2
        current0El.textContent = currentScore; // CHANGE LATER!!!
    } else {
        // Switch to next player
        
    }
})


// ----- ROLLING DICE FUNCTIONALITY -----



