'use strict';
(function () {
  var wizardWidth = 70;

  window.gameplaySetting = {
    fireballSize: 220,
    wizardSpeed: 3,
    getFireballSpeed: function (left) {
      if (left) {
        return 5;
      }
      return 2;
    },
    getWizardHeight: function () {
      return 1.337 * wizardWidth;
    },
    getWizardX: function (width) {
      return width * 0.5;
    },
    getWizardY: function (height) {
      return height / 3;
    }
  };
})();
