var Class = require("./myclass");

var Animal = Class({
  constructor: function(name) {
    this.name = name;
  },
  move: function(meters) {
    alert(this.name + "moved "+meters + "m.");
  }
});

