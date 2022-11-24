exports.startWithPoint = function startWithPoint(str) {
  return str.startsWith('.') ? str : '.' + str;
};

exports.gSpace = function gSpace(num) {
  return num * ' ';
};
