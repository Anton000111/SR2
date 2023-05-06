const { structure } = require('./utils');

const address = [Object.keys(structure)[0]];

const subscrubers = [];

const callAllSubscrubers = () => subscrubers.forEach(subscruber => subscruber(address));

const getCurrentLayer = () => address.reduce((acc, key, index, { length }) => {
  if (index === length - 1) return acc;

  return acc[key];
}, structure);

const addKey = key => {
  address.push(key);
  callAllSubscrubers();
};

const removeLastKey = () => {
  address.pop();
  callAllSubscrubers();
};

const updateCurrentKey = key => {
  address[address.length - 1] = key;
  callAllSubscrubers();
};

const getNextPrevByLayer = () => {
  const currentKey = address[address.length - 1];

  const currentLayer = getCurrentLayer();

  const keys = Object.keys(currentLayer);

  const currentIndex = keys.indexOf(currentKey);

  return {
    next: () => {
      if (currentIndex + 1 === keys.length) return updateCurrentKey(keys[0]);

      updateCurrentKey(keys[currentIndex + 1]);
    },
    prev: () => {
      if (currentIndex - 1 < 0) return updateCurrentKey(keys[keys.length - 1]);

      updateCurrentKey(keys[currentIndex - 1]);
    },
    goInside: () => {
      const nextLayer = currentLayer[currentKey];

      if (Array.isArray(nextLayer) || typeof nextLayer === 'string') return;

      const newKey = Object.keys(nextLayer)[0];

      addKey(newKey);
    },
    goBack: () => {
      if (address.length > 1) {
        removeLastKey();
      }
    },
  }
};

const addSubscrubers = (...args) => args.forEach(subscruber => subscrubers.push(subscruber));

module.exports = {
  address,
  addKey,
  removeLastKey,
  addSubscrubers,
  updateCurrentKey,
  getCurrentLayer,
  getNextPrevByLayer,
};
