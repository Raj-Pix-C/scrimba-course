const tickets = [];

const generateReportBtn = document.querySelector('#gen');
const listing = document.querySelector('#list');
const contEl = document.querySelector('#container');
const inEl = document.querySelector('#in');
const addBtn = document.querySelector('#add');

const loadingArea = document.querySelector('#loading-panel');
const apimsg = document.querySelector('#api-message');



const formattedDate = date => {
    const y = date.getFullYear();
    const m = String(date.getMonth()+1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}
const getDateNdaysAgo = n => {
    const now = new Date();
    now.setDate(now.getDate() - n);
    return formattedDate(now);
}
const dates = {
    startDate: getDateNdaysAgo(3),
    endDate: getDateNdaysAgo(1)
}

const renderTicket = (str) => {
    listing.textContent += str;
}

const fetchReport = data => {
    //
}

const renderReport = outputs => {
    //
}

const fetchStock = async () => {
    try{
        const stockdata = await Promise.all(tickets.map( async (ticker) => {
            const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${dates.startDate}/${dates.endDate}?apiKey=${process.env.POLYGON_API_KEY}`;
            const response = await fetch(url);
            const data = await response.text();
            const status = await response.status;
            if(status === 200){
                apimsg.textContent = 'Creating report...';
                return data;
            }
            else {
                loadingArea.textContent = 'There was an error';
            }
        }));
        fetchReport(stockdata.join(''));
    }
    catch (err) {
        loadingArea.textContent = 'There was an error fetching data...';
        console.error('error: ', err);
        
    }
}

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(inEl.value.length >= 3 && inEl.value.length <= 4){
        generateReportBtn.disabled = false;
        const inputStr = ' ' + inEl.value.toUpperCase() + ' ';
        tickets.push(inputStr);
        inEl.value = '';
        renderTicket(inputStr);
    }
    else{
        alert('ticker length must be 3 or 4');
    }
});

generateReportBtn.addEventListener('click', fetchStock);