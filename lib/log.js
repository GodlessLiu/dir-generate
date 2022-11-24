const chalk = require('chalk');

const LOG = console.log;

exports.logNormal = (mes) => {
  LOG(mes);
};
exports.logError = (mes) => {
  LOG(chalk.bgRed(' ERROR ') + ' ---- ' + chalk.red(mes));
};

exports.logSuccess = (mes) => {
  LOG(chalk.bgGreen(' SUCCESS ') + ' ---- ' + chalk.green(mes));
};

exports.logWarning = (mes) => {
  LOG(chalk.bgYellow(' WARNING ') + ' ---- ' + chalk.yellow(mes));
};
