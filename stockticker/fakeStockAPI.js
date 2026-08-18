export default function getFakeStockData() {
    return {
        Name: "QtechAI",
        Symbol: "QTA",
        Price: getRandomPrice(0.01, 3),
        Time : new Date().toLocaleTimeString()
    }
}

function getTime() {
    const timeStamp = new Date();
    return `${timeStamp.getUTCHours().toString().padStart(2, '0')}:${timeStamp.getUTCMinutes().toString().padStart(2, '0')}:${timeStamp.getUTCSeconds().toString().padStart(2, '0')}`;
}

function getRandomPrice(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}