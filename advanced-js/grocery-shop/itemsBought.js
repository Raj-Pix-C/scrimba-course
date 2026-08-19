const item = (nm, prc, desc, n) => {
    return {
        name: nm,
        priceInUSD: prc,
        desc: desc,
        units: n
    }
}

export const itemsBought = [
    item("Apples", 1.99, "Fresh red apples", 5),
    item("Bananas", 0.99, "Ripe bananas", 3),
    item("Oranges", 2.49, "Juicy oranges", 4)
];