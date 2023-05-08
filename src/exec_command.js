const { exec: execChild } = require("child_process");
const { getCharCode, clear, renderFromConstant } = require('./utils');
const { AFTER_EXECUTION, ENTITY_TYPES } = require('./constants');
const { getCurrentLayer, address } = require('./navigate');

const consoleListeners = [];

const exec = command => {
  clear();

  const subprocess = execChild(command);

  subprocess.stdout.setEncoding('utf-8');

  subprocess.stdout.on('data', chunk => {
    console.log(chunk);

    while(consoleListeners.length) {
      consoleListeners[consoleListeners.length - 1]({ data: chunk, isClosed: false });
      consoleListeners.pop();
    }
  });

  subprocess.on('close', () => {
    renderFromConstant(AFTER_EXECUTION);

    while(consoleListeners.length) {
      consoleListeners[consoleListeners.length - 1]({ data: '', isClosed: true });
      consoleListeners.pop();
    }
  });
};

const execCommandByKey = key => {
  const currentLayer = getCurrentLayer();
  const runCommand = currentLayer[key];

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
  consoleListeners,
};
