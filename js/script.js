'use strict';

// DOM element references
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Open modal function
const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// Close modal function
const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// Open modal on button click
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

// Event listeners to close modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// keyboard events
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})
