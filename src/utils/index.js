const clear = require('./clear');
const structure = require('./structure');
const writeLine = require('./write_line');
const initStdIn = require('./init_std_in');
const getCharCode = require('./get_char_code');
const exitApp = require('./exit_app');
const renderManual = require('./manual');
const renderFromConstant = require('./render_from_constant');
const getEnvVar = require('./getEnvVar');

module.exports = {
  clear,
  ...structure,
  writeLine,
  initStdIn,
  getCharCode,
  exitApp,
  renderManual,
  renderFromConstant,
  getEnvVar,
};
