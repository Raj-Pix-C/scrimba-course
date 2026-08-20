// const printLogs = (priv, ...names) => {
//     for(name of names) {
//         console.log(`${name} now has ${priv} privileges.`);
//     }
// };

// printLogs('Admin', 'raj', 'nahid', 'rojin');



const containerEl = document.querySelector('#container');

function setElementWithText(el, text, sender, ...receivers) {
    let DOMString = "";

    receivers.forEach( (recipant) => {
        DOMString += `<div>
                        <p>
                            Dear ${recipant.name}<br>${text}<br>Best Wishes,<br>${sender}
                        </p>
                     </div>`;
    });

    el.innerHTML = DOMString;

    console.log(el, DOMString);
}


let text = 'Thank You For All Your Hard Work Throughout The Year.';
let sender = 'Raj';

setElementWithText(
    containerEl,
    text,
    sender,
    {name: 'Nahid'},
    {name: 'Rojin'},
    {name: 'Tajnim'},
    {name: 'Jasmin'}
);