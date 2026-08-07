let myLeads = new Set();
let lead = "";

const inputBtnEl = document.querySelector('#input-btn');
const delBtnEl = document.querySelector('#del-btn');
const inputEl = document.querySelector('#input-el');
const ulEl = document.querySelector('#ul-el');




function renderLeads(){
    let s = ""
    for(lead of myLeads){
        s += `<li><a href="${lead}" target="_blank">${lead}</a></li>`;
    }
    ulEl.innerHTML += s;
}


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


// program procedural flow starts here



const arr = JSON.parse(localStorage.getItem("myLeads"));

if(arr) {
    myLeads = new Set(arr);
    renderLeads();
}