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
    moves: [],
    turnCount: 0

};

let playerB = {
    symbol: 'O',
    moves: [],
    turnCount: 0
};

let turn = true;       // means playerA's turn
let gameStatus = true; // means live game
let occupiedCells = 0;



const board = document.querySelector('.board');
const resultEl = document.querySelector('#result');
const turnEl = document.querySelector('#turn');
const resetEl = document.querySelector('#reset');



function handleTurn(El, cellID) {
    let move = cellID.charAt(4)+cellID.charAt(5);

    El.textContent = turn ? playerA.symbol : playerB.symbol;
    turn ? playerA.moves.push(move) : playerB.moves.push(move);
    turn ? playerA.turnCount++ : playerB.turnCount++;
    occupiedCells++;

}

function winChecker() {

    for(let i = 0; i < winningConditions.length; i++) {
        let str = turn ? playerA.moves.sort().join('') : playerB.moves.sort().join('');

        if(str.includes(winningConditions[i])) {
            console.log(`Player ${turn ? playerA.symbol : playerB.symbol} wins!`);
            resultEl.textContent = `Player ${turn ? playerA.symbol : playerB.symbol} wins!`;
            gameStatus = false;
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
    playerA.moves = [];
    playerB.moves = [];
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
                if(occupiedCells === 9 && gameStatus) {
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