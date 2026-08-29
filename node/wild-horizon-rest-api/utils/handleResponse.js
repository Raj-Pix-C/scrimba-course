
function handleRes(dest, param, paramType) {
    try {
        let res = dest.filter(obj => obj[paramType].toLowerCase() === param);
        const statusCode = res.length ? 200: 404;
        if(statusCode === 404) {
            res = {error: 'not found', message: 'the requested route does not exist'};
            throw new Error(statusCode + ' ' + res.error + ': ' + res.message);
        }
        return {statusCode, res};
    } catch (error) {
        console.error(error);
    }
}

export default handleRes;