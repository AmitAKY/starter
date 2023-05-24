'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosemodal = document.querySelector('.close-modal');
const btnopenmodal = document.querySelectorAll('.show-modal');
console.log(btnopenmodal);

const OpenModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log('button clicked');
};

for (let i = 0; i < btnopenmodal.length; i++)
  btnopenmodal[i].addEventListener('click', OpenModal);

const closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnClosemodal.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closemodal();
  }
});
