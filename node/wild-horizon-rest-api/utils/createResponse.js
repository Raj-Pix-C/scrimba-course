export default function createRes (statusCode, dataType, responseData, RESPONSE) {
    RESPONSE.writeHead(statusCode, dataType);
    RESPONSE.end(JSON.stringify(responseData));
}