const fs = require('fs');
//write file
const fileName = "himashi.txt";
const write = fs.writeFileSync(fileName, 'This is my fs.write file', 'utf8');
console.log("Succsefully write!");
//read file
const data = fs.readFileSync(fileName, 'utf8');
console.log(data);
//update file
fs.writeFileSync(fileName, 'This is my fs.writeFileSync file.', 'utf8');
console.log('File updated!')
const updated_file = fs.readFileSync(fileName, 'utf8');
console.log(updated_file);
//delete file
fs.unlinkSync(fileName);
console.log("file deleted");

//asyncronous 
