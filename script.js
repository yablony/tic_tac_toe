var grid = document.querySelector('section');

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
    }

grid.addEventListener('click', gameTurns);