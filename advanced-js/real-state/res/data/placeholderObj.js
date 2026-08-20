import getArea from "../../functions/getArea.js";



export const placeholder_obj = [{
    location: "Anywhere",
    currency: "$",
    price: 100000,
    description: "Placeholder-description",
    rooms : [1,4,9,16,25],
    image : '../res/img/mait-thirl.jpg',
    area: getArea([1,4,9,16,25])
}];
