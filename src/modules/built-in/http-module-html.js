const path = require('node:path');
const http = require('node:http');
const fs = require('node:fs');

const htmlPath = path.join(__dirname, '../../../index.html');

const server = http.createServer((req, res) => {
    const name = 'Andy';
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let html = fs.readFileSync(htmlPath, 'utf8');
    html = html.replace('{{name}}', name);
    res.end(html);
    // fs.createReadStream(htmlPath).pipe(res);
});

server.listen(3000, () => {
    console.log('server is running on port 3000');
});
