const { MANUAL } = require('../constants');
const renderFromConstant = require('./render_from_constant');
const colors = require('./colors');

const renderManual = () => {
  renderFromConstant(MANUAL, colors.blue);
}

module.exports = renderManual;
