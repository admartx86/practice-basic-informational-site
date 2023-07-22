const http = require('http');
const fs = require('fs');
const path = require('path');;

const server = http.createServer((req, res) => {
    
    let filePath = '';

    switch (req.url) {
        case '/':
            filePath = 'index.html'
            break;
        case '/about':
            filePath = 'about.html'
            break;
        case '/contact-me':
            filePath = 'contact-me.html'
            break;
        default:
            filePath = '404.html'
    }

    fs.readFile(path.join(__dirname, filePath), (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            return res.end('Internal server error');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });

});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));