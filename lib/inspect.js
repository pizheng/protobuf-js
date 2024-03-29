function inspect(obj, indentLevel) {
  if (!indentLevel) indentLevel = 0;
  var indent = '';
  for (var i = 0; i < indentLevel; i++) indent += '  ';

  var ret = '';
  for (var key in obj) {
    var val = obj[key];
    ret += indent + key + ':'; 
    if (typeof(val) == 'object') {
      if (val instanceof Array) {
        ret += "[\n";
        for (var i = 0; i < val.length; i++) {
          ret += indent + '  ' + i + ":\n";
          ret += inspect(val[i], indentLevel + 2) + "\n";
        }
        ret += "]\n";
      }
      else {
        ret += "\n" + inspect(val, indentLevel + 1) + "\n";
      }
    }
    else {
      ret += val + "\n";
    }
  }
  return ret;
}
