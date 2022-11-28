const signinButton = document.querySelector('.signin');
const modal = document.querySelector('.modal-login');
const modalCloseButton = modal.querySelector('.modal__close');

function closeModal() {
  modal.classList.remove('modal--opened');
  modal.removeEventListener('click', closeModalOverlay);
  modalCloseButton.removeEventListener('click', closeModal);
  window.removeEventListener('keydown', pressESC);
}

function closeModalOverlay(e) {
  if (e.target === modal) {
    closeModal();
  }
}

function pressESC(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

signinButton.addEventListener('click', (e) => {
  e.preventDefault();

  modal.classList.toggle('modal--opened');
  modal.addEventListener('click', closeModalOverlay);
  modalCloseButton.addEventListener('click', closeModal);
  window.addEventListener('keydown', pressESC);
});
