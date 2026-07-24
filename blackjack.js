let firstCard = 11;
let secondCard = 1;

let sum = firstCard + secondCard;

let hasBJ = false;
let isAlive = true;

let msg = "";

let strtBtn = document.getElementById("start-btn");
let newCardBtn = document.getElementById("new-card-btn");
let msgEl = document.getElementById("msg-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.querySelector("#sum-el");



function startGame(){
    msgEl.textContent = "Game started! Good luck!🍀";

    firstCard = Math.floor(Math.random() * 13) + 1;
    secondCard = Math.floor(Math.random() * 13) + 1;
    sum = firstCard + secondCard;
    
    cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard;
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20){
        msg = "Do you want to draw a new card?🙂";
    }
    else if (sum === 21){
        msg = "Wohoo! You've got Blackjack!🎉";
        hasBJ = true;
    }
    else{
        msg = "You're out of the game!😭";
        isAlive = false;
    }

    msgEl.textContent = msg + '\n';

    if (hasBJ === true){
        msgEl.textContent += "\nYou win!🏆\nYou can cash out!🏦";
        hasBJ = false;
    }

    if(!isAlive){
        msgEl.textContent += "\nYou lose!💀\nBetter luck next time!🔁";
        isAlive = true;;
    }
}

function newCard(){
    if (isAlive && !hasBJ){
        let newCard = Math.floor(Math.random() * 13) + 1;
        sum += newCard;
        cardsEl.textContent += ", " + newCard;
        sumEl.textContent = "Sum: " + sum;

        if (sum <= 20){
        msg = "Do you want to draw a new card?🙂";
    }
    else if (sum === 21){
        msg = "Wohoo! You've got Blackjack!🎉";
        hasBJ = true;
    }
    else{
        msg = "You're out of the game!😭";
        isAlive = false;
    }

    msgEl.textContent = msg + '\n';
    }
    else{
        msgEl.textContent = "You can't draw a new card!😵‍💫\nStart a New Game";
    }
}





msgEl.textContent = "Want to play a round?";
strtBtn.addEventListener("click", () => startGame());
newCardBtn.addEventListener("click", () => newCard());
