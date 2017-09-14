'use strict';
(function () {
  var userSetup = document.querySelector('.setup');
  var OFFSET = 10;

  userSetup.classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    var wizardOneElement = wizardElement.querySelector('.wizard');
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    handleShowHideWizardBag(wizardOneElement, wizard);
    return wizardElement;
  }

  var renderWizardArtifacts = function (wizard) {
    var content = document.createElement('div');

    content.classList.add('wizard-artifacts');
    content.style.display = 'none';
    content.innerHTML = wizard.artifacts.map(function (it) {
      return it.name;
    }).join('<br>');

    return content;
  };

  var handleShowHideWizardBag = function (element, wizard) {
    var artifactsContainer = renderWizardArtifacts(wizard);
    document.body.appendChild(artifactsContainer);
    var onMouseMove = function (evt) {
      artifactsContainer.style.top = evt.pageY + OFFSET + 'px';
      artifactsContainer.style.left = evt.pageX + OFFSET + 'px';
    };

    var onMouseOut = function () {
      artifactsContainer.style.display = 'none';
      element.removeEventListener('mousemove', onMouseMove);
      element.removeEventListener('mouseleave', onMouseOut);
    };

    element.addEventListener('mouseenter', function () {
      artifactsContainer.style.display = 'block';

      element.addEventListener('mousemove', onMouseMove);
      element.addEventListener('mouseleave', onMouseOut);
    });

  };

  function addWizards(wiz) {
    var fragment = document.createDocumentFragment();
    while (similarListElement.firstChild) {
      similarListElement.removeChild(similarListElement.firstChild);
    }
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wiz[i]));
    }
    similarListElement.appendChild(fragment);
    userSetup.querySelector('.setup-similar').classList.remove('hidden');
  }

  var wizards = [];

  function successHandler(data) {
    wizards = data;
    updateWizards();
  }

  function getRank(wizard) {
    var rank = 0;

    if (wizard.colorCoat === window.wizardChanged.coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.wizardChanged.eyesColor) {
      rank += 1;
    }
    return rank;
  }

  function namesComparator(left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }

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

  function updateWizards() {
    addWizards(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  }

  window.wizardsCreation = {
    updateWizards: updateWizards
  };


})();
