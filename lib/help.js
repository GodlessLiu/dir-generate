const log = require('./log');
const utils = require('./utils');

exports.logHelper = () => {
  log.logNormal('Commands:');
  log.logNormal(utils.gSpace(4), 'Usage:dir-generate -f [yourFilename] [templateName]');
  log.logNormal('Options:');
  log.logNormal(utils.gSpace(4) + '-f' + utils.gSpace(8) + 'the filename you want to generate');
  log.logNormal(utils.gSpace(4) + '' + utils.gSpace(8) + 'the template [vue axios]');
};
