const writeLine = require('./write_line');

const renderFromConstant = (linesObj, preprocessor = line => line) => Object.values(linesObj).forEach(line => writeLine(preprocessor(line)));

module.exports = renderFromConstant;
