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
