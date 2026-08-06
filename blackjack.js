let cards = [];
let max = 13;
const min = 1;
let sum = 0;

let hasBJ = false;
let isAlive = true;

let msg = "";

let strtBtn = document.getElementById("start-btn");
let newCardBtn = document.getElementById("new-card-btn");
let msgEl = document.getElementById("msg-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.querySelector("#sum-el");
let playerEl = document.querySelector("#player");

let playerChips = 0;
let playerName = "Raj";

let playerObj = {
    name: playerName,
    chips: playerChips,

    greetPlayer: function(){
        return "Welcome, " + this.name + "! You have $" + this.chips + " chips.";
    },

    addWinnings: function(amount){
        this.chips += amount*2;
    },

    updateChips: function(amount){
        playerEl.textContent = "You have $" + this.chips + " chips.";
    }
};

playerEl.textContent = playerObj.greetPlayer();



function startGame(){
    resetGame();

    let firstCard = getRand();
    let secondCard = getRand();
    sum = firstCard + secondCard;

    cards.push(firstCard);
    cards.push(secondCard);
    
    cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1];
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20){
        msg = "Do you want to draw a new card?";
    }
    else if (sum === 21){
        msg = "You've got Blackjack!\nYou win!";
        hasBJ = true;
        playerObj.addWinnings(10);
        playerObj.updateChips();
    }
    else{
        msg = "You're out of the game!\nYou lose!";    
        isAlive = false;
    }

    msgEl.textContent = msg + '\n';
// console.log(cards);
}

function getRand(){
    let newCard = Math.floor(Math.random() * (max - min + 1)) + min;
    if(newCard == 1) return 11;
    else if(newCard >= 10) return 10;
    else return newCard;
}

function newCard(){
    if (isAlive && !hasBJ){
        let newCard = getRand();
        cards.push(newCard);
        sum += cards[cards.length - 1];
        cardsEl.textContent += ", " + cards[cards.length - 1];
        sumEl.textContent = "Sum: " + sum;

        if (sum <= 20){
                msg = "Do you want to draw a new card?";
            }
        else if (sum === 21){
            msg = "You've got Blackjack!\nYou win!";
            hasBJ = true;
            playerObj.addWinnings(10);
            playerObj.updateChips();
        }
        else{
            msg = "You're out of the game!\nYou lose!";
            isAlive = false;
        }

        msgEl.textContent = msg + '\n';
        console.log(cards);
    }
    else{
        msgEl.textContent = "You can't draw a new card!\nStart a New Game";
    }
    
}

function resetGame(){
    cards = [];

    sum = 0;

    hasBJ = false;
    isAlive = true;

    msg = "";

    cardsEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: ";

    msgEl.textContent = "Want to play a round?";
    console.clear();
}



msgEl.textContent = "Want to play a round?";
strtBtn.addEventListener("click", () => startGame());
newCardBtn.addEventListener("click", () => newCard());

 






// The following code is not related to the blackjack game, 
// but it seems to be a personal profile or resume information.


const myExperience = [
    "Frontend Developer at Luminous Circle",
    "System Administrator at Luminous Circle"
];

const myEducation = [
    "Bachelor of Science in Computer Science and Engineering",
    "Higher Secondary Certificate",
    "Secondary School Certificate"
]

const myInstitutes = [
    "Hajee Mohammad Danesh Science and Technology University",
    "Gangachara Government College",
    "Rangpur Zilla School"
]

const technicalSkills = {
    Languages: [
        "C/C++",
        "Java",
        "Python",
        "JavaScript"
    ],
    Web: [
        "HTML",
        "CSS"
    ],
    Databases: [
        "MySQL",
        "MongoDB"
    ],
    Tools: [
        "Git",
        "GitHub",
        "GitHub Copilot",
        "Claude",
        "Ollama"
    ],
    OperatingSystems: [
        "Linux",
        "Windows"
    ],
    ArtificialIntelligence:[
        "Prompt Engineering",
        "AI-Assisted Development"
    ]
};

const mySoftSkills = [
    "Leadership",
    "Teamwork",
    "Critical Thinking",
    "Problem Solving",
    "Conflict Resolution",
    "Communication",
    "Time Management",
    "Adaptability",
    "Creativity",
    "Continuous Learning"
]



// person = {
//     name: "raj",
//     age: 25,
//     country: "BD",

//     logdata: function(){
//         console.log(`${this.name} is ${this.age} years old and lives in ${this.country}\n\n\nbleugh`);
//     }
// };

// let ticket = {
//     discountTxt: "",
//     addDiscount: function(Person){
//         if(Person.age < 6){
//             this.discountTxt = "Free";
//         }
//         else if(Person.age >= 6 && Person.age < 18){
//             this.discountTxt = "Child Discount";
//         }
//         else if(Person.age >= 18 && Person.age < 27){
//             this.discountTxt = "Student Discount";
//         }
//         else if(Person.age >= 27 && Person.age < 67){
//             this.discountTxt = "Full price";
//         }
//         else{
//             this.discountTxt = "Senior Citizen Discount";
//         }

//         console.log(`Ticket for ${Person.name} (${Person.age} years old): ${this.discountTxt}`);
//     }
// }

// ticket.addDiscount(person);


/** rock paper scissors */

// let throwHands = ["rock", "paper", "scissors"];

// let throwRandHand = function(){
//     let i = Math.floor(Math.random()*3);
//     return throwHands[i];
// }

// const myThrow = throwRandHand();

// const computerThrow = throwRandHand();
// console.log(myThrow);
// console.log(computerThrow);

// if(myThrow === computerThrow){
//     console.log("It's a tie!");
// }
// else if((myThrow === "rock" && computerThrow === "scissors") || 
//         (myThrow === "paper" && computerThrow === "rock") || 
//         (myThrow === "scissors" && computerThrow === "paper")){
//     console.log("You win!");
// }
// else{
//     console.log("You lose!");
// }




let fruits = ["🍎", '🍊',"🍎", "🍎", "🍎", '🍊'];
let appleShelf = [];
let orangeShelf = [];

for(let i = 0;i < fruits.length;i++){
    if(fruits[i] === "🍎"){
        appleShelf.push([fruits[i], i]);
    }
    else{
        orangeShelf.push([fruits[i], i]);
    }
}

console.log("Apple Shelf: ", appleShelf);
console.log("Orange Shelf: ", orangeShelf);