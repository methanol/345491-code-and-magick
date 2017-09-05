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
          coatColor: window.wiardsCreation.COAT[window.magnificentFunctions.countNumber(6)],
          eyesColor: window.wiardsCreation.EYES[window.magnificentFunctions.countNumber(5)]
        };
    }
    return wizards;
  }

  window.addWizards = function (wizards) {
    createWizards();
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      var wizardElement = similarWizardTemplate.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
      fragment.appendChild(wizardElement);
    }
    similarListElement.appendChild(fragment);
  };

})();
