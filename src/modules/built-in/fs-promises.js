const path = require('node:path');
const fs = require('node:fs/promises');

const filePath = path.join(__dirname, '../../../file.txt');

console.log('first');

const readFile = async () => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

readFile();

// fs.readFile(filePath, 'utf-8')
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));

console.log('second');

const writeFile = async () => {
    try {
        await fs.writeFile(filePath, '\nHello World!', { flag: 'a' });
        console.log('File written');
    } catch (error) {
        console.error(error);
    }
};
writeFile();
