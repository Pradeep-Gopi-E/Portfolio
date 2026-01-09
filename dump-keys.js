const fs = require('fs');
const icons = require('simple-icons/icons');
fs.writeFileSync('keys.txt', JSON.stringify(Object.keys(icons), null, 2));
console.log('Done');
