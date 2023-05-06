const { clear, writeLine, renderManual } = require('./utils');
const { getCurrentLayer } = require('./navigate');

const renderLayer = address => {
  clear();

  renderManual();

  const path = [...address];

  path.pop();

  if (path.length > 0) writeLine(`${path.join('/')}\n`);

  const currentLayer = getCurrentLayer();

  const key = address[address.length - 1];

  const keys = Object.keys(currentLayer);

  const columnWidth = keys.reduce((acc, key) => {
    if (key.length > acc) return key.length;

    return acc;
  }, 0);

  keys.forEach(currentKey => {
    let resultLine = currentKey;

    for (let length = currentKey.length; length <= columnWidth; length++) {
      resultLine = resultLine + ' ';
    }

    writeLine(resultLine, currentKey === key);
  });

  let separator = '';

  for (let length = 0; length <= columnWidth; length++) {
    separator = separator + '-';
  }

  writeLine(separator);

  const nextLayer = currentLayer[key];

  if (Array.isArray(nextLayer) || typeof nextLayer === 'string') return writeLine('Executable command');

  writeLine('Section');
};

module.exports = renderLayer;
