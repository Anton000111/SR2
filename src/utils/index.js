const clear = require('./clear');
const structure = require('./structure');
const writeLine = require('./write_line');
const initStdIn = require('./init_std_in');
const getCharCode = require('./get_char_code');
const exitApp = require('./exit_app');
const renderManual = require('./manual');
const renderFromConstant = require('./render_from_constant');
const getEnvVar = require('./getEnvVar');
const postExecutionState = require('./post_execution_state');
const commandExecutionState = require('./command_execution_state');
const skipFirstEnter = require('./skip_first_enter');
const descriptions = require('./descriptions');
const welcome = require('./welcome');
const colors = require('./colors');

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
  ...postExecutionState,
  ...commandExecutionState,
  ...skipFirstEnter,
  ...descriptions,
  ...welcome,
  ...colors,
};
