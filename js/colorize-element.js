'use strict';
(function () {
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireBalls = document.querySelector('.setup-fireball-wrap');

  function fillElement(element, color, n) {
    element.setAttribute('style', 'fill:' + color[window.magnificentFunctions.countNumber(n)]);
  }

  window.wizardChanged.callBack = function () {
    fillElement(wizardCoat, window.magnificentFunctions.COAT, 6);
  };

  window.wizardChanged.colorizeElement(wizardCoat);

  window.wizardChanged.callBack = function () {
    fillElement(wizardEyes, window.magnificentFunctions.EYES, 5);
  };

  window.wizardChanged.colorizeElement(wizardEyes);

  function changeElementBackground(element, color, n) {
    element.setAttribute('style', 'background-color:' + color[window.magnificentFunctions.countNumber(n)]);
  }

  window.wizardChanged.callBack = function () {
    changeElementBackground(wizardFireBalls, window.magnificentFunctions.FIRE_BALLS, 5);
  };

  window.wizardChanged.colorizeElement(wizardFireBalls);

})();
