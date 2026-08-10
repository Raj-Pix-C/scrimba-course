const inpEl = document.querySelector("#ip");
const convBtnEl = document.querySelector("#conv-btn");
const lenEl = document.querySelector("#length");
const volEl = document.querySelector("#volume");
const massEl = document.querySelector("#mass");

let inputVal = 0;



function renderResult(ipv) {
    lenEl.innerHTML = `<h2>Length (Meter/Feet)</h2>
        <p>${ipv} meters = ${(3.281*ipv).toFixed(3)} feet | 
        ${ipv} feet = ${((1/3.281)*ipv).toFixed(3)} meters</p>
    `;

    volEl.innerHTML = `<h2>Volume (Liter/Gallons)</h2>
        <p>${ipv} liters = ${(0.264*ipv).toFixed(3)} gallons | 
        ${ipv} gallons = ${((1/0.264)*ipv).toFixed(3)} liters</p>
    `;

    massEl.innerHTML = `<h2>Mass (Kilograms/Pounds)</h2>
        <p>${ipv} kilograms = ${(2.204*ipv).toFixed(3)} pounds | 
        ${ipv} pounds = ${((1/2.204)*ipv).toFixed(3)} kilograms</p>
    `;
}



inpEl.addEventListener("input", () => {
    inputVal = parseFloat(inpEl.value);
});

convBtnEl.addEventListener("click", () => {
    let lenVal = inputVal * 3.281;
    let volVal = inputVal * 0.264;
    let massVal = inputVal * 2.204;

    renderResult(inputVal);
});

renderResult(NaN);