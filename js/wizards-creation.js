'use strict';
(function () {
  var userSetup = document.querySelector('.setup');
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  userSetup.classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  }

  function addWizards(wiz) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wiz[i]));
    }
    similarListElement.appendChild(fragment);
    userSetup.querySelector('.setup-similar').classList.remove('hidden');
  }

  var wizards = [];

  var successHandler = function (data) {
    wizards = data;
    window.wizardsCreation.updateWizards();
  };

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === window.wizardChanged.coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.wizardChanged.eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  window.wizardsCreation = {
    updateWizards: function () {
      addWizards(wizards.sort(function (left, right) {
        var rankDiff = getRank(right) - getRank(left);
        if (rankDiff === 0) {
          rankDiff = namesComparator(left.name, right.name);
        }
        return rankDiff;
      }));
    }
  };

  /*window.wizardChanged.onEyesChange = function (color) {
    eyesColor = color;
    console.log(eyesColor);
    updateWizards();
  };

  window.wizardChanged.onCoatChange = function (color) {
    coatColor = color;
    console.log(coatColor);
    updateWizards();
  };*/

  function errorHandler(errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: orange;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '50px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  }

  window.backend.load(successHandler, errorHandler);

  var form = userSetup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      userSetup.classList.add('hidden');
    }, errorHandler);
    evt.preventDefault();
  });

})();
