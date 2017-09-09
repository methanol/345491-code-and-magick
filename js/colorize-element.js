'use strict';
(function () {
  window.colorizeElement = function (evt, arr, n, instruction) {
    evt.addEventListener('click', function () {
      var arrOne = arr[window.magnificentFunctions.countNumber(n)];
      instruction(arrOne);
    });
  };
})();
