const log = require('./log');
const chalk = require('chalk');
const utils = require('./utils');
const config = require('../config.json');
exports.logHelper = () => {
  log.logNormal('Commands:');
  log.logNormal(utils.gString(4), 'Usage:dir-generate -f [yourFilename] [templateName]');
  log.logNormal('Options:');
  log.logNormal(utils.gString(4) + '-f' + utils.gString(8) + 'the filename you want to generate');
  log.logNormal(utils.gString(4) + '' + utils.gString(8) + 'the template [vue axios]');
};
const logTemp = (files, deep = 1) => {
  const keys = Object.keys(files);
  for (let j of keys) {
    console.log(chalk.yellow(j));
    if (files[j].length) {
      for (let index = 0; index < files[j].length; index++) {
        const c = files[j][index];
        console.log(utils.gString(' ', deep * 2) + c.filename);
        if (c.children) {
          logTemp(c.children, deep++);
        }
      }
    } else {
      console.log(utils.gString(' ', deep * 2) + chalk.blue('文件夹为空'));
    }
  }
};

exports.logTemplate = logTemp;
