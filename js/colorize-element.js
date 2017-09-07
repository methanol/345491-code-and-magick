'use strict';
(function () {
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireBalls = document.querySelector('.setup-fireball-wrap');

  function fillElement(element, color, n) {
    element.setAttribute('style', 'fill:' + color[window.magnificentFunctions.countNumber(n)]);
  }

  function changeElementBackground(element, color, n) {
    element.setAttribute('style', 'background-color:' + color[window.magnificentFunctions.countNumber(n)]);
  }

  window.wizardChanged.callBack1 = function () {
    fillElement(wizardCoat, window.magnificentFunctions.COAT, 6);
  };

  window.wizardChanged.callBack2 = function () {
    fillElement(wizardEyes, window.magnificentFunctions.EYES, 5);
  };

  window.wizardChanged.callBack3 = function () {
    changeElementBackground(wizardFireBalls, window.magnificentFunctions.FIRE_BALLS, 5);
  };

  window.wizardChanged.colorizeElement1();
  window.wizardChanged.colorizeElement2();
  window.wizardChanged.colorizeElement3();

})();
