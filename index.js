#!/usr/bin/env node

const {
  renderLayer,
  initStdIn,
  inputListener: { inputListener },
  exitApp,
  navigate: { address, addSubscrubers },
  execCommand,
} = require('./src');

renderLayer(address);

addSubscrubers(renderLayer);

initStdIn(exitApp);

initStdIn(execCommand);

initStdIn(inputListener);
