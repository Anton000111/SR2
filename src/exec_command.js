const { execSync } = require("child_process");
const { getCharCode, clear, renderFromConstant } = require('./utils');
const { AFTER_EXECUTION, ENTITY_TYPES } = require('./constants');
const { getCurrentLayer, address } = require('./navigate');

const { env: { PWD: cwd } } = process;

const exec = command => {
  clear();

  execSync(command, {
    cwd,
    stdio: 'inherit',
  });

  renderFromConstant(AFTER_EXECUTION);
};

const execCommand = key => {
  const { code } = getCharCode(key);

  if (code === 13) {
    const currentLayer = getCurrentLayer();
    const currentKey = address[address.length - 1];

    const runCommand = currentLayer[currentKey];

    if (typeof runCommand === 'string') {
      exec(runCommand);
      return;
    }

    if (Array.isArray(runCommand)) {
      exec(runCommand.join(' && '));
      return;
    }

    if(runCommand.__type === ENTITY_TYPES.COMMAND) {
      if (typeof runCommand.value === 'string') {
        exec(runCommand.value);
      } else if (Array.isArray(runCommand.value)) {
        exec(runCommand.value.join(' && '));
      }
    }
  }
};

module.exports = execCommand;
