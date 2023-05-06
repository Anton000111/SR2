const writeLine = require('./write_line');

const renderFromConstant = (linesObj) => Object.values(linesObj).forEach(line => writeLine(line));

module.exports = renderFromConstant;
