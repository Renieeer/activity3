// Starter data
const settings = {
  darkMode: true,
  notifications: false,
  autoSave: true,
  spellCheck: false,
  grammarCheck: true
};

// Start coding here...



// 1. List all enabled settings as "darkMode: true"
const enabledSettings = Object.entries(settings)
  .filter(([key, value]) => value === true)
  .map(([key, value]) => `${key}: ${value}`);
console.log(enabledSettings); 

// 2. Count how many settings are set to true
const enabledCount = enabledSettings.length;
console.log(`Enabled settings count: ${enabledCount}`);


const filteredEntries = Object.entries(settings)
  .filter(([key, value]) => value === true);

// 4. Rebuild the filtered settings object using Object.fromEntries()
const filteredSettings = Object.fromEntries(filteredEntries);
console.log(filteredSettings); 