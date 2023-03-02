const path = require('node:path');
const fs = require('node:fs');

const filePath = path.join(__dirname, '../../../file.txt');
const fileCopyPath = path.join(__dirname, '../../../file-copy.txt');

const readableStream = fs.createReadStream(filePath, {
    encoding: 'utf-8',
    highWaterMark: 6,
});

const writableStream = fs.createWriteStream(fileCopyPath);

readableStream.on('data', (chunk) => {
    console.log(chunk);
    writableStream.write(chunk);
});
