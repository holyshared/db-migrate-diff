'use strict';

import chalk from 'chalk';

export default {
  ok(format, ...params) {
    let template = chalk.green(format);
    console.log.apply(null, [ template ].concat(params));
  },
  info(format, ...params) {
    let template = chalk.magenta(format);
    console.log.apply(null, [ template ].concat(params));
  },
  warn(format, ...params) {
    let template = chalk.yellow(format);
    console.log.apply(null, [ template ].concat(params));
  },
  error(format, ...params) {
    let template = chalk.red(format);
    console.log.apply(null, [ template ].concat(params));
  },
  log(format, ...params) {
    console.log.apply(null, [ format ].concat(params));
  }
}
