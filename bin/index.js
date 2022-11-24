#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const makefiles = require('../lib/makefiles.js');
const log = require('../lib/log.js');
const config = require('../config.json');
const editor = require('../lib/editConfig');
// // DIRNAME
// const dir = process.cwd();

// const argv = yargs(hideBin(process.argv)).argv;

// // node bin/index.js -f filename
// const filename = argv.f;

// if (filename && typeof filename !== 'boolean') {
//   const configFiles = config.filesConfig[argv._[0]]
//     ? config.filesConfig[argv._[0]]
//     : config.filesConfig['0'];
//   makefiles.mkFiles(dir, filename, configFiles);
//   log.logSuccess(`文件${filename}创建完成`);
// } else {
//   log.logError('参数输入错误');
// }

// editor.editor();
