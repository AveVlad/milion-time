var Time;

$(function() {
  var time;
  return time = new Time;
});

Time = (function() {
  Time.prototype.width = 800;

  Time.prototype.height = 450;

  function Time() {
    this.ctx = this.createCanvas();
  }

  Time.prototype.createCanvas = function() {
    var canvas;
    canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    canvas.id = "time";
    $(".wrapper").append(canvas);
    return canvas.getContext("2d");
  };

  return Time;

})();
