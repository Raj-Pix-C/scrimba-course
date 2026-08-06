let myLeads = new Set();
let lead = "";

const inputBtnEl = document.querySelector('#input-btn');
const inputEl = document.querySelector('#input-el');
const ulEl = document.querySelector('#ul-el');

// console.log(inputEl);

inputBtnEl.addEventListener("click", () => {
    if(!myLeads.has(lead) && lead !== ""){
        myLeads.add(lead);
        ulEl.innerHTML += `
            <li>
                <a href="${lead}" target="_blank" >
                    ${lead}
                </a>
            </li>`;

        // // alt way //
        // const li = document.createElement("li");
        // li.textContent = lead;
        // ulEl.append(li);
    }    

    // for(let i = 0; i < myLeads.size; i++){
    //     console.log(Array.from(myLeads)[i]);
    // }

    inputEl.value = "";

});

inputEl.addEventListener("input", () => {
    lead = inputEl.value;
});
