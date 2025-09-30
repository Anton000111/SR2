const MANUAL = {
  KEYS: 'Use W, A, S, D keys or Arrow keys for navigation',
  SECTIONS_USAGE: 'D/→ - go into section, A/← - go back to previous section',
  NAVIGATION: 'W/↑ - previous item, S/↓ - next item',
  EXEC_COMMAND: 'Press Enter to execute command\n',
};

const AFTER_EXECUTION = {
  SEPARATOR: '\n-------------------------------------------\n',
  MANUAL: 'Press Enter to return to navigation'
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
