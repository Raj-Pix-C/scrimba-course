import getFakeStockData from "./fakeStockAPI.js";


const card0El = document.getElementById('sc0');

let stockData = getFakeStockData();
let lastPrice = stockData.Price;
const orb = [
    "🟢", 
    "🔴", 
    "🟡"
];

function updateStockCard(htmlEl) {
    const index = stockData.Price > lastPrice ? 0 : (stockData.Price < lastPrice ? 1 : 2);

    htmlEl.innerHTML = `
        <p>Name: ${stockData.Name}</p>
        <p>Symbol: ${stockData.Symbol}</p>
        <p>Price: $${stockData.Price}
            ${orb[index]}
        </p>
        <p>Time: ${stockData.Time}</p>
    `;
    // console.log(index);

    lastPrice = stockData.Price;
    stockData = getFakeStockData();
    setTimeout(updateStockCard, 1499, htmlEl);
}

updateStockCard(card0El);