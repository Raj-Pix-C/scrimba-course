let myLeads = new Set();
let lead = "";

const inputBtnEl = document.querySelector('#input-btn');
const inputEl = document.querySelector('#input-el');
const ulEl = document.querySelector('#ul-el');

// console.log(inputEl);

inputBtnEl.addEventListener("click", () => {
    if(!myLeads.has(lead) && lead !== ""){
        myLeads.add(lead);
        // ulEl.innerHTML += `<li>${lead}</li>`;

        // // alt way //
        const li = document.createElement("li");
        li.textContent = lead;
        ulEl.append(li);
    }    
    console.log(myLeads);

    // for(let i = 0; i < myLeads.size; i++){
    //     console.log(Array.from(myLeads)[i]);
    // }

});

inputEl.addEventListener("input", () => {
    lead = inputEl.value;
});
