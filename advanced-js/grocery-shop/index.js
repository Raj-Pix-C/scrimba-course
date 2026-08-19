import { itemsBought } from "./itemsBought.js";

const totalCost = (itemsBoughtArr) => {
    return itemsBoughtArr.reduce( (accumulator, currentValue) => {
        return accumulator = accumulator + (currentValue.priceInUSD * currentValue.units);
    }, 0);
};

console.log(totalCost(itemsBought));