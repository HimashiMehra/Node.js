const fs = require('fs');
const fileName = 'test.txt';
fs.appendFileSync(
    fileName,
    '\nI am learning Node.js!',
    'utf8'
);
console.log('New Content added successfully');
const data = fs.readFileSync(fileName, 'utf8');
console.log(data);