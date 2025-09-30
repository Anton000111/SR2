const { spawn } = require("child_process");
const { getCharCode, clear, renderFromConstant, setPostExecutionMode, getPostExecutionMode, setCommandExecutionState, setSkipFirstEnter } = require('./utils');
const { AFTER_EXECUTION, ENTITY_TYPES } = require('./constants');
const { getCurrentLayer, address } = require('./navigate');

let executed = false;
let currentProcess = null;

const exec = command => {
  if (executed) return;

  clear();

  // Use spawn for interactive commands instead of exec
  const subprocess = spawn('sh', ['-c', command], {
    stdio: ['pipe', 'pipe', 'pipe'],
    env: { ...process.env, TERM: 'xterm-256color' } // Enable proper terminal features
  });

  executed = true;
  currentProcess = subprocess;
  setCommandExecutionState(true);
  setSkipFirstEnter(true);

  subprocess.stdout.setEncoding('utf-8');
  subprocess.stderr.setEncoding('utf-8');

  subprocess.stdout.pipe(process.stdout);
  subprocess.stderr.pipe(process.stderr);

  subprocess.on('close', () => {
    executed = false;
    currentProcess = null;
    setCommandExecutionState(false);
    process.stdin.unpipe(subprocess.stdin);
    renderFromConstant(AFTER_EXECUTION);
    setPostExecutionMode(true);
  });

  subprocess.on('error', (error) => {
    console.error('Process error:', error);
    executed = false;
    currentProcess = null;
    setCommandExecutionState(false);
    process.stdin.unpipe(subprocess.stdin);
    renderFromConstant(AFTER_EXECUTION);
    setPostExecutionMode(true);
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
    // Prevent command execution during post-execution mode
    if (getPostExecutionMode()) {
      return;
    }

    const currentKey = address[address.length - 1];

    execCommandByKey(currentKey);
  }
};

const getCurrentProcess = () => {
  return currentProcess;
};

module.exports = {
  execCommand,
  exec,
  execCommandByKey,
  getCurrentProcess,
};
