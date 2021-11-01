const openModal = (modal) => {
  modal.classList.add('modal--active');
};

const closeModal = (modal) => {
  modal.classList.remove('modal--active');
};

const onEscPress = (evt, modal) => {
  const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

  if (isEscKey && modal.classList.contains('modal--active')) {
    evt.preventDefault();
    closeModal(modal);
  }
};

const setModalListeners = (modal) => {
  const overlay = modal.querySelector('.modal__overlay');
  const closeBtn = modal.querySelector('.modal__close');

  closeBtn.addEventListener('click', () => {
    closeModal(modal);
  });

  overlay.addEventListener('click', () => {
    closeModal(modal);
  });

  document.addEventListener('keydown', (evt) => {
    onEscPress(evt, modal);
  });
};

const setupModal = (modal, modalBtns, noPrevDefault) => {
  if (modalBtns) {
    modalBtns.forEach((btn) => {
      btn.addEventListener('click', (evt) => {
        if (!noPrevDefault) {
          evt.preventDefault();
        }

        openModal(modal);
      });
    });
  }

  setModalListeners(modal);
};

export {setupModal, openModal, closeModal};
