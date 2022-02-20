'use strict';

/* ----- CONST SECTION ----- */

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// ----- END OF CONST SECTION -----


/* ----- FUNCTIONS SECTION ----- */

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// ----- END OF FUNCTIONS SECTION -----


/* ----- EVENT-LISTENER SECTION ----- */

// Remember to not call the function right away


// When you have only one line of code in the for loop you don't need curly braces
// Now we select multiple objects with the same class-name
// The for loop loops trough the NodeList
for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Adding the Escape key method to close the modal
document.addEventListener('keydown', function (e) {
    console.log(e.key);

        // Inverting the boolean value with !
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// ----- END OF EVENTLISTENER SECTION ------