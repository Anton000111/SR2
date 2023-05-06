const writeLine = (line, isActive) => {
  if (isActive) return console.log('\x1b[47m', '\x1b[30m', line, '\x1b[0m');

  console.log(line);
};

module.exports = writeLine;
