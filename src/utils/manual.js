const { MANUAL } = require('../constants');
const renderFromConstant = require('./render_from_constant');

const renderManual = () => {
  renderFromConstant(MANUAL);
}

module.exports = renderManual;
