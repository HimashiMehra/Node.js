//fs/readfile()+(err,data)->callback-based approch
const fs = require('node:fs');
const fileName = 'async.txt'
fs.writeFile(fileName, 'THis is async file', 'utf8', (err) => {
    if (err)
        return
    console.log(err.message);
    console.log("File created");
})
console.log("hi")

//fs/promises + async/await → Promise-based approach.

const fs = require('node:fs/promises');

async function crud() {
    try {
        // CREATE
        await fs.writeFile('student.txt', 'My name is Himashi');
        console.log('File created!');

        // READ
        const data = await fs.readFile('student.txt', 'utf8');
        console.log('File data:', data);

        // UPDATE
        await fs.writeFile('student.txt', 'I am a BTech CSE student');
        console.log('File updated!');

        // APPEND
        await fs.appendFile('student.txt', '\nI am learning Node.js');

        // READ UPDATED DATA
        const updatedData = await fs.readFile('student.txt', 'utf8');
        console.log('Updated data:', updatedData);

        // DELETE
        await fs.unlink('student.txt');
        console.log('File deleted!');

    } catch (err) {
        console.log(err.message);
    }
}

crud();
