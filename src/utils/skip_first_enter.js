let skipFirstEnter = false;

const setSkipFirstEnter = (value) => {
  skipFirstEnter = value;
};

const getSkipFirstEnter = () => {
  return skipFirstEnter;
};

module.exports = {
  setSkipFirstEnter,
  getSkipFirstEnter
};
