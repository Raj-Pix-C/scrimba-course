function handleQuery(req) {
    const urlObj = new URL(req.url, `http://${req.headers.host}`);

    const queryObj = Object.fromEntries(urlObj.searchParams);

    // console.log('queryObj: ', queryObj);

    if(queryObj === null || Object.keys(queryObj).length === 0)
        return undefined;
    else 
        return queryObj;
}

export default handleQuery;