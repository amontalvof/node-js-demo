const cluster = require('node:cluster');
const http = require('node:http');
const OS = require('node:os');

if (cluster.isMaster) {
    console.log('CPUs: ', OS.cpus().length);
    console.log(`Master pid: ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
} else {
    console.log(`Worker pid: ${process.pid} started`);
    const server = http.createServer((req, res) => {
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Home page');
        } else if (req.url === '/slow-page') {
            let j = 0;
            for (let i = 0; i < 6000000000; i++) {
                j++;
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Slow page ${j}`);
        }
    });
    server.listen(8000, () => console.log('Server is running on port 8000'));
}
