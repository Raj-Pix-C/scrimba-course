import http from 'node:http'
import getData from './fakedb.js'
import createRes from './utils/createResponse.js'
import handleRes from './utils/handleResponse.js'

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
    else if(request.url.startsWith('/api/continent') && request.method === 'GET') {
        const Continent = request.url.split('/').pop().toLowerCase();

        ({statusCode, res} = handleRes(dest, Continent, 'continent'));
    }
    else if(request.url.startsWith('/api/country') && request.method === 'GET') {
        const Country = request.url.split('/').pop().toLowerCase();

        ({statusCode, res} = handleRes(dest, Country, 'country'));
    }
    else {
        statusCode = 404;
        res = {error: 'not found', message: 'the requested route does not exist'};
    }
    
    createRes(statusCode, type, res, response);
    
});

server.listen(PORT, () => console.log(`server listening on port: ${PORT}`));
