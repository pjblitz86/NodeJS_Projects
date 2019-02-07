const fs = require('fs');
const path = require('path');

// create a folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
  if (err) throw err;
  console.log('Folder created...');
});

// create and write to a file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world', err => {
  if (err) throw err;
  console.log('File written to...');
  // add some more text
  fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love NodeJS', err => {
    if (err) throw err;
    console.log('File added to...');
  });
});

// // Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// // Rename file
// fs.rename(
//   path.join(__dirname, '/test', 'hello.txt'),
//   path.join(__dirname, '/test', 'helloworld.txt'),
//   err => {
//     if (err) throw err;
//     console.log('file renamed..');
//   }
// );
