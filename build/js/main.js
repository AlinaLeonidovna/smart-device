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
  const linkModal = document.querySelector(`#link-modal`);
  const modal = document.querySelector(`#modal`);
  const modalContent = modal.querySelector(`.modal__content`);
  const modalForm = modal.querySelector(`.form--modal`);
  const modalName = modal.querySelector(`#modal-name`);
  const modalTel = modal.querySelector(`#modal-phone`);
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

    linkModal.addEventListener(`click`, (evt) => {
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

"use strict";

(() => {
  const feedback = document.querySelector(`.feedback`);
  const modal = document.querySelector(`#modal`);

  const maskOptions = {
    mask: `+{7}(000)000-00-00`,
  };

  const onInputFocus = (input) => {
    input.addEventListener(`focus`, () => {
      if (input.value === ``) {
        input.value = `+7(`;
      }
    });
  };

  const onInputBlur = (input) => {
    input.addEventListener(``, () => {
      if ((input.value === `+7(`) || (input.value === ``)) {
        input.value = ``;
      }
    });
  };

  if (feedback) {
    const feedbackTel = feedback.querySelector(`#feedback-phone`);

    // eslint-disable-next-line
    new IMask(feedbackTel, maskOptions);

    onInputFocus(feedbackTel);
    onInputBlur(feedbackTel);
  }

  if (modal) {
    const modalTel = modal.querySelector(`#modal-phone`);

    // eslint-disable-next-line
    new IMask(modalTel, maskOptions);

    onInputFocus(modalTel);
    onInputBlur(modalTel);
  }
})();

"use strict";

(()=> {
  const promoBtn = document.querySelector(`.btn--promo`);
  const feedback = document.querySelector(`#feedback`);

  if (promoBtn) {
    promoBtn.addEventListener(`click`, function (evt) {
      evt.preventDefault();
      feedback.scrollIntoView({
        behavior: `smooth`,
      });
    });
  }

  const promoScroll = document.querySelector(`.promo__scroll`);
  const advantages = document.querySelector(`#advantages`);

  if (promoScroll) {
    promoScroll.addEventListener(`click`, function (evt) {
      evt.preventDefault();
      advantages.scrollIntoView({
        behavior: `smooth`,
      });
    });
  }
})();
