import http from 'node:http';

const PORT = 8001;

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(`<h1>Server is working</h1>`);
});

server.listen(PORT, () => console.log(`server listening on port: ${PORT}`));