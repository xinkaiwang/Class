var Class = require('./myclass.js');

  var constructor = function(a,b) {
    this.a = a;
    this.b = b;
  };

  var Foo = Class({initialize: constructor});

var obj = new Foo(1,2);
var _a = obj.a;
var _b = obj.b;


