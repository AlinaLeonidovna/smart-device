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
