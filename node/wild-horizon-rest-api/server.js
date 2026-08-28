import http from 'node:http'
import getData from './fakedb.js'

const PORT = 8000;


const server = http.createServer( async (request, response) => {

    const dest = await getData();
    let statusCode;
    const type = {'Content-Type': 'application/json'};
    let res;

    if(request.url === '/api' && request.method === 'GET') {
        statusCode = 200;
        res = dest;
    }
    else {
        statusCode = 404;
        res = {error: 'not found', message: 'the requested route does not exist'};           
    }
    
    response.writeHead(statusCode, type);
    response.end(JSON.stringify(res));
});

server.listen(PORT, () => console.log(`server listening on port: ${PORT}`));
