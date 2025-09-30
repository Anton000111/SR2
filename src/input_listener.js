const { getCharCode, getPostExecutionMode, setPostExecutionMode, getCommandExecutionState, getSkipFirstEnter, setSkipFirstEnter } = require('./utils');
const { getNextPrevByLayer } = require('./navigate');
const { getCurrentProcess } = require('./exec_command');

let inputBuffer = '';

const inputListener = key => {
  const { char, code, specialKey } = getCharCode(key);
  const currentProcess = getCurrentProcess();

  // If a process is running, forward input to it and echo it
  if (currentProcess && currentProcess.stdin && !currentProcess.stdin.destroyed) {
    // Skip the first Enter press that triggered the command execution
    if (getSkipFirstEnter() && code === 13) {
      setSkipFirstEnter(false);
      inputBuffer = ''; // Reset input buffer for new process
      return;
    }
    
    // Handle input before sending to child process
    if (code === 8 || code === 127) { // Backspace (8) or Delete (127)
      if (inputBuffer.length > 0) {
        inputBuffer = inputBuffer.slice(0, -1);
        process.stdout.write('\b \b'); // Move back, write space, move back again
      }
      // Don't send backspace to child process, just remove from our buffer
    } else if (char === '\b') { // Alternative backspace check
      if (inputBuffer.length > 0) {
        inputBuffer = inputBuffer.slice(0, -1);
        process.stdout.write('\b \b'); // Move back, write space, move back again
      }
    } else if (char && char !== '\r' && char !== '\n' && char !== '\b') {
      inputBuffer += char;
      process.stdout.write(char);
      // Don't send character immediately, wait for Enter
    } else if (code === 13) { // Enter key
      // Send the entire input buffer to child process
      if (inputBuffer.length > 0) {
        currentProcess.stdin.write(inputBuffer + '\n');
      } else {
        currentProcess.stdin.write('\n');
      }
      inputBuffer = '';
      process.stdout.write('\n');
    }
    return;
  }

  const { next, prev, goInside, goBack } = getNextPrevByLayer();

  // Handle Enter key in post-execution mode
  if (getPostExecutionMode() && code === 13) {
    setPostExecutionMode(false);
    next();
    return; // Just return to navigation, no action needed
  }

  // Skip navigation keys during post-execution mode
  if (getPostExecutionMode()) {
    return;
  }

  switch (char) {
      case 's':
      case 'S':
        next();
        break;
      case 'w':
      case 'W':
        prev();
        break;
      case 'd':
      case 'D':
        goInside();
        break;
      case 'a':
      case 'A':
        goBack();
        break;
  }

  // Handle arrow keys
  switch (specialKey) {
      case 'down':
        next();
        break;
      case 'up':
        prev();
        break;
      case 'right':
        goInside();
        break;
      case 'left':
        goBack();
        break;
  }
}

module.exports = {
  inputListener
};
