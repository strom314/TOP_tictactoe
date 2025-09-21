const gameBoard = (function () {
  const board = ["", "", "", "", "", "", "", "", ""];

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

  return { placeSymbol, printBoard };
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
  function checkForWin(symbol){
    
  }
})();

function createPlayer(name, symbol) {
  function play(index) {
    gameBoard.placeSymbol(symbol, index);
  }

  return { name, symbol, play };
}

player1 = createPlayer("ivan", "X");
player2 = createPlayer("Noam", "O");

player1.play(0);
player2.play(4);
player1.play(4);
gameBoard.printBoard();
