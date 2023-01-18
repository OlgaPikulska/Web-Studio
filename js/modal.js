const body = document.querySelector('body');
const modal = document.querySelector('[data-modal]');
const openModalBtn = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');


openModalBtn.addEventListener("click", e => {
  modal.classList.remove("is-hidden")
  body.style.overflowY = "hidden"
})

closeModalBtn.addEventListener("click", e => {
  modal.classList.add("is-hidden")
  body.style.overflowY = "auto"
})

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    modal.classList.add("is-hidden")
    body.style.overflowY = "auto"
  }
});