var fillArray = function (arrayLength) {
  var _array = [];
  for (var i = 0; i < arrayLength; i++) {
    _array[i] = 0;
  }
  return _array;
};

var overwriteArray = function (src, dest) {
  for (var i = 0; i < src.length; i++) {
    dest[i] = src[i];
  }
  return dest;
};
