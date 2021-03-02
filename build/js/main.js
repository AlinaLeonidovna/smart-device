"use strict";

(() => {
  const accordions = document.querySelectorAll(`.page-footer__accordion`);

  const switchs = function (block) {
    const btnSwitch = block.querySelector(`.page-footer__switch`);

    const closeList = (evt) => {
      if (!(block.classList.contains(`page-footer__accordion--close`))) {
        evt.stopPropagation();

        block.classList.add(`page-footer__accordion--close`);

        btnSwitch.removeEventListener(`click`, closeList);
      }
    };

    block.addEventListener(`click`, () => {
      for (let i = 0; i < accordions.length; i++) {
        accordions[i].classList.add(`page-footer__accordion--close`);
      }

      block.classList.remove(`page-footer__accordion--close`);

      btnSwitch.addEventListener(`click`, closeList);
    });
  };

  if (accordions) {
    for (let i = 0; i < accordions.length; i++) {
      accordions[i].classList.remove(`page-footer__accordion--no-js`);

      switchs(accordions[i]);
    }
  }
})();

"use strict";

(() => {
  const body = document.querySelector(`.page`);
  const linkModal = document.querySelector(`#modal`);
  const modal = document.querySelector(`.modal`);
  const modalContent = modal.querySelector(`.modal__content`);
  const modalForm = modal.querySelector(`.form--modal`);
  const modalName = modal.querySelector(`#modal-name`);
  const modalTel = modal.querySelector(`#moda-phone`);
  const modalText = modal.querySelector(`#modal-question`);
  const btnClose = modal.querySelector(`.modal__btn-close`);

  if (modal) {
    let isStorageSupport = true;
    let storageName = ``;
    let storageTel = ``;
    let storageText = ``;

    try {
      storageName = localStorage.getItem(`name`);
      storageTel = localStorage.getItem(`tel`);
      storageText = localStorage.getItem(`text`);
    } catch (err) {
      isStorageSupport = false;
    }

    linkModal.addEventListener(`click`, (evt) =>{
      evt.preventDefault();
      modal.classList.add(`modal--open`);
      body.classList.add(`page--scroll`);

      modalName.focus();

      if (storageName) {
        modalName.value = storageName;
        modalTel.value = storageTel;
        modalText.value = storageText;
      }
    });

    btnClose.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      modal.classList.remove(`modal--open`);
      body.classList.remove(`page--scroll`);
    });

    modalForm.addEventListener(`submit`, (evt) => {
      if (!modalName.value || !modalTel.value) {
        evt.preventDefault();
      } else {
        if (isStorageSupport) {
          localStorage.setItem(`name`, modalName.value);
          localStorage.setItem(`tel`, modalTel.value);
          localStorage.setItem(`text`, modalText.value);
        }
      }
    });

    window.addEventListener(`keydown`, (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        if (modal.classList.contains(`modal--open`)) {
          evt.preventDefault();
          modal.classList.remove(`modal--open`);
          body.classList.remove(`page--scroll`);
        }
      }
    });

    modal.addEventListener(`click`, (evt) => {
      if (evt.target !== modalContent) {
        modal.classList.remove(`modal--open`);
        body.classList.remove(`page--scroll`);
      }
    });

    modalContent.addEventListener(`click`, (evt) => {
      evt.stopPropagation();
    });
  }
})();
