const MANUAL = {
  KEYS: 'Use W, A, S, D keys for navigation',
  SECTIONS_USAGE: 'D - go into section, A - go back to previous section',
  EXEC_COMMAND: 'Press Enter to execute command\n',
};

const AFTER_EXECUTION = {
  SEPARATOR: '\n-------------------------------------------\n',
  MANUAL: 'Use W, A, S, D keys to return to navigation'
};

const ENTITY_TYPES = {
  COMMAND: 'command',
  SECTION: 'section',
};

module.exports = {
  MANUAL,
  AFTER_EXECUTION,
  ENTITY_TYPES,
}
