'use strict';
(function () {
  var userSetup = document.querySelector('.setup');
  userSetup.classList.remove('hidden');
  userSetup.querySelector('.setup-similar').classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  function createWizards() {
    var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var SECOND_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
    var COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var EYES = ['black', 'red', 'blue', 'yellow', 'green'];
    var wizards = [];

    function countNumber(n) {
      return Math.floor(Math.random() * n);
    }

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
})();
