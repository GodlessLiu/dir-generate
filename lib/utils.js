exports.startWithPoint = function startWithPoint(str) {
  return str.startsWith('.') ? str : '.' + str;
};

exports.gString = function gString(num, str = ' ') {
  return str.repeat(num);
};
