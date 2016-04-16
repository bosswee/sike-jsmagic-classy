const Class = function(arg) {
  var f = arg.initialize || function() {
  };
  for(a in arg) {
    if(a != 'initialize') {
      f.prototype[a] = arg[a];
    }
  }
  return f;
};

module.exports = Class;
