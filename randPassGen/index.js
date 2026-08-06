let charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
let numbers = "0123456789";


let defaultLength = 16;
let providedLength = defaultLength;
let includeSymbols = true;
let includeNumbers = true;

let generateBtn = document.querySelector("#rand-pass-gen-btn");
let includeSymbolsInput = document.querySelector("#include-symbols");
let includeNumbersInput = document.querySelector("#include-numbers");
let password1 = document.querySelector("#gen1-btn");
let password2 = document.querySelector("#gen2-btn");

let usedIndices = new Set();



function generatePassword(givenLength){
    let len = 0;
    let password = "";
    
    while (len < givenLength){
        password += getRandomChar();
        len++;
    }
    return password;
}

function getRandomChar(){
    let totalCharSet = "";

    if (includeSymbols) {
        totalCharSet += symbols;
    }
    totalCharSet += charSet;
    if (includeNumbers) {
        totalCharSet += numbers;
    }
    
    let index = Math.floor(Math.random() * totalCharSet.length);

    while(usedIndices.has(index)){
        index = Math.floor(Math.random() * totalCharSet.length);
    }
    usedIndices.add(index);

    return totalCharSet.charAt(index);
}
    
generateBtn.addEventListener("click", function(){
    usedIndices.clear();

    const length = document.querySelector("input[name='len']:checked");
    const selectedLength = length ? parseInt(length.value, 10): defaultLength;
    providedLength = selectedLength;
    

    includeSymbols = includeSymbolsInput.checked;
    includeNumbers = includeNumbersInput.checked;

    password1.textContent = generatePassword(providedLength);
    password2.textContent = generatePassword(providedLength);

});

password1.addEventListener("click", function(){
    navigator.clipboard.writeText(password1.textContent).then( () => {
        alert("Password copied to clipboard!");
    }).catch( err => {
        console.error("Failed to copy password: ", err);
    });
});

password2.addEventListener("click", function(){
    navigator.clipboard.writeText(password2.textContent).then( () => {
        alert("Password copied to clipboard!");
    }).catch( err => {
        console.error("Failed to copy password: ", err);
    });
});

/**
 * the program flow starts here
 */

usedIndices.clear();

password1.textContent = "password1";
password2.textContent = "password2";


