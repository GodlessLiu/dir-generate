const fs = require('fs');
const path = require('path');

// get current directory

exports.getTemp = function (type) {
  return fs.readFileSync(path.resolve(__dirname, 'templates', `.${type}.txt`), 'utf8');
};
