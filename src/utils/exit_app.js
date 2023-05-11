const getCharCode = require('./get_char_code');
const { exec } = require('child_process');

const { exit } = process;

const exitApp = key => {
  const { code } = getCharCode(key);

  if (code === 3) {
    if (process.argv.includes('-u')) {
      exec('kill $(lsof -t -i:5000)');
    }

    exit(0);
  }
}

module.exports = exitApp;
