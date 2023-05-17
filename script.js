'use strict';

// we are setting certain lines of the html document to variables in javascript
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


// instead of assignment an 'event listener' to each btn
// we can use a for loop to select all the buttons and assign 'event listner'
for(let i = 0; i < btnsOpenModal.length; i++) {
   btnsOpenModal[i].addEventListener('click', openModal)
}


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


// keydown, keypress, & keyup are the three keyboard commands
// keydown is the most common
// e stands for keyboard event?
// e gives us lots of keyboard information
document.addEventListener('keydown', function (e) { 
    if(e.key === 'Escape' ) {
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    }
})






