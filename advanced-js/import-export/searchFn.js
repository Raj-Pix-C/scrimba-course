function getMatchingTripsArr(arr, keyword) {
    return arr.filter(
        (trip) => {
            return trip.description.toLowerCase().includes(keyword.toLowerCase());
        }
    );
}

export default getMatchingTripsArr;