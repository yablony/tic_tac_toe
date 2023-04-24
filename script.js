var grid = document.querySelector('.game-board');
var div = document.querySelectorAll('div');
var results = document.querySelector('h2');
var restartButton = document.querySelector('#restart');
var rounds = document.querySelector('.rounds');
var xWon = document.querySelector('.x-wins');
var oWon = document.querySelector('.o-wins');
var oWins = 0;
var xWins = 0;
var draw = 0;

function gameTurns(event) {
    var square = event.target;
    var crossSquare = document.querySelectorAll('div.cross');
    var noughtSquare = document.querySelectorAll('div.nought');

    function winningConditions() {
        if (div[0].className === 'cross' && div[1].className === 'cross' && div[2].className === 'cross') {
            results.textContent = 'Shrimp is a winner!';
            grid.removeEventListener('click', gameTurns);
        } else if (div[3].className === 'cross' && div[4].className === 'cross' && div[5].className === 'cross') {
            results.textContent = 'Shrimp is a winner!';
            grid.removeEventListener('click', gameTurns);
        } else if (div[6].className === 'cross' && div[7].className === 'cross' && div[8].className === 'cross') {
            results.textContent = 'Shrimp is a winner!';
            grid.removeEventListener('click', gameTurns);
        } else if (div[0].className === 'cross' && div[3].className === 'cross' && div[6].className === 'cross') {
            results.textContent = 'Shrimp is a winner!';
            grid.removeEventListener('click', gameTurns);
        } else if (div[1].className === 'cross' && div[4].className === 'cross' && div[7].className === 'cross') {
            results.textContent = 'Shrimp is a winner!';
            grid.removeEventListener('click', gameTurns);
        } else if (div[2].className === 'cross' && div[5].className === 'cross' && div[8].className === 'cross') {
            results.textContent = 'Shrimp is a winner!';
            grid.removeEventListener('click', gameTurns);
        } else if (div[0].className === 'cross' && div[4].className === 'cross' && div[8].className === 'cross') {
            results.textContent = 'Shrimp is a winner!';
            grid.removeEventListener('click', gameTurns);
        } else if (div[2].className === 'cross' && div[4].className === 'cross' && div[6].className === 'cross') {
            results.textContent = 'Shrimp is a winner!';
            grid.removeEventListener('click', gameTurns);
        } else if (div[0].className === 'nought' && div[1].className === 'nought' && div[2].className === 'nought') {
            results.textContent = 'Dumpling is a winner!';
            grid.removeEventListener('click', gameTurns);
        } else if (div[3].className === 'nought' && div[4].className === 'nought' && div[5].className === 'nought') {
            results.textContent = 'Dumpling is a winner!';
            grid.removeEventListener('click', gameTurns);
        } else if (div[6].className === 'nought' && div[7].className === 'nought' && div[8].className === 'nought') {
            results.textContent = 'Dumpling is a winner!';
            grid.removeEventListener('click', gameTurns);
        } else if (div[0].className === 'nought' && div[3].className === 'nought' && div[6].className === 'nought') {
            results.textContent = 'Dumpling is a winner!';
            grid.removeEventListener('click', gameTurns);
        } else if (div[1].className === 'nought' && div[4].className === 'nought' && div[7].className === 'nought') {
            results.textContent = 'Dumpling is a winner!';
            grid.removeEventListener('click', gameTurns);
        } else if (div[2].className === 'nought' && div[5].className === 'nought' && div[8].className === 'nought') {
            results.textContent = 'Dumpling is a winner!';
            grid.removeEventListener('click', gameTurns);
        } else if (div[0].className === 'nought' && div[4].className === 'nought' && div[8].className === 'nought') {
            results.textContent = 'Dumpling is a winner!';
            grid.removeEventListener('click', gameTurns);
        } else if (div[2].className === 'nought' && div[4].className === 'nought' && div[6].className === 'nought') {
            results.textContent = 'Dumpling is a winner!';
            grid.removeEventListener('click', gameTurns);
        } else if (crossSquare.length + noughtSquare.length === div.length - 1) {
            results.textContent = "It's a draw! Try again :)";
            grid.removeEventListener('click', gameTurns);
        }
    }

    if (square.tagName === 'DIV' && square.className === '') {
        if (crossSquare.length > noughtSquare.length) {
            square.classList.add('nought');
            winningConditions(); // added this function in here as it needs to check for the winning conditions taken into account the tagName and the empty className
        } else {
            square.classList.add('cross');
            winningConditions();
        }
    }

    if (results.textContent === 'Dumpling is a winner!') {
        oWins += 1;
        oWon.textContent = '🥟 won: ' + oWins;
        rounds.textContent = 'Number of Courses: ' + (oWins + xWins + draw);
    } else if (results.textContent === 'Shrimp is a winner!') {
        xWins += 1;
        xWon.textContent = '🍤 won: ' + xWins;
        rounds.textContent = 'Number of Courses: ' + (oWins + xWins + draw);
    } else if (results.textContent === "It's a draw! Try again :)") {
        draw += 1;
        rounds.textContent = 'Number of Courses: ' + (oWins + xWins + draw);
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