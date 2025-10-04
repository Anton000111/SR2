const green = (text) => `\x1b[32m${text}\x1b[0m`;

const red = (text) => `\x1b[31m${text}\x1b[0m`;

const blue = (text) => `\x1b[34m${text}\x1b[0m`;

const yellow = (text) => `\x1b[33m${text}\x1b[0m`;

module.exports = {
  green,
  red,
  blue,
  yellow,
};

