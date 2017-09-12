'use strict';
(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var setupSave = document.querySelector('.setup-submit');
  var userNameInput = document.querySelector('.setup-user-name');
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireBalls = document.querySelector('.setup-fireball-wrap');
  var setupName = document.querySelector('.setup-user-name');
  var lastTimeout;

  var FIRE_BALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var INITIAL_COORDS = {
    x: '50%',
    y: '100px'
  };

  setupOpen.addEventListener('click', function () {
    window.magnificentFunctions.openPopup(setup);
    setup.style.top = INITIAL_COORDS.y;
    setup.style.left = INITIAL_COORDS.x;
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.magnificentFunctions.ENTER_CODE) {
      window.magnificentFunctions.openPopup(setup);
      setup.style.top = INITIAL_COORDS.y;
      setup.style.left = INITIAL_COORDS.x;
    }
  });

  document.addEventListener('keydown', function (evt) {
    if (!(setupOpen.classList.contains('hidden'))) {
      window.magnificentFunctions.onPopupEscPress(evt, setup, setupName);
    }
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.magnificentFunctions.ENTER_CODE) {
      window.magnificentFunctions.closePopup(setup);
    }
  });

  setupClose.addEventListener('click', function () {
    window.magnificentFunctions.closePopup(setup);
  });

  setupSave.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.magnificentFunctions.ENTER_CODE) {
      window.magnificentFunctions.closePopup(setup);
    }
  });

  setupSave.addEventListener('click', function () {
    window.magnificentFunctions.closePopup(setup);
  });

  userNameInput.addEventListener('invalid', function () {
    if (!userNameInput.validity.valid) {
      if (userNameInput.validity.tooShort) {
        userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
      } else if (userNameInput.validity.tooLong) {
        userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
      } else if (userNameInput.validity.valueMissing) {
        userNameInput.setCustomValidity('Обязательное поле');
      }
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  function debounce(times, deeds) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(function () {
      deeds();
    }, times);
  }

  function paintDress(arrOne) {
    wizardCoat.setAttribute('style', 'fill:' + arrOne);
    window.wizardChanged.coatColor = arrOne;
    debounce(500, window.wizardsCreation.updateWizards);
  }

  function paintBalls(arrOne) {
    wizardFireBalls.setAttribute('style', 'background-color:' + arrOne);
  }

  function paintBody(arrOne) {
    wizardEyes.setAttribute('style', 'fill:' + arrOne);
    window.wizardChanged.eyesColor = arrOne;
    debounce(500, window.wizardsCreation.updateWizards);
  }

  window.colorizeElement(wizardCoat, window.magnificentFunctions.COAT, 6, paintDress);
  window.colorizeElement(wizardFireBalls, FIRE_BALLS, 5, paintBalls);
  window.colorizeElement(wizardEyes, window.magnificentFunctions.EYES, 5, paintBody);

  window.wizardChanged = {
    coatColor: 0,
    eyesColor: 0
  };
})();
