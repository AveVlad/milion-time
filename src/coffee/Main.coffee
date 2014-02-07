$ ->
  time = new Time

class Time
  width: 800
  height: 450
  constructor: ->
    @ctx = @createCanvas()

  createCanvas: ->
    canvas = document.createElement("canvas")
    canvas.width = @width
    canvas.height = @height
    canvas.id = "time"
    $(".wrapper").append(canvas)
    canvas.getContext("2d")