const winningConditions = [
    ['00','01','02'],
    ['10','11','12'],
    ['20','21','22'],
    ['00','10','20'],
    ['01','11','21'],
    ['02','12','22'],
    ['00','11','22'],
    ['02','11','20']
];

let playerA = {
    symbol: 'X',
    moves: new Set(),
    turnCount: 0

};

let playerB = {
    symbol: 'O',
    moves: new Set(),
    turnCount: 0

};

let turn = true;       // means playerA's turn
let gameStatus = true; // means live game
let hasWinner = false;
let occupiedCells = 0;

const totalRow = 8;
const totalCol = 3;



const board = document.querySelector('.board');
const resultEl = document.querySelector('#result');
const turnEl = document.querySelector('#turn');
const resetEl = document.querySelector('#reset');



function handleTurn(El, cellID) {
    let move = cellID.charAt(4)+cellID.charAt(5);

    El.textContent = turn ? playerA.symbol : playerB.symbol;
    turn ? playerA.moves.add(move) : playerB.moves.add(move);
    turn ? playerA.turnCount++ : playerB.turnCount++;
    occupiedCells++;

}

function winChecker() {

    let player = turn ? playerA : playerB;

    for(let i = 0; i < totalRow; i++) {
        let matches = 0;
        for(let j = 0; j < totalCol; j++) {
            if(player.moves.has(winningConditions[i][j])) {
                matches++;
            }
        }
        if(matches === totalCol) {
            resultEl.textContent = `Player ${player.symbol} wins!`;
            gameStatus = false;
            hasWinner = true;
            return;
        }

    }

}


function drawChecker() {
    if(occupiedCells === 9) {
        console.log(`Game Draw!`);
        resultEl.textContent = 'Game Draw!';
        gameStatus = false;
    }
}

function resetGame() {
    playerA.moves = new Set();
    playerB.moves = new Set();
    playerA.turnCount = 0;
    playerB.turnCount = 0;
    turn = true;
    gameStatus = true;
    occupiedCells = 0;

    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.textContent = '';
    });

    resetEl.textContent = 'Reset Game';
    resultEl.textContent = 'Game in progress...';
    turnEl.textContent = `Turn: ${playerA.symbol}`;
}


board.addEventListener('click', (event) => {
    const clickedCellID = event.target.closest('.cell')?.id;

    if(gameStatus) {    
        if(clickedCellID ) {
            console.log(`clicked cell with id: ${clickedCellID}`);
            const el = document.querySelector(`#${clickedCellID}`);
            console.log(el);
            if(el.textContent === '') {
                handleTurn(el, clickedCellID);

                if(playerA.turnCount >= 3 || playerB.turnCount >= 3) {
                    winChecker();
                }
                if(occupiedCells === 9 && gameStatus && !hasWinner) {
                    drawChecker();
                }

                turnEl.textContent = `Turn: ${turn ? playerB.symbol : playerA.symbol}`;

                turn = !turn;
            }
            else {
                console.log('trying to rewrite cell is not permitted!');
            }
        }
        else {
            console.log(`no cell clicked`);
        }
    }
});



resetEl.addEventListener('click', resetGame);