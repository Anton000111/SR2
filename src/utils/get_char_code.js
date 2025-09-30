const getCharCode = key => {
  const char = key && key.toString();
  const code = char && char.charCodeAt();

  // Handle arrow keys and special keys
  let specialKey = null;
  
  if (char === '\u001b[A') { // Up arrow
    specialKey = 'up';
  } else if (char === '\u001b[B') { // Down arrow
    specialKey = 'down';
  } else if (char === '\u001b[C') { // Right arrow
    specialKey = 'right';
  } else if (char === '\u001b[D') { // Left arrow
    specialKey = 'left';
  }

  return { char, code, specialKey };
};

module.exports = getCharCode;
