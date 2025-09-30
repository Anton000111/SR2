const fs = require('fs');
const path = require('path');

let descriptions = null;

const loadDescriptions = () => {
  if (descriptions !== null) {
    return descriptions;
  }

  try {
    const descriptionPath = path.join(process.cwd(), 'sr2.description.json');
    if (fs.existsSync(descriptionPath)) {
      const data = fs.readFileSync(descriptionPath, 'utf8');
      descriptions = JSON.parse(data);
    } else {
      descriptions = {};
    }
  } catch (error) {
    console.error('Error loading descriptions:', error.message);
    descriptions = {};
  }

  return descriptions;
};

const getDescription = (key, path = []) => {
  const desc = loadDescriptions();
  
  // Navigate through nested structure
  let current = desc;
  for (const pathKey of path) {
    if (current && typeof current === 'object' && current[pathKey]) {
      current = current[pathKey];
    } else {
      return null;
    }
  }
  
  // Get description for the current key
  if (current && typeof current === 'object' && current[key]) {
    const value = current[key];
    
    // If the value is a string, it's the description
    if (typeof value === 'string') {
      return value;
    }
    
    // If the value is an object, look for a key with the same name as the section
    if (typeof value === 'object' && value[key]) {
      return value[key];
    }
  }
  
  return null;
};

module.exports = {
  loadDescriptions,
  getDescription
};
