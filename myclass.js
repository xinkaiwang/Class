
function Class(funcs, parent) {
  var constructor = function() {
    if (funcs.initialize !== null && typeof funcs.initialize === 'function') {
      funcs.initialize.apply(this, arguments);
    }
    else if (parent)
    {
      parent._constructor.apply(this, arguments);
    }
  };

  var klass = function() {
      klass._constructor.apply(this, arguments);
  };
  klass._constructor = constructor;

  // funcs
  for (name in funcs) {
    if (funcs.hasOwnProperty(name)) {
      klass.prototype[name] = funcs[name];
    }
  }
  // super
  klass.prototype['super'] = function(act, val) {
    if(typeof parent.prototype[act] === 'function') {
      return parent.prototype[act].apply(this, val);
    }
  };
  return klass;
}

module.exports = Class;
