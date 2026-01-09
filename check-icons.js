const icons = require('simple-icons/icons');
const keys = Object.keys(icons).filter(k => k.startsWith('siA')).sort();
console.log(JSON.stringify(keys, null, 2));
