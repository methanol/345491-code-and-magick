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
    var wizards = [];

    for (var i = 0; i < 4; i++) {
      wizards[i] =
        {
          name: FIRST_NAME[window.magnificentFunctions.countNumber(8)] + ' ' + SECOND_NAME[window.magnificentFunctions.countNumber(8)],
          coatColor: window.magnificentFunctions.COAT[window.magnificentFunctions.countNumber(6)],
          eyesColor: window.magnificentFunctions.EYES[window.magnificentFunctions.countNumber(5)]
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
