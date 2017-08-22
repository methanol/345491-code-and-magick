'use strict';
(function () {
  window.renderStatistics = function (ctx, names, times) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; // black;
    ctx.fillRect(110, 20, 420, 270);
    ctx.fillStyle = 'rgba(256, 256, 256, 1.0)'; // white;
    ctx.fillRect(100, 10, 420, 270);

    ctx.fillStyle = '#000'; // black;
    ctx.font = '16px PT Mono';

    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);

    var max = -1;

    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
      }
    }

    var barHeigth = 150; // px;
    var step = barHeigth / (max - 0); // px;

    var histogramWidth = 40; // px;
    var indent = 50;
    var initialX = 145;
    var initialY = 265;

    for (i = 0; i < times.length; i++) {
      ctx.fillText(names[i], initialX + indent * i + histogramWidth * i, initialY);
      ctx.fillText(Math.round(times[i]), initialX + indent * i + histogramWidth * i, 235 - times[i] * step);
    }

    for (i = 0; i < times.length; i++) {
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        var randomBlue = Math.random();
        ctx.fillStyle = 'rgba(0, 0, 255,' + randomBlue + ')';
      }
      ctx.fillRect(initialX + indent * i + histogramWidth * i, 245 - times[i] * step, histogramWidth, times[i] * step);
    }
  };
})();
