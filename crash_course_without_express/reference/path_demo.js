const path = require('path');

// Base file name
console.log(path.basename(__filename));

// directory name
console.log(path.basename(__dirname));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// concatenate paths
// ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));
