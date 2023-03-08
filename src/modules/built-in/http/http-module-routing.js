const http = require('node:http');

const server = http.createServer((req, res) => {
    const superHero = {
        firstName: 'Bruce',
        lastName: 'Wayne',
    };

    // req.method GET, POST, PUT, DELETE
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            return res.end('Home page');
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            return res.end('About page');
        case '/api':
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(superHero));
        default:
            res.writeHead(404);
            return res.end('Page not found');
    }
});

server.listen(3000, () => {
    console.log('server is running on port 3000');
});
