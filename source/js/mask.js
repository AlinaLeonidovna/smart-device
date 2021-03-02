"use strict";

(() => {
  const modal = document.querySelector(`.modal`);
  const modalTel = modal.querySelector(`#modal-phone`);
  const feedback = document.querySelector(`.feedback`);
  const feedbackTel = feedback.querySelector(`#feedback-phone`);
  const template = /^\+7\([0-9]{3}\)[0-9]{7}/;
  const lastLength = 2;

  const inputTelHandler = (evt) => {
    evt.currentTarget.addEventListener(`keypress`, function (e) {
      if (!/\d/.test(e.key)) {
        e.preventDefault();
      }
    });
    if (evt.currentTarget.value.length === 0) {
      evt.currentTarget.value = `+7(`;
    } else if (evt.currentTarget.value.length === 6) {
      evt.currentTarget.value = evt.currentTarget.value + `)`;
    } else if (lastLength === 8 && evt.currentTarget.value.length === 7) {
      evt.currentTarget.value = evt.currentTarget.value.slice(0, -1);
    }

    if (!template.test(evt.currentTarget.value)) {
      evt.currentTarget.setCustomValidity(`Пример: +7(9xx)xxxxxxx`);
    } else {
      evt.currentTarget.setCustomValidity(``);
    }
    lastLength = evt.currentTarget.value.length;
  };

  modalTel.addEventListener(`input`, inputTelHandler);
  modalTel.addEventListener(`focus`, inputTelHandler);
  feedbackTel.addEventListener(`input`, inputTelHandler);
  feedbackTel.addEventListener(`focus`, inputTelHandler);
})();
