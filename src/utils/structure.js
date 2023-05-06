const { PWD: path_to_folder } = process.env;

const structure = require(`${path_to_folder}/sr2.json`);

module.exports = structure;