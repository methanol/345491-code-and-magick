'use strict';
(function () {
  var drawCloud = function (ctx) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);
    ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
    ctx.fillRect(100, 10, 420, 270);

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';

    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);
  };

  var getMaxTime = function (times) {
    var max = -1;

    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
      }
    }

    return max;
  };

  var getBarColor = function (name) {
    return (name === 'Вы') ?
      'rgba(255, 0, 0, 1)' :
      'rgba(0, 0, 255, ' + Math.random() + ')';
  };

  var drawHistogramBar = function (startX, startY, endX, endY, color, ctx) {
    ctx.fillStyle = color;
    ctx.fillRect(startX, startY, endX, endY);
  };

  window.renderStatistics = function (ctx, names, times) {
    drawCloud(ctx);

    var maxTime = getMaxTime(times);

    var histogramHeight = 150;
    var step = histogramHeight / maxTime;
    var barWidth = 40;
    var indent = 50;
    var initialX = 145;
    var initialY = 265;
    var bottomYHist = 245;
    var bottomYTime = 235;

    for (var i = 0; i < times.length; i++) {
      var coordinateX = initialX + indent * i + barWidth * i;

      ctx.fillStyle = '#000';
      ctx.fillText(names[i], coordinateX, initialY);
      ctx.fillText(Math.round(times[i]), coordinateX, bottomYTime - times[i] * step);
      var barColor = getBarColor(names[i]);

      drawHistogramBar(coordinateX, bottomYHist - times[i] * step, barWidth, times[i] * step, barColor, ctx);
    }
  };
})();
