#!/usr/bin/env node

const {
  renderLayer,
  initStdIn,
  inputListener: { inputListener },
  exitApp,
  navigate: { address, addSubscrubers },
  execCommand,
  showWelcomeAnimation,
} = require('./src');

const startApp = async () => {
  // Show welcome animation
  await showWelcomeAnimation();
  
  // Start the main application
  renderLayer(address);

  addSubscrubers(renderLayer);

  initStdIn(exitApp);

  initStdIn(execCommand);

  initStdIn(inputListener);
};

startApp();
