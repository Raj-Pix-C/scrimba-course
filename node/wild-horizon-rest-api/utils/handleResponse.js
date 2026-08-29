
function normalizeValue(value) {
    if (value === null || value === undefined) return '';
    return String(value).trim().toLowerCase();
}

function matchesQuery(item, key, value) {
    const itemValue = item[key];
    const normalizedValue = normalizeValue(value);

    if (typeof itemValue === 'boolean') {
        return itemValue === (normalizedValue === 'true');
    }

    if (typeof itemValue === 'string') {
        return normalizeValue(itemValue) === normalizedValue;
    }

    if (Array.isArray(itemValue)) {  // ai added this but no one will ask for the array fields in query params //
        return itemValue.some(entry => {
            if (typeof entry === 'string') return normalizeValue(entry) === normalizedValue;
            if (typeof entry === 'object' && entry !== null) {
                return Object.values(entry).some(val => normalizeValue(val) === normalizedValue);
            }
            return false;
        });
    }

    return normalizeValue(itemValue) === normalizedValue;
}

function handleRes(dest, queryObj) {
    try {
        const filters = Object.entries(queryObj || {});

        if (filters.length === 0) {
            return { statusCode: 200, res: dest };
        }

        const res = dest.filter(item => filters.every(([key, value]) => matchesQuery(item, key, value)));
        const statusCode = res.length ? 200 : 404;

        if (statusCode === 404) {
            return {
                statusCode,
                res: { error: 'not found', message: 'the requested route does not exist' }
            };
        }

        return { statusCode, res };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            res: { error: 'internal server error', message: 'failed to process request' }
        };
    }
}

export default handleRes;