'use strict';
(function () {
  var wizardWidth = 70;

  window.fireballSize = 22;
  window.wizardSpeed = 3;
  window.getFireballSpeed = function (left) {
    if (left) {
      return 5;
    }
    return 2;
  };
  window.getWizardHeight = function () {
    return 1.337 * wizardWidth;
  };
  window.getWizardX = function (width) {
    return width * 0.5;
  };
  window.getWizardY = function (height) {
    return height / 3;
  };

})();
