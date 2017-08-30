'use strict';
(function () {
  var userSetup = document.querySelector('.setup');
  userSetup.classList.remove('hidden');
  userSetup.querySelector('.setup-similar').classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIRE_BALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var ESC_CODE = 27;
  var ENTER_CODE = 13;

  function createWizards() {
    var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var SECOND_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
    var wizards = [];

    for (var i = 0; i < 4; i++) {
      wizards[i] =
        {
          name: FIRST_NAME[countNumber(8)] + ' ' + SECOND_NAME[countNumber(8)],
          coatColor: COAT[countNumber(6)],
          eyesColor: EYES[countNumber(5)]
        };
    }
    return wizards;
  }

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  }

  function addWizards(wiz) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wiz.length; i++) {
      fragment.appendChild(renderWizard(wiz[i]));
    }
    similarListElement.appendChild(fragment);
  }

  addWizards(createWizards());

  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var setupName = setup.querySelector('.setup-user-name');
  var setupSave = document.querySelector('.setup-submit');
  var userNameInput = document.querySelector('.setup-user-name');
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireBalls = document.querySelector('.setup-fireball-wrap');

  function onPopupEscPress(evt) {
    if (evt.target === setupName) {
      evt.stopPropagation();
      return;
    } else {
      if (evt.keyCode === ESC_CODE) {
        closePopup();
      }
    }
  }

  function openPopup() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  }

  function closePopup() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  }

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_CODE) {
      closePopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupSave.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_CODE) {
      closePopup();
    }
  });

  setupSave.addEventListener('click', function () {
    closePopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_CODE) {
      openPopup();
    }
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

  function countNumber(n) {
    return Math.floor(Math.random() * n);
  }

  wizardCoat.addEventListener('click', function () {
    wizardCoat.setAttribute('style', 'fill:' + COAT[countNumber(6)]);
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.setAttribute('style', 'fill:' + EYES[countNumber(5)]);
  });

  wizardFireBalls.addEventListener('click', function () {
    wizardFireBalls.setAttribute('style', 'background-color:' + FIRE_BALLS[countNumber(5)]);
  });

})();
