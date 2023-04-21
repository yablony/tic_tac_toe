var grid = document.querySelector('section');
var div = document.querySelectorAll('div');
var results = document.querySelector('h2');
var restartButton = document.querySelector('#restart');
var rounds = document.querySelector('.rounds');
var xWon = document.querySelector('.x-wins');
var oWon = document.querySelector('.o-wins');
var oWins = 0;
var xWins = 0;

function gameTurns(event) {
    var square = event.target;
    var crossSquare = document.querySelectorAll('div.cross');
    var noughtSquare = document.querySelectorAll('div.nought');

    if (square.tagName === 'DIV' && square.className === '') {
        if (crossSquare.length > noughtSquare.length) {
            square.classList.add('nought');
        } else {
            square.classList.add('cross');
        }
    }
    
    if (div[0].className === 'cross' && div[1].className === 'cross' && div[2].className === 'cross') {
        results.textContent = 'X is a winner!';
        grid.removeEventListener('click', gameTurns);
    } else if (div[3].className === 'cross' && div[4].className === 'cross' && div[5].className === 'cross') {
        results.textContent = 'X is a winner!';
        grid.removeEventListener('click', gameTurns);
    } else if (div[6].className === 'cross' && div[7].className === 'cross' && div[8].className === 'cross') {
        results.textContent = 'X is a winner!';
        grid.removeEventListener('click', gameTurns);
    } else if (div[0].className === 'cross' && div[3].className === 'cross' && div[6].className === 'cross') {
        results.textContent = 'X is a winner!';
        grid.removeEventListener('click', gameTurns);
    } else if (div[1].className === 'cross' && div[4].className === 'cross' && div[7].className === 'cross') {
        results.textContent = 'X is a winner!';
        grid.removeEventListener('click', gameTurns);
    } else if (div[2].className === 'cross' && div[5].className === 'cross' && div[8].className === 'cross') {
        results.textContent = 'X is a winner!';
        grid.removeEventListener('click', gameTurns);
    } else if (div[0].className === 'cross' && div[4].className === 'cross' && div[8].className === 'cross') {
        results.textContent = 'X is a winner!';
        grid.removeEventListener('click', gameTurns);
    } else if (div[2].className === 'cross' && div[4].className === 'cross' && div[6].className === 'cross') {
        results.textContent = 'X is a winner!';
        grid.removeEventListener('click', gameTurns);
    } else if (div[0].className === 'nought' && div[1].className === 'nought' && div[2].className === 'nought') {
        results.textContent = 'O is a winner!';
        grid.removeEventListener('click', gameTurns);
    } else if (div[3].className === 'nought' && div[4].className === 'nought' && div[5].className === 'nought') {
        results.textContent = 'O is a winner!';
        grid.removeEventListener('click', gameTurns);
    } else if (div[6].className === 'nought' && div[7].className === 'nought' && div[8].className === 'nought') {
        results.textContent = 'O is a winner!';
        grid.removeEventListener('click', gameTurns);
    } else if (div[0].className === 'nought' && div[3].className === 'nought' && div[6].className === 'nought') {
        results.textContent = 'O is a winner!';
        grid.removeEventListener('click', gameTurns);
    } else if (div[1].className === 'nought' && div[4].className === 'nought' && div[7].className === 'nought') {
        results.textContent = 'O is a winner!';
        grid.removeEventListener('click', gameTurns);
    } else if (div[2].className === 'nought' && div[5].className === 'nought' && div[8].className === 'nought') {
        results.textContent = 'O is a winner!';
        grid.removeEventListener('click', gameTurns);
    } else if (div[0].className === 'nought' && div[4].className === 'nought' && div[8].className === 'nought') {
        results.textContent = 'O is a winner!';
        grid.removeEventListener('click', gameTurns);
    } else if (div[2].className === 'nought' && div[4].className === 'nought' && div[6].className === 'nought') {
        results.textContent = 'O is a winner!';
        grid.removeEventListener('click', gameTurns);
    } else if (crossSquare.length + noughtSquare.length === (div.length - 1)) {
        results.textContent = "It's a draw! Try again :)";
        grid.removeEventListener('click', gameTurns);
    }

    if (results.textContent === 'O is a winner!') {
        oWins += 1;
        oWon.textContent = 'O won: ' + oWins;
        rounds.textContent = 'Game Rounds: ' + (oWins + xWins);
    } else if (results.textContent === 'X is a winner!') {
        xWins += 1;
        xWon.textContent = 'X won: ' + xWins;
        rounds.textContent = 'Game Rounds: ' + (oWins + xWins);
    } 
}

grid.addEventListener('click', gameTurns);

function restartGame(event) {
    event.preventDefault();

    for (var i = 0; i < div.length; i++) {
        div[i].className = '';
    }
    grid.addEventListener('click', gameTurns);
    results.textContent = "Who's gonna win?";
}

restartButton.addEventListener('click', restartGame);