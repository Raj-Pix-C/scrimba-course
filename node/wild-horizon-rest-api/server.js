import http from 'node:http'
import getData from './fakedb.js'
import createRes from './utils/createResponse.js'
import handleRes from './utils/handleResponse.js'
import handleQuery from './utils/handleQueryParams.js'

const PORT = 8000;


const server = http.createServer(async (request, response) => {
    const dest = await getData();
    const type = { 'Content-Type': 'application/json' };

    const queryResult = handleQuery(request);

    if (queryResult !== undefined) {
        const { statusCode, res } = handleRes(dest, queryResult);
        createRes(statusCode, type, res, response);
        return;
    }

    if (request.url === '/api' && request.method === 'GET') {
        createRes(200, type, dest, response);
        return;
    }

    if (request.url.startsWith('/api/continent') && request.method === 'GET') {
        const Continent = request.url.split('/').pop().toLowerCase();
        const { statusCode, res } = handleRes(dest, { continent: Continent });
        createRes(statusCode, type, res, response);
        return;
    }

    if (request.url.startsWith('/api/country') && request.method === 'GET') {
        const Country = request.url.split('/').pop().toLowerCase();
        const { statusCode, res } = handleRes(dest, { country: Country });
        createRes(statusCode, type, res, response);
        return;
    }

    if (request.url.startsWith('/api/is_open_to_public') && request.method === 'GET') {
        const boolStr = request.url.split('/').pop().toLowerCase();
        const flag = boolStr === 'true' ? true : (boolStr === 'false' ? false : undefined);
        if(flag === undefined) {
            createRes(404, type, { error: 'not found', message: 'the requested route does not exist' }, response);
            return;
        }
        const { statusCode, res } = handleRes(dest, { is_open_to_public: flag});
        createRes(statusCode, type, res, response);
        return;
    }

    createRes(404, type, { error: 'not found', message: 'the requested route does not exist' }, response);
});

server.listen(PORT, () => console.log(`server listening on port: ${PORT}`));
