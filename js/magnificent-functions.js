'use strict';
(function () {

  window.magnificentFunctions = {
    countNumber: function (n) {
      return Math.floor(Math.random() * n);
    },
    ESC_CODE: 27,
    ENTER_CODE: 13,
    COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES: ['black', 'red', 'blue', 'yellow', 'green'],
    closePopup: function (item) {
      item.classList.add('hidden');
      document.removeEventListener('keydown');
    },
    openPopup: function (item) {
      item.classList.remove('hidden');
      document.addEventListener('keydown');
    },
    onPopupEscPress: function (evt, item, useName) {
      if (evt.target === useName) {
        evt.stopPropagation();
        return;
      } else {
        if (evt.keyCode === window.magnificentFunctions.ESC_CODE) {
          window.magnificentFunctions.closePopup(item);
        }
      }
    }
  };
})();
