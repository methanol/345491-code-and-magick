'use strict';
(function () {
  var ESC_CODE = 27;

  window.magnificentFunctions = {
    countNumber: function (n) {
      return Math.floor(Math.random() * n);
    },
    ENTER_CODE: 13,
    COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES: ['black', 'red', 'blue', 'yellow', 'green'],
    closePopup: function (item) {
      item.classList.add('hidden');
    },
    openPopup: function (item) {
      item.classList.remove('hidden');
    },
    onPopupEscPress: function (evt, item, useName) {
      if (evt.target === useName) {
        evt.stopPropagation();
        return;
      } else {
        if (evt.keyCode === ESC_CODE) {
          window.magnificentFunctions.closePopup(item);
        }
      }
    }
  };
})();
