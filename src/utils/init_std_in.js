const stdin = process.openStdin();
stdin.setRawMode(true);

const initStdIn = listener => stdin.addListener("data", listener);

module.exports = initStdIn;
