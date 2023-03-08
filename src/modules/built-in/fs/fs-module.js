const path = require('node:path');
const fs = require('node:fs');

const filePath = path.join(__dirname, '../../../../file.txt');

console.log('First');

const fileContent = fs.readFileSync(filePath, 'utf-8');
console.log(fileContent);

console.log('Second');

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});

console.log('Third');

fs.writeFileSync(filePath, '\nHello World!', { flag: 'a' }); //! flag: 'a' means append

fs.writeFile(filePath, '\nTest', { flag: 'a' }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('File written');
    }
});
