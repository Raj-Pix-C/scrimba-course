const winningConditions = [
    '000102',
    '101112',
    '202122',
    '001020',
    '011121',
    '021222',
    '001122',
    '021120'
];

let playerA = {
    symbol: 'X',
    moves: '',
    turnCount: 0

};

let playerB = {
    symbol: 'O',
    moves: '',
    turnCount: 0
};

let turn = true;       // means playerA's turn
let gameStatue = true; // means live game


const c00 = document.querySelector('#cell00');
const c01 = document.querySelector('#cell01');
const c02 = document.querySelector('#cell02');
const c10 = document.querySelector('#cell10');
const c11 = document.querySelector('#cell11');
const c12 = document.querySelector('#cell12');
const c20 = document.querySelector('#cell20');
const c21 = document.querySelector('#cell21');
const c22 = document.querySelector('#cell22');


const board = document.querySelector('.board');




function handleTurn(El, cellID) {
    let move = cellID.charAt(4)+cellID.charAt(5);

    El.textContent = turn ? playerA.symbol : playerB.symbol;
    turn ? playerA.moves += move : playerB.moves += move;
    turn ? playerA.turnCount++ : playerB.turnCount++;

    turn = !turn;
}

function winChecker() {
    let end = turn ? playerA.turnCount * 2 - 1 : playerB.turnCount * 2 - 1;
    let start = end - 5;
    let window = '';

    for(let i = start; i <= end; i++) {
        window += turn ? playerA.moves.charAt(i) : playerB.moves.charAt(i);
    }

    for(let i = 0; i < winningConditions.length; i++) {
        if(window === winningConditions[i]) {
            console.log(`Player ${turn ? playerA.symbol : playerB.symbol} wins!`);
            gameStatue = false;
            break;
        }
    }

}



board.addEventListener('click', (event) => {
    const clickedCellID = event.target.closest('.cell')?.id;

    if(clickedCellID ) {
        console.log(`clicked cell with id: ${clickedCellID}`);
        const el = document.querySelector(`#${clickedCellID}`);
        console.log(el);
        if(el.textContent === '') {
            handleTurn(el, clickedCellID);

            if(playerA.turnCount >= 3 || playerB.turnCount >= 3) {
                winChecker();
            }
        }
        else {
            console.log('trying to rewrite cell is not permitted!');
        }
    }
    else {
        console.log(`no cell clicked`);
    }
});