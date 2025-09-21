const gameBoard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];

  function placeSymbol(symbol, index) {
    if (board[index] === "") {
      board[index] = symbol;
    }
  }
  function printBoard() {
    console.log(board);
  }
  function getBoard() {
    return board;
  }
  function resetBoard() {
    board = ["", "", "", "", "", "", "", "", ""];
  }

  return { placeSymbol, printBoard, getBoard, resetBoard };
})();

const gameManager = (function () {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  function checkForWin(symbol) {
    const board = gameBoard.getBoard();
    winPatterns.forEach((pattern) => {
      if (
        board[pattern[0]] === symbol &&
        board[pattern[1]] === symbol &&
        board[pattern[2]] === symbol
      ) {
        console.log("player " + symbol + " has won");
        gameBoard.resetBoard();
        return true;
      }
    });
    return false;
  }

  return { checkForWin };
})();

function createPlayer(name, symbol) {
  function play(index) {
    gameBoard.placeSymbol(symbol, index);
    gameBoard.printBoard();
    gameManager.checkForWin(symbol);
  }

  return { name, symbol, play };
}

player1 = createPlayer("ivan", "X");
player2 = createPlayer("Noam", "O");

player1.play(0);
player1.play(1);
player2.play(4);
player1.play(2);
gameBoard.printBoard();
