import { itemsBought } from "./itemsBought.js";

const discount = 0.1;

// a satisfying solution to calculate the total cost of items bought, applying a discount if applicable

const totalCost = (itemsBoughtArr, discountPercentage = 0.05, maxDiscount = 10, minimumTotalRequired = 20) => {
    const total = itemsBoughtArr.reduce( (accumulator, currentValue) => {
        return accumulator = accumulator + (currentValue.priceInUSD * currentValue.units);
    }, 0).toFixed(2);

    const calculatedDiscount = Math.round((total >= minimumTotalRequired ? (
        discountPercentage * total > maxDiscount ? maxDiscount : discountPercentage * total
    ) : 0) * 100) / 100;

    console.log(`Total: ${total}, Discount: ${calculatedDiscount}`);

    return total - calculatedDiscount;
};

console.log(totalCost(itemsBought, discount));