let isPostExecution = false;

const setPostExecutionMode = (value) => {
  isPostExecution = value;
};

const getPostExecutionMode = () => {
  return isPostExecution;
};

module.exports = {
  setPostExecutionMode,
  getPostExecutionMode
};
