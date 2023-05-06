const { getCharCode } = require('./utils');
const { getNextPrevByLayer } = require('./navigate');

const inputListener = key => {
  const { char } = getCharCode(key);

  const { next, prev, goInside, goBack } = getNextPrevByLayer();

  switch (char) {
      case 's':
        next();
        break;
      case 'w':
        prev();
        break;
      case 'd':
        goInside();
        break;
      case 'a':
        goBack();
        break;
  };
}

module.exports = inputListener;
