// ----------------------------------------------------------------------------- //
// global variables begin
// ----------------------------------------------------------------------------- //

let myLeads = new Set();
let lead = "";
// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ];

const inputBtnEl = document.querySelector('#input-btn');
const tabBtnEl = document.querySelector("#tab-btn");
const delBtnEl = document.querySelector('#del-btn');
const inputEl = document.querySelector('#input-el');
const ulEl = document.querySelector('#ul-el');


// ----------------------------------------------------------------------------- //
// global variables end
// ----------------------------------------------------------------------------- //



// ----------------------------------------------------------------------------- //
// functions
// ----------------------------------------------------------------------------- //

function renderLeads(myLeads){
    let s = ""
    for(lead of myLeads){
        s += `<li><a href="${lead}" target="_blank">${lead}</a></li>`;
    }
    ulEl.innerHTML += s;
}



// ----------------------------------------------------------------------------- //
// functions end
// ----------------------------------------------------------------------------- //



// ----------------------------------------------------------------------------- //
// event listeners
// ----------------------------------------------------------------------------- //

inputBtnEl.addEventListener("click", () => {
    if(!myLeads.has(lead) && lead !== "") {
        // store leads
        myLeads.add(lead);
        localStorage.setItem("myLeads", JSON.stringify(Array.from(myLeads)));
            
        // render new leads
        ulEl.innerHTML += `
            <li>
                <a href="${lead}" target="_blank" >
                    ${lead}
                </a>
            </li>`;

    }    


    inputEl.value = "";

});


inputEl.addEventListener("input", () => {
    lead = inputEl.value;
});


delBtnEl.addEventListener("dblclick", () => {
    myLeads.clear();
    localStorage.removeItem("myLeads");
    ulEl.innerHTML = "";
});

tabBtnEl.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if(tabs.length && !myLeads.has(tabs[0].url) && tabs[0].url !== "") {
            myLeads.add(tabs[0].url);
            localStorage.setItem("myLeads", JSON.stringify(Array.from(myLeads)));
            ulEl.innerHTML += `
            <li>
                <a href="${tabs[0].url}" target="_blank">
                    ${tabs[0].url}
                </a>
            </li>`;
        }
    });
});


// ----------------------------------------------------------------------------- //
// event listeners end
// ----------------------------------------------------------------------------- //



// ----------------------------------------------------------------------------- //
// program procedural flow starts here
// ----------------------------------------------------------------------------- //



const arr = JSON.parse(localStorage.getItem("myLeads")); 
// This is and local storage key with value of an array of leads. 
// If it is not null, then we will render the leads on the page.

if(arr) {
    myLeads = new Set(arr);
    renderLeads(myLeads);
}

// ----------------------------------------------------------------------------- //
// program procedural flow ends here
// ----------------------------------------------------------------------------- //
