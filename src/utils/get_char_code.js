const getCharCode = key => {
  const char = key && key.toString();
  const code = char && char.charCodeAt();

  return { char, code };
};

module.exports = getCharCode;
