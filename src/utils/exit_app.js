const getCharCode = require('./get_char_code');

const { exit } = process;

const exitApp = key => {
  const { code } = getCharCode(key);

  if (code === 3) exit(0);
}

module.exports = exitApp;
