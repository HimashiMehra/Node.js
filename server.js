
const http = require('http');

const about = require('./route/about');
const main = require('./route/main');
const home = require('./route/home');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        return home(req, res);
    }
    else if (req.url === '/about' && req.method === 'GET') {
        return about(req, res);
    }
    else if (req.url === '/main' && req.method === 'GET') {
        return main(req, res);
    }
    else {
        res.statusCode = 404;
        res.end('Route not found');
    }
});

server.listen(5000, () => {
    console.log('Server running!');
    console.log('Home:  http://localhost:5000/');
    console.log('About: http://localhost:5000/about');
    console.log('Main:  http://localhost:5000/main');
});
