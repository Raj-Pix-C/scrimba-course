import getArea from "../../functions/getArea.js";


const property_obj = (loc, curen, prc, desc, roomsArr, img) => {
    return {
        location: loc,
        currency: curen,
        price: prc,
        description: desc,
        rooms : roomsArr,
        image : img,
        area: getArea(roomsArr),
    }
}


export const propertiesArr = [
    property_obj(
        'Lauder, Scottish Borders, TD2 6RU.',
        '&pound;',
        450000,
        'A beautiful house in the Scottish Borders.',
        [12, 14, 9, 16, 25],
        '../res/img/mait-thirl.jpg'
    ),
    property_obj(
        'Hoghton, nr. Blackburn, Lancashire.',
        '&pound;',
        320000,
        'A beautiful house in Lancashire.',
        [9, 24, 19, 16, 25],
        '../res/img/uk48658.jpg'
    ),
    property_obj(
        'Kemnay, Moray, Aberdeenshire.',
        '&pound;',
        250000,
        'A beautiful house in Aberdeenshire.',
        [12, 14, 18, 20, 24],
        '../res/img/1102923.jpg'
    ),
    property_obj(
        'Glenshee, nr. Blairgowrie, Perthshire, PH10 7LP',
        '&pound;',
        350000,
        'A beautiful house in Perthshire.',
        [11, 24, 9, 12, 25],
        '../res/img/uk7072.jpg'
    ),
    property_obj(
        'Cupar, Fife, KY15 4QP.',
        '&pound;',
        400000,
        'A beautiful house in Fife.',
        [13, 14, 25, 16, 25],
        '../res/img/birkhill.jpg'
    ),
];