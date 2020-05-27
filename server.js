const http = require('http');
const fs = require('fs');

const hostname = '0.0.0.0';
const port = 3000;
const index = 'index.html';

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        req.url = '/' + index;
    }
    fs.readFile(__dirname + req.url, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.statusCode = 200;
        res.end(data);
    })
    
});

server.listen(port, hostname, () => {
    console.log('Server running');
});