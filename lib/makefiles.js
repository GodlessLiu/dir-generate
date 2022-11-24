const fs = require('fs');
const path = require('path');
const getTemp = require('./getTemp.js');
const utils = require('./utils.js');
const log = require('./log.js');
exports.mkFiles = (dir, filename, configFiles) => {
  try {
    if (!fs.existsSync(path.resolve(dir, filename))) {
      fs.mkdirSync(path.resolve(dir, filename));
    }
    // ----------------------------------------------------------------
    mkArrayFiles(path.resolve(dir, filename), configFiles);
  } catch (e) {
    log.logError(`文件${filename}已存在`);
  }
};

function mkArrayFiles(parentPath, Files) {
  for (let index = 0; index < Files.length; index++) {
    const file = Files[index];
    if (file.type === 'dir') {
      if (!fs.existsSync(path.resolve(parentPath, file.filename))) {
        fs.mkdirSync(path.resolve(parentPath, file.filename));
      } else {
        log.logWarning(`${file.filename}已存在，为您跳过此文件创建`);
      }
      if (file.children) {
        mkArrayFiles(path.resolve(parentPath, file.filename), file.children);
      }
    } else {
      const temp = file.template ? getTemp.getTemp(file.template) : '';
      if (
        !fs.existsSync(
          path.resolve(
            parentPath,
            file.filename + utils.startWithPoint(file.type),
          ),
        )
      ) {
        fs.writeFileSync(
          path.resolve(
            parentPath,
            file.filename + utils.startWithPoint(file.type),
          ),
          temp,
        );
      } else {
        log.logWarning(
          `${
            file.filename + (file.type ? file.type : '')
          }已存在，为您跳过此文件创建`,
        );
      }
    }
  }
}
