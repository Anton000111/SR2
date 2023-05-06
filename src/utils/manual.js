const writeLine = require('./write_line');

const renderManual = () => {
  writeLine('Use W, A, S, D keys for navigation');
  writeLine('Press Enter to run executable command\n');
}

module.exports = renderManual;
