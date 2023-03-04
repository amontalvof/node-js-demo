const path = require('node:path');
const fs = require('node:fs');
const zlib = require('node:zlib');

const filePath = path.join(__dirname, '../../../file.txt');
const fileCopyPath = path.join(__dirname, '../../../file-copy.txt');
const fileGzipPath = path.join(__dirname, '../../../file.txt.gz');

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream(filePath, {
    encoding: 'utf-8',
    highWaterMark: 6,
});

readableStream.pipe(gzip).pipe(fs.WriteStream(fileGzipPath));

const writableStream = fs.createWriteStream(fileCopyPath);

readableStream.pipe(writableStream);
