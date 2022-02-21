'use strict';


/* ----- SELECTING ELEMENTS ----- */

// ----- PLAYERS -----
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const name0El = document.getElementById('name--0');
const name1El = document.getElementById('name--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// ----- SCORE -----
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');



const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// ----- END OF SELECTING ELEMENTS .....

/* ----- DECLARING VARIABLES SECTION ----- */

// It's possible to declare a bunch of values by putting , between them
let scores, currentScore, activePlayer, playing;

// ----- END OF DECLARING VARIABLES SECTION .....



/* ----- FUNCTION SECTION ----- */

const init = function () {

    /* ----- STARTING CONDITIONS ----- */

    scores = [0, 0]; // An array that holds the scores
    currentScore = 0;
    activePlayer = 0; // Player 1 = 0 | Player 2 = 1
    playing = true;

    // ----- END OF STARTING CONDITIONS .....

    // JavaScript automaticly converts the numbers to strings to display them on the page
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;


    /* What I did
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner'); */

    // What Jonas did 
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');

    /* What I did
    document.querySelector('.player--1').classList.remove('player--active');
    */


    // What Jonas did
    player1El.classList.remove('player--active');

    // Hides the dice
    diceEl.classList.add('hidden');

    // Set playing back to true
    playing = true;

}

init();


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

// ----- END OF FUNCTION SECTION .....

init();

/* ----- ROLLING DICE FUNCTIONALITY */

btnRoll.addEventListener('click', function () {
    if (playing) {

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
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
});
// ----- END OF ROLLING DICE FUNCTIONALITY .....


/* ----- BUTTON HOLD SECTION ----- */

btnHold.addEventListener('click', function () {
    if (playing) {
        // 1. Add current score to the active player's score
        scores[activePlayer] += currentScore;
        // scores[1] = scores[1] + currentScore; 
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. Check if player's score is <= 100
        if (scores[activePlayer] >= 50) {
            //Finish the game
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }

        // Switch to the next player
        switchPlayer();
    }
})

// ----- END OF BUTTON HOLD SECTION .....

// ----- .......................... -----

/* ----- RESET GAME SECTION ----- */ // WHO-HOOO! Klarte nesten alt selv

btnNew.addEventListener('click', init);


// ----- END OF RESET GAME SECTION .....