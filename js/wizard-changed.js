'use strict';
(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var setupSave = document.querySelector('.setup-submit');
  var userNameInput = document.querySelector('.setup-user-name');
  var setupName = document.querySelector('.setup-user-name');

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

  /* wizardCoat.addEventListener('click', function () {
    wizardCoat.setAttribute('style', 'fill:' + window.magnificentFunctions.COAT[window.magnificentFunctions.countNumber(6)]);
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.setAttribute('style', 'fill:' + window.magnificentFunctions.EYES[window.magnificentFunctions.countNumber(5)]);
  });

  wizardFireBalls.addEventListener('click', function () {
    wizardFireBalls.setAttribute('style', 'background-color:' + window.magnificentFunctions.FIRE_BALLS[window.magnificentFunctions.countNumber(5)]);
  });*/

  window.wizardChanged = {
    colorizeElement: function (wizardThing) {
      wizardThing.addEventListener('click', function () {
        if (typeof window.wizardChanged.callBack === 'function') {
          window.wizardChanged.callBack();
        }
      });
    },
    callBack: null
  };
})();
