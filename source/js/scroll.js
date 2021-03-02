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
