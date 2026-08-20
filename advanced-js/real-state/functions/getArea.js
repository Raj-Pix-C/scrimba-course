const getArea = (rooms) => {
            const area = rooms.reduce( (accumulator, currentValue) => {
                return accumulator = accumulator + currentValue;
            }, 0 );
            return area;
};

export default getArea;