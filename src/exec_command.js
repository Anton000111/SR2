const { execSync } = require("child_process");
const { getCharCode, clear } = require('./utils');
const { getCurrentLayer, address } = require('./navigate');

const { env: { PWD: cwd } } = process;

const exec = command => {
  clear();

  execSync(command, {
    cwd,
    stdio: 'inherit',
  });
};

const execCommand = key => {
  const { code } = getCharCode(key);

  if (code === 13) {
    const currentLayer = getCurrentLayer();
    const currentKey = address[address.length - 1];

    const runCommand = currentLayer[currentKey];

    if (typeof runCommand === 'string') {
      exec(runCommand);
    }

    if (Array.isArray(runCommand)) {
      exec(runCommand.join(' && '));
    }
  }
};

module.exports = execCommand;
