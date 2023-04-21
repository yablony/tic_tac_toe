var grid = document.querySelector('section');

function gameTurns(event) {
    var square = event.target; 

    if (square.tagName === 'DIV')
    square.classList.add('cross');
}

grid.addEventListener('click', gameTurns);