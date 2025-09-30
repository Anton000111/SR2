let isCommandExecuting = false;

const setCommandExecutionState = (value) => {
  isCommandExecuting = value;
};

const getCommandExecutionState = () => {
  return isCommandExecuting;
};

module.exports = {
  setCommandExecutionState,
  getCommandExecutionState
};
