alert = (msg) -> console.log(msg)

class Animal
  constructor: (@name) ->

  move: (meters) ->
    alert @name + " moved #{meters}m."

class Sname extends Animal
  move: ->
    alert "Slithering..."
    super 5

class Horse extends Animal
  move: ->
    alert "Galoping..."
    super 45

sam = new Sname "Sammy the Phyhon"
tom = new Horse "Tommy the Palomino"

sam.move()
tom.move()

