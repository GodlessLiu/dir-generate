exports.startWithPoint = function startWithPoint(str) {
  return str.startsWith('.') ? str : '.' + str;
};

exports.gString = function gString(str = ' ', num) {
  return str.repeat(num);
};
