#!/usr/bin/env node

const { exec } = require('child_process');
const {
  renderLayer,
  initStdIn,
  inputListener,
  exitApp,
  navigate: { address, addSubscrubers },
  execCommand,
  getEnvVar,
} = require('./src');

const { runServer, getPort } = require('./src/server');

renderLayer(address);

addSubscrubers(renderLayer);

initStdIn(exitApp);

initStdIn(execCommand);

initStdIn(inputListener);

if (getEnvVar('-u')) {
  const portDetection = getEnvVar('UI_PORT');

  const portStr = `SERVER_PORT=${getPort()}` + (portDetection ? ` PORT=${portDetection}` : '');

  exec(`sr2-ui ${portStr}`, error => {
    console.log('\nYou are trying to run web ui interface for sr2');
    console.log('Be sure that you have sr2_ui installed');
    console.log('To install sr2_ui run `npm i -g sr2_ui`\n');
    console.log(error);
  }).stdout.on('data', line => {
    console.log(line);
  });

  runServer();
}
