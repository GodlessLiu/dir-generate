const log = require('./log');
const utils = require('./utils');
const config = require('../config.json');
exports.logHelper = () => {
  log.logNormal('Commands:');
  log.logNormal(utils.gString(4), 'Usage:dir-generate -f [yourFilename] [templateName]');
  log.logNormal('Options:');
  log.logNormal(utils.gString(4) + '-f' + utils.gString(8) + 'the filename you want to generate');
  log.logNormal(utils.gString(4) + '' + utils.gString(8) + 'the template [vue axios]');
};

exports.logTemplate = () => {
  const c = config.filesConfig;
  for (let index = 0; index < c.length; index++) {
    console.log(c[index]);
  }
};

this.logTemplate();
