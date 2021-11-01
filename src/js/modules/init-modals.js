import {setupModal} from "../utils/modal";

const modalTrial = document.querySelector('.modal-trial');
const modalTrialBtns = document.querySelectorAll('[data-modal="trial"]');

const initModals = () => {
  if (modalTrial && modalTrialBtns.length) {
    setupModal(modalTrial, modalTrialBtns, false);
  }
};

export {initModals};
