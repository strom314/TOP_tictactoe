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

  let turn = 0;

  function addTurn() {
    turn++;
  }
  function resetTurn() {
    turn = 0;
  }
  function getTurn() {
    return turn;
  }

  function checkForWin(symbol) {
    const board = gameBoard.getBoard();
    winPatterns.forEach((pattern) => {
      if (
        board[pattern[0]] === symbol &&
        board[pattern[1]] === symbol &&
        board[pattern[2]] === symbol
      ) {
        //win
        console.log("player " + symbol + " has won");
        gameBoard.resetBoard();
        resetTurn();
        return true;
      } else if (board.indexOf("") === -1) {
        //draw
        console.log("It's a draw");
        gameBoard.resetBoard();
        resetTurn();
        return true;
      }
    });

    //nothing
    return false;
  }

  return { checkForWin, addTurn, getTurn };
})();

const domManager = (function () {
  const symbolButtons = Array.from(document.querySelectorAll(".symbol-button"));

  symbolButtons.forEach((button) => {
    button.addEventListener("click", placeSymbol);
  });

  function placeSymbol(event) {
    const index = symbolButtons.indexOf(event.target);

    if (gameManager.getTurn() % 2 == 0) {
      player1.play(index);
    } else {
      player2.play(index);
    }
  }

  function updateButtons() {
    for (let i = 0; i < gameBoard.getBoard().length; i++) {
      const symbol = gameBoard.getBoard()[i];
      symbolButtons[i].textContent = symbol;
    }
  }

  return { updateButtons };
})();

function createPlayer(name, symbol) {
  function play(index) {
    gameBoard.placeSymbol(symbol, index);
    domManager.updateButtons();
    gameManager.addTurn();
    gameManager.checkForWin(symbol);
  }

  return { name, symbol, play };
}

player1 = createPlayer("ivan", "X");
player2 = createPlayer("Noam", "O");

domManager.updateButtons();
// player2.play(4);
// player1.play(2);
// gameBoard.printBoard();
