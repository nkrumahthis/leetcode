/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    // check rows?
    for (let i = 0; i < 9; i++) {
        let temp = []
        for (let j = 0; j < 9; j++) {
            if (board[i][j] == ".") continue;
            if (temp.includes(board[i][j])) return false
            temp.push(board[i][j])
        }
    }
    // check columns?
    for (let i = 0; i < 9; i++) {
        let temp = []
        for (let j = 0; j < 9; j++) {
            if (board[j][i] == ".") continue;
            if (temp.includes(board[j][i])) return false
            temp.push(board[j][i])
        }
    }

    // check boxes?
    for (let k = 0; k < 9; k++) {
        let rowStart = Math.floor(k / 3) * 3
        let rowEnd = rowStart + 3
        let colStart = (k % 3) * 3
        let colEnd = colStart + 3

        let temp = []
        for (let i = rowStart; i < rowEnd; i++) {
            for (let j = colStart; j < colEnd; j++) {
                if (board[i][j] == ".") continue;
                if (temp.includes(board[i][j])) return false
                temp.push(board[i][j])
            }
        }
    }

    return true
};

let board1 =
    [
        ["5", "8", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]

console.log(isValidSudoku(board1)) // true

let board2 = [["8", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

console.log(isValidSudoku(board2)) // false

let board3 = [
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."]
]
console.log(isValidSudoku(board3)) // false
