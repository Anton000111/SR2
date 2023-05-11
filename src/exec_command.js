const { exec: execChild } = require("child_process");
const { getCharCode, clear, renderFromConstant } = require('./utils');
const { AFTER_EXECUTION, ENTITY_TYPES } = require('./constants');
const { getCurrentLayer, address } = require('./navigate');

let executed = false;

const exec = command => {
  if (executed) return;

  clear();

  const subprocess = execChild(command);

  executed = true;

  subprocess.stdout.setEncoding('utf-8');

  subprocess.stdout.on('data', chunk => {
    console.log(chunk);
  });

  subprocess.on('close', () => {
    executed = false;
    renderFromConstant(AFTER_EXECUTION);
  });

  return subprocess.stdout;
};

const execCommandByKey = key => {
  const currentLayer = getCurrentLayer();
  const runCommand = currentLayer[key];

  if (typeof runCommand === 'string') {
    return exec(runCommand);
  }

  if (Array.isArray(runCommand)) {
    return exec(runCommand.join(' && '));;
  }

  if(runCommand.__type === ENTITY_TYPES.COMMAND) {
    if (typeof runCommand.value === 'string') {
      return exec(runCommand.value);
    } else if (Array.isArray(runCommand.value)) {
      return exec(runCommand.value.join(' && '));
    }
  }
};

const execCommand = key => {
  const { code } = getCharCode(key);

  if (code === 13) {
    const currentKey = address[address.length - 1];

    execCommandByKey(currentKey);
  }
};

module.exports = {
  execCommand,
  exec,
  execCommandByKey,
};
