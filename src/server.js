const express = require('express');
const cors = require('cors');

const { structure, getEnvVar } = require('./utils');
const {
  addOneTimeSubscrubers,
  getCurrentLayer,
  address,
  removeLastKey,
  updateCurrentKey,
  addKey,
} = require('./navigate');
const { execCommandByKey } = require('./exec_command');

const runServer = () => {
  const PORT = Number(getEnvVar('PORT')) || 5001;

  const app = express();

  app.use(cors());

  app.use(express.json());
  
  app.get('/status', ({ query: { isFirst } }, res) => {
    if (isFirst) return res.send({
      structure,
      currentLayer: getCurrentLayer(),
      address
    });

    addOneTimeSubscrubers(body => res.send(body));
  });
  
  app.post('/goInside', async ({ body: { key } }, res) => {
    updateCurrentKey(key);

    await new Promise(res => setTimeout(res, 10));

    addKey(key);

    res.send();
  });
  
  app.post('/goBack', (_req, res) => {
    removeLastKey();

    res.send();
  });
  
  app.post('/execute', ({ body: { key } }, res) => {
    const readable = execCommandByKey(key);

    readable.pipe(res);
  });
  
  app.listen(PORT, () => {
    console.log(`SR2 server is running on port: ${PORT}`);
  });
};

module.exports = runServer;
