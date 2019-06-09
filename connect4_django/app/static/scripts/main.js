const EMPTY = 0;
const BLACK = 1;
const RED = 2;
const ROWS = 6;
const COLS = 7;
const boardMap = Array.from({ length: ROWS }, () => (
    Array.from({ length: COLS }, () => 0)
));

var lastCol = 0;
var player = 'Black';

swal("Black starts!")

$('td').click(function() {
    var myClass = $(this).attr("class");
    makeMove(myClass);
    if (checkWinner(lastCol)) {
        gameOver();
    }
});

function makeMove(myClass) {
    $($('.' + myClass).get().reverse()).each(function(index) {
        if (!$(this).hasClass("red") && !$(this).hasClass("black")) {
            var colNum = parseInt(this.className.charAt(3), 10);

            if (player === 'Black') {
                $(this).addClass('black');
                player = 'Red';
                lastCol = colNum;
                boardMap[ROWS - 1 - index][colNum] = 1;
            } else if (player === 'Red') {
                $(this).addClass('red');
                player = 'Black';
                lastCol = colNum;
                boardMap[ROWS - 1 - index][colNum] = 2;
            }
            return false;
        }
    });
}

function checkWinner(lastCol) {
    if (isDraw() || is_winner_vert(lastCol) || is_winner_horiz(lastCol) || is_winner_diagl(lastCol) || is_winner_diagr(lastCol)) {
        return true;
    }
    return false;
}

function is_winner_vert(lastCol) {
    let count = 1;
    for (let i = 0; i < ROWS; i++) {
        if (boardMap[i][lastCol] === BLACK || boardMap[i][lastCol] === RED) {
            for (let j = i + 1; j < ROWS; j++) {
                if (boardMap[j][lastCol] == boardMap[i][lastCol]) {
                    count++;
                    console.log(j + ' is first and ' + i + ' is second and count is ' + count + ' and lastCol is ' + lastCol)
                } else {
                    break;
                }
            }
            break;
        }
    }
    if (count >= 4) {
        return true;
    }
    return false;
}

function is_winner_horiz(lastCol) {
    let count = 1;
    for (let i = 0; i < ROWS; i++) {
        if (boardMap[i][lastCol] != 0) {
            for (let j = lastCol + 1; j < COLS; j++) {
                if (boardMap[i][j] === boardMap[i][lastCol]) {
                    count++;
                } else {
                    break;
                }
            }
            for (let j = lastCol - 1; j >= 0; j--) {
                if (boardMap[i][j] === boardMap[i][lastCol]) {
                    count++;
                } else {
                    break;
                }
            }
            break;
        }
    }
    if (count >= 4) {
        return true;
    }
    return false;
}

function is_winner_diagl(lastCol) {
    var count = 1;
    var piece;
    for (let i = ROWS - 1; i >= 0; --i) {
        if (boardMap[i][lastCol] === 0) {
            var row = i + 1;
            var cols = lastCol;
            piece = boardMap[i + 1][lastCol];

            do {
                row++;
                cols--;
                if (row < ROWS && cols >= 0) {
                    if (boardMap[row][cols] === piece)
                        ++count;
                    else break;
                } else break;
            } while (boardMap[row][cols] === piece);

            row = i + 1;
            cols = lastCol;

            do {
                row--;
                cols++;
                if (row >= 0 && cols < COLS) {
                    if (boardMap[row][cols] === piece)
                        ++count;
                    else break;
                } else break;
            } while (boardMap[row][cols] === piece);

            if (count >= 4)
                return true;
            else
                return false;
        }
    }
    return false;
}

function is_winner_diagr(lastCol) {
    var count = 1;
    var piece;
    for (let i = ROWS - 1; i >= 0; i--) {
        if (boardMap[i][lastCol] === 0) {
            var row = i + 1;
            var cols = lastCol;
            piece = boardMap[i + 1][lastCol];

            do {
                row++;
                cols++;
                if (row < ROWS && cols < COLS) {
                    if (boardMap[row][cols] === piece)
                        count++;
                    else {
                        break;
                    }
                } else {
                    break;
                }
            } while (boardMap[row][cols] === piece);

            row = i + 1;
            cols = lastCol;

            do {
                row--;
                cols--;
                if (row > -1 && cols > -1) {
                    if (boardMap[row][cols] === piece)
                        count++;
                    else {
                        break;
                    }
                } else {
                    break;
                }
            } while (boardMap[row][cols] === piece);

            if (count >= 4) {
                return true;
            } else {
                return false;
            }
        }
    }
    return false;
}

function isDraw() {
    for (var col = 0; col < COLS; ++col) {
        if (boardMap[0][col] === EMPTY) {
            return false;
        }
    }
    return true;
}

function gameOver() {
    if (isDraw()) {
        swal("Game over!", "It\'s a draw!").then(okay => {
            if (okay) {
                swal("OKAY WORKED!")
            }
        })
    } else if (player === 'Black') {
        swal("Game over!", "Red wins!").then(okay => {
            if (okay) {
                swal("OKAY WORKED!")
            }
        });
    } else {
        swal("Game over!", "Black wins!").then(okay => {
            if (okay) {
                swal("OKAY WORKED!")
            }
        });
    }
}