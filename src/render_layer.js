const { clear, writeLine, renderManual, getDescription } = require('./utils');
const { getCurrentLayer } = require('./navigate');
const { ENTITY_TYPES } = require('./constants');
const colors = require('./utils/colors');

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
    separator = separator + '═';
  }

  writeLine(separator);

  const nextLayer = currentLayer[key];
  
  // Build the path to the current section (excluding the current key)
  const descriptionPath = [...address];
  descriptionPath.pop(); // Remove the current key to get the parent path
  
  const description = getDescription(key, descriptionPath);

  if (Array.isArray(nextLayer) || typeof nextLayer === 'string' || (nextLayer || {}).__type === ENTITY_TYPES.COMMAND) {
    writeLine('Executable command');
    if (description) {
      writeLine('');
      writeLine(colors.yellow(description));
    }
    return;
  }

  writeLine('Section');
  if (description) {
    writeLine('');
    writeLine(colors.yellow(description));
  }
};

module.exports = renderLayer;
