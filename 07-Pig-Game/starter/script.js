'use strict';

/* ----- SELECTING ELEMENTS ----- */

// ----- PLAYERS -----
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const name0El = document.getElementById('name--0');
const name1El = document.getElementById('name--1');



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

const scores = [0, 0];

// JavaScript automaticly converts the numbers to strings to display them on the page
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); // Hides the dice

let currentScore = 0;
let activePlayer = 0; // Player 1 = 0 | Player 2 = 1

// ----- END OF STARTING CONDITIONS -----

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    /* Ternary operator checks if the active player is 0(zero), then we want the new
     active player to be ? 1 and else : it should be 0(zero)
     And if the active player is 1 it swithces to zero */
    activePlayer = activePlayer === 0 ? 1 : 0;
    /* Toogle will add the class if it's not there and remove it if it's there
    By toggling both at the same time, ensures that it's only on of of the elements */
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

}


/* ----- ROLLING DICE FUNCTIONALITY */

btnRoll.addEventListener('click', function () {
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
        // Setting the score dynamicly from which is the active player right now
        document.getElementById(`score--${activePlayer}`).textContent = currentScore;
    } else {
        // Switch to next player
        switchPlayer();
    }
})
// ----- ROLLING DICE FUNCTIONALITY -----

btnHold.addEventListener('click', function () {
    // 1. Add current score to the avtive player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore; 
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check if player's score is <= 100
    //Finnish the game 

    // Switch to the next player
    switchPlayer();
})