const getEnvVar = nameOrFlag => {
  const value = process.argv.find(value => value.startsWith(nameOrFlag));

  if (!value) return false;

  return value.split('=')[1] || true;
}

module.exports = getEnvVar;
