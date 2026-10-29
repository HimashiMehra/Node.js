const fs = require('fs');
//Synchronous writeFileSync
const fileName = "test.txt";

const writeFile = fs.writeFileSync(
    fileName,
    "Hello Here",
    "utf8"
);
console.log("File Created Successfully!");
const data = fs.readFileSync(fileName, 'utf8');
console.log("File Content:", data);

// Asynchronous writeFile

fs.readFile(fileName,
    'utf8',
    (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    }
);
console.log("next task");