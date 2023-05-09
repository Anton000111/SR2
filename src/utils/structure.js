const { PWD: path_to_folder } = process.env;

const structure = require(`${path_to_folder}/sr2.json`);

const structureWithoutMeta = Object.keys(structure)
    .filter(key => !key.startsWith('__'))
    .reduce((acc, key) => {
      acc[key] = structure[key];

      return acc;
    }, {});

module.exports = {
  structure,
  structureWithoutMeta,
};